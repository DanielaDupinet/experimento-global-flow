import React from "react";
import { View } from "react-native";
import {
  Avatar,
  NText,
  SettingsIcon,
  UserIcon,
  CashbackIcon,
  CardIcon,
  NuLogoIcon,
  useNuDSTheme,
} from "@nu-design-org/nuds-vibecode-react-native";

export default {
  title: "Components/Avatar",
  component: Avatar,
};

/* ── Icon variant ── */

export const IconDefault = {
  render: () => (
    <Avatar variant="icon" size="medium" icon={<SettingsIcon />} />
  ),
};

/* ── Initials variant ── */

export const InitialsDefault = {
  render: () => (
    <Avatar variant="initials" size="medium" initials="CL" />
  ),
};

export const InitialsOnSubtle = {
  render: () => (
    <Avatar variant="initials" size="medium" initials="CL" onSubtle />
  ),
};

/* ── All sizes ── */

export const AllSizes = {
  render: () => {
    const theme = useNuDSTheme();
    const sizes = ["xsmall", "small", "medium", "large"] as const;
    return (
      <View style={{ gap: theme.spacing[6], padding: theme.spacing[4] }}>
        <NText variant="labelSmallStrong">Icon variant — all sizes</NText>
        <View style={{ flexDirection: "row", alignItems: "center", gap: theme.spacing[3] }}>
          {sizes.map((s) => (
            <Avatar key={s} variant="icon" size={s} icon={<UserIcon />} />
          ))}
        </View>

        <NText variant="labelSmallStrong">Initials variant — all sizes</NText>
        <View style={{ flexDirection: "row", alignItems: "center", gap: theme.spacing[3] }}>
          {sizes.map((s) => (
            <Avatar key={s} variant="initials" size={s} initials="AB" />
          ))}
        </View>

        <NText variant="labelSmallStrong">Initials on subtle — all sizes</NText>
        <View style={{ flexDirection: "row", alignItems: "center", gap: theme.spacing[3] }}>
          {sizes.map((s) => (
            <Avatar key={s} variant="initials" size={s} initials="AB" onSubtle />
          ))}
        </View>
      </View>
    );
  },
};

/* ── Notification dot ── */

export const WithNotificationDot = {
  render: () => {
    const theme = useNuDSTheme();
    return (
      <View style={{ flexDirection: "row", alignItems: "center", gap: theme.spacing[4], padding: theme.spacing[4] }}>
        <Avatar variant="icon" size="small" icon={<CashbackIcon />} showNotificationDot />
        <Avatar variant="initials" size="medium" initials="CL" showNotificationDot />
        <Avatar variant="icon" size="large" icon={<CardIcon />} showNotificationDot />
      </View>
    );
  },
};

/* ── Custom background colour ── */

export const CustomBackground = {
  render: () => {
    const theme = useNuDSTheme();
    return (
      <View style={{ flexDirection: "row", alignItems: "center", gap: theme.spacing[4], padding: theme.spacing[4] }}>
        <Avatar
          variant="icon"
          size="medium"
          icon={<NuLogoIcon size={20} color={theme.color.content.onInverse} />}
          backgroundColor={theme.color.surface.accent.primary}
        />
        <Avatar
          variant="initials"
          size="medium"
          initials="Ch"
          backgroundColor={theme.color.content.feedback.success}
        />
        <Avatar
          variant="icon"
          size="large"
          icon={<CashbackIcon size={32} color={theme.color.content.onInverse} />}
          backgroundColor={theme.color.surface.accent.primarySubtleOnPrimary}
        />
      </View>
    );
  },
};

/* ── Disabled ── */

export const Disabled = {
  render: () => {
    const theme = useNuDSTheme();
    return (
      <View style={{ flexDirection: "row", alignItems: "center", gap: theme.spacing[4], padding: theme.spacing[4] }}>
        <Avatar variant="icon" size="medium" icon={<UserIcon />} disabled />
        <Avatar variant="initials" size="medium" initials="AB" disabled />
        <Avatar variant="initials" size="medium" initials="AB" onSubtle disabled />
      </View>
    );
  },
};

