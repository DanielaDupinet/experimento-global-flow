import React from "react";
import { View } from "react-native";
import { NText } from "@nu-design-org/nuds-vibecode-react-native";

export default {
  title: "Primitives/NText",
  component: NText,
  args: {
    children: "The quick brown fox jumps over the lazy dog",
    variant: "paragraphSmallDefault",
    tone: "primary"
  }
};

export const Variants = {
  render: () => (
    <View style={{ gap: 8 }}>
      <NText variant="titleLarge">Title Large</NText>
      <NText variant="titleMedium">Title Medium</NText>
      <NText variant="titleSmall">Title Small</NText>
      <NText variant="paragraphMediumDefault">Paragraph Medium Default</NText>
      <NText variant="paragraphMediumStrong">Paragraph Medium Strong</NText>
      <NText variant="paragraphSmallDefault">Paragraph Small Default</NText>
      <NText variant="paragraphSmallStrong">Paragraph Small Strong</NText>
      <NText variant="labelMediumDefault">Label Medium Default</NText>
      <NText variant="labelMediumStrong">Label Medium Strong</NText>
      <NText variant="labelSmallDefault">Label Small Default</NText>
      <NText variant="labelSmallStrong">Label Small Strong</NText>
    </View>
  )
};

export const TonesAndTabularNumbers = {
  render: () => (
    <View style={{ gap: 8 }}>
      <NText tone="primary">Primary tone</NText>
      <NText tone="secondary">Secondary tone</NText>
      <NText tone="positive">Positive tone</NText>
      <NText tone="warning">Warning tone</NText>
      <NText tone="negative">Negative tone</NText>
      <NText tabularNumbers>0123456789</NText>
    </View>
  )
};
