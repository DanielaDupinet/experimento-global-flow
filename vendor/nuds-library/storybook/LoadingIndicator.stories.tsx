import React from "react";
import { View } from "react-native";
import type { Meta, StoryObj } from "@storybook/react-native";
import { LoadingIndicator, NText } from "@nu-design-org/nuds-vibecode-react-native";

const meta: Meta<typeof LoadingIndicator> = {
  title: "Components/LoadingIndicator",
  component: LoadingIndicator,
  args: {
    compact: false,
  },
};
export default meta;

type Story = StoryObj<typeof LoadingIndicator>;

export const Default: Story = {};

export const Compact: Story = {
  args: { compact: true },
};

export const SideBySide: Story = {
  render: () => (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 24 }}>
      <View style={{ alignItems: "center", gap: 8 }}>
        <LoadingIndicator />
        <NText variant="labelSmallDefault" tone="secondary">
          Default
        </NText>
      </View>
      <View style={{ alignItems: "center", gap: 8 }}>
        <LoadingIndicator compact />
        <NText variant="labelSmallDefault" tone="secondary">
          Compact
        </NText>
      </View>
    </View>
  ),
};