/* ── Full showcase ── */

export const AllVariants = {
  render: () => {
    const theme = useNuDSTheme();
    return (
      <View style={{ gap: theme.spacing[4], padding: theme.spacing[4] }}>
        <NText variant="labelSmallStrong">Icon</NText>
        <View style={{ flexDirection: "row", gap: theme.spacing[3], alignItems: "center" }}>
          <Avatar variant="icon" size="xsmall" icon={<SettingsIcon />} />
          <Avatar variant="icon" size="small" icon={<SettingsIcon />} />
          <Avatar variant="icon" size="small" icon={<SettingsIcon />} showNotificationDot />
          <Avatar variant="icon" size="medium" icon={<SettingsIcon />} />
          <Avatar variant="icon" size="large" icon={<SettingsIcon />} />
        </View>

        <NText variant="labelSmallStrong">Icon (disabled)</NText>
        <View style={{ flexDirection: "row", gap: theme.spacing[3], alignItems: "center" }}>
          <Avatar variant="icon" size="xsmall" icon={<SettingsIcon />} disabled />
          <Avatar variant="icon" size="small" icon={<SettingsIcon />} disabled />
          <Avatar variant="icon" size="medium" icon={<SettingsIcon />} disabled />
          <Avatar variant="icon" size="large" icon={<SettingsIcon />} disabled />
        </View>

        <NText variant="labelSmallStrong">Initials</NText>
        <View style={{ flexDirection: "row", gap: theme.spacing[3], alignItems: "center" }}>
          <Avatar variant="initials" size="xsmall" initials="AA" />
          <Avatar variant="initials" size="small" initials="AA" />
          <Avatar variant="initials" size="small" initials="AA" showNotificationDot />
          <Avatar variant="initials" size="medium" initials="AA" />
          <Avatar variant="initials" size="large" initials="AA" />
        </View>

        <NText variant="labelSmallStrong">Initials (on subtle)</NText>
        <View style={{ flexDirection: "row", gap: theme.spacing[3], alignItems: "center" }}>
          <Avatar variant="initials" size="xsmall" initials="AA" onSubtle />
          <Avatar variant="initials" size="small" initials="AA" onSubtle />
          <Avatar variant="initials" size="small" initials="AA" onSubtle showNotificationDot />
          <Avatar variant="initials" size="medium" initials="AA" onSubtle />
          <Avatar variant="initials" size="large" initials="AA" onSubtle />
        </View>

        <NText variant="labelSmallStrong">Initials (disabled)</NText>
        <View style={{ flexDirection: "row", gap: theme.spacing[3], alignItems: "center" }}>
          <Avatar variant="initials" size="xsmall" initials="AA" disabled />
          <Avatar variant="initials" size="small" initials="AA" disabled />
          <Avatar variant="initials" size="medium" initials="AA" disabled />
          <Avatar variant="initials" size="large" initials="AA" disabled />
        </View>

        <NText variant="labelSmallStrong">Custom background</NText>
        <View style={{ flexDirection: "row", gap: theme.spacing[3], alignItems: "center" }}>
          <Avatar variant="icon" size="small" icon={<NuLogoIcon size={16} color={theme.color.content.onInverse} />} backgroundColor={theme.color.surface.accent.primary} />
          <Avatar variant="icon" size="medium" icon={<NuLogoIcon size={20} color={theme.color.content.onInverse} />} backgroundColor={theme.color.surface.accent.primary} />
          <Avatar variant="initials" size="medium" initials="Ch" backgroundColor={theme.color.content.feedback.success} />
          <Avatar variant="icon" size="large" icon={<CashbackIcon size={32} color={theme.color.content.onInverse} />} backgroundColor={theme.color.surface.accent.primarySubtleOnPrimary} />
        </View>
      </View>
    );
  },
};
