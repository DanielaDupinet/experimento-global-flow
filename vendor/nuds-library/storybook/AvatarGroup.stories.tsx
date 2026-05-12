import React from "react";
import { View } from "react-native";
import {
  Avatar,
  AvatarGroup,
  NText,
  useNuDSTheme,
  RecurringPaymentsIcon,
  BoltIcon,
  LineChartIcon,
  CreditCardIcon,
} from "@nu-design-org/nuds-vibecode-react-native";

export default {
  title: "Components/AvatarGroup",
  component: AvatarGroup,
};

// ---------------------------------------------------------------------------
// Horizontal — All Sizes with 4 Avatars
// ---------------------------------------------------------------------------

export const HorizontalSizes = {
  render: () => {
    const theme = useNuDSTheme();
    return (
      <View style={{ padding: theme.spacing[4], gap: theme.spacing[6] }}>
        <View style={{ gap: theme.spacing[2] }}>
          <NText variant="labelSmallStrong" tone="secondary">
            XSmall (24px)
          </NText>
          <AvatarGroup size="xsmall">
            <Avatar variant="icon" icon={<RecurringPaymentsIcon size={12} />} />
            <Avatar variant="icon" icon={<BoltIcon size={12} />} />
            <Avatar variant="icon" icon={<LineChartIcon size={12} />} />
            <Avatar variant="icon" icon={<CreditCardIcon size={12} />} />
          </AvatarGroup>
        </View>

        <View style={{ gap: theme.spacing[2] }}>
          <NText variant="labelSmallStrong" tone="secondary">
            Small (32px)
          </NText>
          <AvatarGroup size="small">
            <Avatar variant="icon" icon={<RecurringPaymentsIcon size={16} />} />
            <Avatar variant="icon" icon={<BoltIcon size={16} />} />
            <Avatar variant="icon" icon={<LineChartIcon size={16} />} />
            <Avatar variant="icon" icon={<CreditCardIcon size={16} />} />
          </AvatarGroup>
        </View>

        <View style={{ gap: theme.spacing[2] }}>
          <NText variant="labelSmallStrong" tone="secondary">
            Medium (40px)
          </NText>
          <AvatarGroup size="medium">
            <Avatar variant="icon" icon={<RecurringPaymentsIcon size={20} />} />
            <Avatar variant="icon" icon={<BoltIcon size={20} />} />
            <Avatar variant="icon" icon={<LineChartIcon size={20} />} />
            <Avatar variant="icon" icon={<CreditCardIcon size={20} />} />
          </AvatarGroup>
        </View>

        <View style={{ gap: theme.spacing[2] }}>
          <NText variant="labelSmallStrong" tone="secondary">
            Large (64px)
          </NText>
          <AvatarGroup size="large">
            <Avatar variant="icon" icon={<RecurringPaymentsIcon size={32} />} />
            <Avatar variant="icon" icon={<BoltIcon size={32} />} />
            <Avatar variant="icon" icon={<LineChartIcon size={32} />} />
            <Avatar variant="icon" icon={<CreditCardIcon size={32} />} />
          </AvatarGroup>
        </View>
      </View>
    );
  },
};

// ---------------------------------------------------------------------------
// Horizontal — Avatar Counts (2, 3, 4)
// ---------------------------------------------------------------------------

export const HorizontalCounts = {
  render: () => {
    const theme = useNuDSTheme();
    return (
      <View style={{ padding: theme.spacing[4], gap: theme.spacing[6] }}>
        <View style={{ gap: theme.spacing[2] }}>
          <NText variant="labelSmallStrong" tone="secondary">
            2 Avatars
          </NText>
          <AvatarGroup size="medium">
            <Avatar variant="initials" initials="AB" />
            <Avatar variant="initials" initials="CD" />
          </AvatarGroup>
        </View>

        <View style={{ gap: theme.spacing[2] }}>
          <NText variant="labelSmallStrong" tone="secondary">
            3 Avatars
          </NText>
          <AvatarGroup size="medium">
            <Avatar variant="initials" initials="AB" />
            <Avatar variant="initials" initials="CD" />
            <Avatar variant="initials" initials="EF" />
          </AvatarGroup>
        </View>

        <View style={{ gap: theme.spacing[2] }}>
          <NText variant="labelSmallStrong" tone="secondary">
            4 Avatars
          </NText>
          <AvatarGroup size="medium">
            <Avatar variant="initials" initials="AB" />
            <Avatar variant="initials" initials="CD" />
            <Avatar variant="initials" initials="EF" />
            <Avatar variant="initials" initials="GH" />
          </AvatarGroup>
        </View>
      </View>
    );
  },
};

// ---------------------------------------------------------------------------
// Diagonal — Small & Medium
// ---------------------------------------------------------------------------

export const DiagonalOrientation = {
  render: () => {
    const theme = useNuDSTheme();
    return (
      <View style={{ padding: theme.spacing[4], gap: theme.spacing[6] }}>
        <View style={{ gap: theme.spacing[2] }}>
          <NText variant="labelSmallStrong" tone="secondary">
            Diagonal — Small
          </NText>
          <AvatarGroup size="small" orientation="diagonal">
            <Avatar variant="initials" initials="AB" />
            <Avatar variant="initials" initials="CD" />
          </AvatarGroup>
        </View>

        <View style={{ gap: theme.spacing[2] }}>
          <NText variant="labelSmallStrong" tone="secondary">
            Diagonal — Medium
          </NText>
          <AvatarGroup size="medium" orientation="diagonal">
            <Avatar variant="initials" initials="AB" />
            <Avatar variant="initials" initials="CD" />
          </AvatarGroup>
        </View>
      </View>
    );
  },
};

// ---------------------------------------------------------------------------
// Mixed Variants — Icons, Initials, Images in a Group
// ---------------------------------------------------------------------------

export const MixedVariants = {
  render: () => {
    const theme = useNuDSTheme();
    return (
      <View style={{ padding: theme.spacing[4], gap: theme.spacing[6] }}>
        <View style={{ gap: theme.spacing[2] }}>
          <NText variant="labelSmallStrong" tone="secondary">
            Mixed — Large
          </NText>
          <AvatarGroup size="large">
            <Avatar variant="initials" initials="PG" />
            <Avatar variant="icon" icon={<BoltIcon size={32} color={theme.color.content.default} />} />
            <Avatar variant="initials" initials="CL" onSubtle />
          </AvatarGroup>
        </View>
      </View>
    );
  },
};
