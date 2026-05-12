import type { Meta, StoryObj } from "@storybook/react-native";
import React from "react";
import { View } from "react-native";
import { Box, NText } from "@nu-design-org/nuds-vibecode-react-native";

const mode = process.env.EXPO_PUBLIC_NUDS_SOURCE_MODE ?? "local";

const meta: Meta = {
  title: "Home/Storybook Modes"
};

export default meta;

type Story = StoryObj;

export const StartHere: Story = {
  render: () => (
    <View style={{ padding: 16, gap: 12 }}>
      <NText variant="titleSmall">NuDS Storybook Home</NText>

      <Box surface="primary" style={{ padding: 12, borderRadius: 12, gap: 8 }}>
        <NText variant="labelMediumStrong">Current source mode: {mode}</NText>
        <NText variant="labelSmallDefault" tone="secondary">
          local mode resolves NuDS packages from workspace source files.
        </NText>
        <NText variant="labelSmallDefault" tone="secondary">
          package mode resolves NuDS packages from package main files to mimic consumers.
        </NText>
      </Box>

      <Box surface="secondary" style={{ padding: 12, borderRadius: 12, gap: 8 }}>
        <NText variant="labelMediumStrong">How to navigate</NText>
        <NText variant="labelSmallDefault" tone="secondary">
          Use the Storybook sidebar to open components and patterns.
        </NText>
        <NText variant="labelSmallDefault" tone="secondary">
          Run `npm run storybook:local` for local source view.
        </NText>
        <NText variant="labelSmallDefault" tone="secondary">
          Run `npm run storybook:package` for package behavior view.
        </NText>
      </Box>
    </View>
  )
};
