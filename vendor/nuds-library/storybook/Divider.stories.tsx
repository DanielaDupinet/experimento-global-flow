import React from "react";
import { View } from "react-native";
import {
  Divider,
  NText,
  useNuDSTheme,
} from "@nu-design-org/nuds-vibecode-react-native";

export default {
  title: "Components/Divider",
  component: Divider,
};

// ---------------------------------------------------------------------------
// Default (1px)
// ---------------------------------------------------------------------------

export const Default = {
  render: () => {
    const theme = useNuDSTheme();
    return (
      <View style={{ gap: theme.spacing[4], padding: theme.spacing[4] }}>
        <NText variant="subtitleMediumStrong">Default (1px)</NText>
        <Divider />
      </View>
    );
  },
};

// ---------------------------------------------------------------------------
// Medium (2px)
// ---------------------------------------------------------------------------

export const Medium = {
  render: () => {
    const theme = useNuDSTheme();
    return (
      <View style={{ gap: theme.spacing[4], padding: theme.spacing[4] }}>
        <NText variant="subtitleMediumStrong">Medium (2px)</NText>
        <Divider size="medium" />
      </View>
    );
  },
};

// ---------------------------------------------------------------------------
// With Inset
// ---------------------------------------------------------------------------

export const WithInset = {
  render: () => {
    const theme = useNuDSTheme();
    return (
      <View style={{ gap: theme.spacing[4], padding: theme.spacing[4] }}>
        <NText variant="subtitleMediumStrong">With inset (16px)</NText>
        <Divider inset={16} />
        <NText variant="subtitleMediumStrong">Medium with inset (16px)</NText>
        <Divider size="medium" inset={16} />
      </View>
    );
  },
};

// ---------------------------------------------------------------------------
// All Variants
// ---------------------------------------------------------------------------

export const AllVariants = {
  render: () => {
    const theme = useNuDSTheme();
    return (
      <View style={{ gap: theme.spacing[6], padding: theme.spacing[4] }}>
        <NText variant="subtitleMediumStrong">Default (1px)</NText>
        <Divider />

        <NText variant="subtitleMediumStrong">Medium (2px)</NText>
        <Divider size="medium" />

        <NText variant="subtitleMediumStrong">Default with inset</NText>
        <Divider inset={16} />

        <NText variant="subtitleMediumStrong">Medium with inset</NText>
        <Divider size="medium" inset={16} />

        <NText variant="subtitleMediumStrong">In context</NText>
        <View style={{ backgroundColor: theme.color.surface.default, borderRadius: theme.radius.xl, padding: theme.spacing[4], gap: theme.spacing[3] }}>
          <NText variant="labelMediumStrong">Section A</NText>
          <Divider />
          <NText variant="labelMediumStrong">Section B</NText>
          <Divider size="medium" />
          <NText variant="labelMediumStrong">Section C</NText>
        </View>
      </View>
    );
  },
};
