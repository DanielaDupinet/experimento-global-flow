import React from "react";
import { ScrollView, View } from "react-native";
import { NText, useNuDSTheme } from "@nu-design-org/nuds-vibecode-react-native";

export default {
  title: "Tokens/Spacing"
};

export const Scale = {
  render: () => {
    const theme = useNuDSTheme();
    const spacingTokens = theme.spacing;
    const entries = Object.entries(spacingTokens) as Array<[string, number]>;

    return (
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <NText variant="titleMedium">Spacing Scale</NText>
        <NText
          variant="labelXSmallDefault"
          tone="secondary"
          style={{ marginBottom: 16 }}
        >
          4pt baseline grid. The key represents the token name, the value is in
          pixels.
        </NText>

        {entries.map(([key, value]) => (
          <View
            key={key}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 12,
              gap: 12
            }}
          >
            {/* Label */}
            <View style={{ width: 60 }}>
              <NText variant="labelSmallStrong">spacing.{key}</NText>
              <NText variant="label2XSmallDefault" tone="secondary">
                {value}px
              </NText>
            </View>

            {/* Visual bar */}
            <View
              style={{
                width: value,
                height: 24,
                backgroundColor: "#820AD1",
                borderRadius: 4,
                minWidth: value === 0 ? 2 : undefined,
                opacity: value === 0 ? 0.3 : 1
              }}
            />
          </View>
        ))}
      </ScrollView>
    );
  }
};
