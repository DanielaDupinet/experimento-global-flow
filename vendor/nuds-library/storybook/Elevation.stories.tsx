import React from "react";
import { ScrollView, View } from "react-native";
import { NText, useNuDSTheme } from "@nu-design-org/nuds-vibecode-react-native";

export default {
  title: "Tokens/Elevation"
};

const ElevationCard = ({
  name,
  shadowStyle
}: {
  name: string;
  shadowStyle: Record<string, unknown>;
}) => (
  <View
    style={{
      backgroundColor: "#FFFFFF",
      borderRadius: 12,
      padding: 16,
      marginBottom: 16,
      alignItems: "center",
      justifyContent: "center",
      height: 88,
      ...shadowStyle
    }}
  >
    <NText variant="paragraphSmallStrong">{name}</NText>
    <NText variant="label2XSmallDefault" tone="secondary" style={{ marginTop: 4 }}>
      {`offset: ${(shadowStyle.shadowOffset as { width: number; height: number })?.width ?? 0}, ${(shadowStyle.shadowOffset as { width: number; height: number })?.height ?? 0}  |  radius: ${shadowStyle.shadowRadius}  |  opacity: ${shadowStyle.shadowOpacity}`}
    </NText>
    <NText variant="label2XSmallDefault" tone="secondary">
      {`elevation (Android): ${shadowStyle.elevation}`}
    </NText>
  </View>
);

export const AllLevels = {
  render: () => {
    const theme = useNuDSTheme();
    const elevationTokens = theme.elevation;
    const entries = Object.entries(elevationTokens) as Array<
      [string, Record<string, unknown>]
    >;

    return (
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <NText variant="titleMedium">Elevation / Shadows</NText>
        <NText
          variant="labelXSmallDefault"
          tone="secondary"
          style={{ marginBottom: 16 }}
        >
          Drop-shadow tokens for layering and depth. Each level shows its iOS shadow
          properties and Android elevation value.
        </NText>

        {entries.map(([name, style]) => (
          <ElevationCard key={name} name={name} shadowStyle={style} />
        ))}
      </ScrollView>
    );
  }
};
