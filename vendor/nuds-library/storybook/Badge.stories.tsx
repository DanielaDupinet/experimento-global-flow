import React from "react";
import { View } from "react-native";
import { Badge, NText, useNuDSTheme } from "@nu-design-org/nuds-vibecode-react-native";
import type { Meta, StoryObj } from "@storybook/react-native";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  args: {
    label: "Label",
    color: "accent",
    enabled: true,
    onSubtle: false,
  },
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {};

export const AllColors: Story = {
  render: () => {
    const theme = useNuDSTheme();
    const colors = ["accent", "neutral", "success", "attention", "critical"] as const;
    return (
      <View style={{ gap: theme.spacing[4], padding: theme.spacing[4] }}>
        <NText variant="labelSmallStrong">On Default Surface</NText>
        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: theme.spacing[2] }}>
          {colors.map((c) => (
            <Badge key={c} label={c} color={c} />
          ))}
          <Badge label="Disabled" enabled={false} />
        </View>

        <NText variant="labelSmallStrong">On Subtle Surface</NText>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            gap: theme.spacing[2],
            backgroundColor: theme.color.surface.subtle,
            padding: theme.spacing[3],
            borderRadius: theme.radius.lg,
          }}
        >
          {colors.map((c) => (
            <Badge key={c} label={c} color={c} onSubtle />
          ))}
          <Badge label="Disabled" enabled={false} onSubtle />
        </View>
      </View>
    );
  },
};
