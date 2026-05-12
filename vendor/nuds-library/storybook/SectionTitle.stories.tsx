import React from "react";
import { View } from "react-native";
import {
  SectionTitle,
  useNuDSTheme,
  ChevronIcon,
  SettingsIcon,
} from "@nu-design-org/nuds-vibecode-react-native";

const onPress = (name: string) => () => {
  console.log(`[storybook] ${name}`);
};

export default {
  title: "Components/SectionTitle",
  component: SectionTitle,
};

// ---------------------------------------------------------------------------
// Compact (default)
// ---------------------------------------------------------------------------

export const Compact = {
  render: () => <SectionTitle title="Recent transactions" />,
};

// ---------------------------------------------------------------------------
// Compact — With Secondary
// ---------------------------------------------------------------------------

export const CompactWithSecondary = {
  render: () => (
    <SectionTitle
      title="Recent transactions"
      secondary="See all"
      onSecondaryPress={onPress("see-all")}
    />
  ),
};

// ---------------------------------------------------------------------------
// Compact — With Trailing Icon
// ---------------------------------------------------------------------------

export const CompactWithTrailing = {
  render: () => {
    const theme = useNuDSTheme();
    return (
      <SectionTitle
        title="Settings"
        trailing={
          <SettingsIcon size={20} color={theme.color.content.subtle} />
        }
        onTrailingPress={onPress("settings")}
      />
    );
  },
};

// ---------------------------------------------------------------------------
// Compact — With Secondary + Trailing
// ---------------------------------------------------------------------------

export const CompactFull = {
  render: () => {
    const theme = useNuDSTheme();
    return (
      <SectionTitle
        title="My investments"
        secondary="$12,450.00"
        trailing={
          <ChevronIcon size={20} color={theme.color.content.subtle} />
        }
        onTrailingPress={onPress("chevron")}
      />
    );
  },
};

// ---------------------------------------------------------------------------
// Compact — With Accent Secondary
// ---------------------------------------------------------------------------

export const CompactWithAccentSecondary = {
  render: () => (
    <SectionTitle
      title="Nu Account"
      secondary="Frees up credit faster"
      secondaryTone="accent"
    />
  ),
};

// ---------------------------------------------------------------------------
// Compact — Accent vs Default Comparison
// ---------------------------------------------------------------------------

export const SecondaryToneComparison = {
  render: () => {
    const theme = useNuDSTheme();
    return (
      <View style={{ gap: theme.spacing[2] }}>
        <SectionTitle
          title="Nu Account"
          secondary="Frees up credit faster"
          secondaryTone="accent"
        />
        <SectionTitle
          title="Linked accounts"
          secondary="1-3 business days"
        />
      </View>
    );
  },
};

// ---------------------------------------------------------------------------
// Non-compact
// ---------------------------------------------------------------------------

export const NonCompact = {
  render: () => <SectionTitle title="Section title" compact={false} />,
};

// ---------------------------------------------------------------------------
// Non-compact — With Secondary
// ---------------------------------------------------------------------------

export const NonCompactWithSecondary = {
  render: () => (
    <SectionTitle
      title="Your cards"
      compact={false}
      secondary="Manage"
      onSecondaryPress={onPress("manage")}
    />
  ),
};

// ---------------------------------------------------------------------------
// Non-compact — With Trailing Icon
// ---------------------------------------------------------------------------

export const NonCompactWithTrailing = {
  render: () => {
    const theme = useNuDSTheme();
    return (
      <SectionTitle
        title="Notifications"
        compact={false}
        trailing={
          <SettingsIcon size={20} color={theme.color.content.subtle} />
        }
        onTrailingPress={onPress("settings")}
      />
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
      <View style={{ gap: 8 }}>
        <SectionTitle title="Compact (default)" />
        <SectionTitle
          title="Compact + secondary"
          secondary="See all"
          onSecondaryPress={onPress("see-all")}
        />
        <SectionTitle
          title="Compact + trailing"
          trailing={
            <ChevronIcon size={20} color={theme.color.content.subtle} />
          }
          onTrailingPress={onPress("chevron")}
        />
        <SectionTitle
          title="Compact + both"
          secondary="$450.00"
          trailing={
            <ChevronIcon size={20} color={theme.color.content.subtle} />
          }
          onTrailingPress={onPress("chevron")}
        />
        <SectionTitle title="Non-compact" compact={false} />
        <SectionTitle
          title="Non-compact + secondary"
          compact={false}
          secondary="Manage"
          onSecondaryPress={onPress("manage")}
        />
        <SectionTitle
          title="Non-compact + trailing"
          compact={false}
          trailing={
            <SettingsIcon size={20} color={theme.color.content.subtle} />
          }
          onTrailingPress={onPress("settings")}
        />
        <SectionTitle
          title="Accent secondary"
          secondary="Frees up credit faster"
          secondaryTone="accent"
        />
      </View>
    );
  },
};
