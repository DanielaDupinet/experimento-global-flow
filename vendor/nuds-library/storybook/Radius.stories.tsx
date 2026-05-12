import React from "react";
import { ScrollView, View } from "react-native";
import { NText, useNuDSTheme } from "@nu-design-org/nuds-vibecode-react-native";

export default {
  title: "Tokens/Radius"
};

export const AllRadii = {
  render: () => {
    const theme = useNuDSTheme();
    const radiusTokens = theme.radius;
    const entries = Object.entries(radiusTokens) as Array<[string, number]>;

    return (
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <NText variant="titleMedium">Border Radius</NText>
        <NText
          variant="labelXSmallDefault"
          tone="secondary"
          style={{ marginBottom: 16 }}
        >
          Available border-radius tokens.
        </NText>

        <View
          style={{ flexDirection: "row", flexWrap: "wrap", gap: 16 }}
        >
          {entries.map(([name, value]) => (
            <View key={name} style={{ alignItems: "center", width: 88 }}>
              <View
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: value,
                  backgroundColor: "#820AD1",
                  marginBottom: 8
                }}
              />
              <NText variant="labelSmallStrong">{name}</NText>
              <NText variant="label2XSmallDefault" tone="secondary">
                {value}px
              </NText>
            </View>
          ))}
        </View>
      </ScrollView>
    );
  }
};
