import React from "react";
import { Alert, View } from "react-native";
import {
  ButtonLink,
  SettingsIcon,
  ArrowRightIcon,
  NText,
  useNuDSTheme,
} from "@nu-design-org/nuds-vibecode-react-native";

export default {
  title: "Components/ButtonLink",
  component: ButtonLink,
};

const onPress = (name: string) => () => Alert.alert(name);

// ---------------------------------------------------------------------------
// Default — Primary
// ---------------------------------------------------------------------------

export const DefaultPrimary = {
  render: () => (
    <ButtonLink
      label="Button Link"
      onPress={onPress("default-primary")}
    />
  ),
};

// ---------------------------------------------------------------------------
// Default — Disabled
// ---------------------------------------------------------------------------

export const DefaultDisabled = {
  render: () => (
    <ButtonLink
      label="Button Link"
      disabled
    />
  ),
};

// ---------------------------------------------------------------------------
// Default — With Leading Icon
// ---------------------------------------------------------------------------

export const DefaultWithLeadingIcon = {
  render: () => (
    <ButtonLink
      label="Button Link"
      leadingIcon={<SettingsIcon />}
      onPress={onPress("leading-icon")}
    />
  ),
};

// ---------------------------------------------------------------------------
// Default — With Trailing Icon
// ---------------------------------------------------------------------------

export const DefaultWithTrailingIcon = {
  render: () => (
    <ButtonLink
      label="Button Link"
      trailingIcon={<ArrowRightIcon />}
      onPress={onPress("trailing-icon")}
    />
  ),
};

// ---------------------------------------------------------------------------
// Default — With Both Icons
// ---------------------------------------------------------------------------

export const DefaultWithBothIcons = {
  render: () => (
    <ButtonLink
      label="Button Link"
      leadingIcon={<SettingsIcon />}
      trailingIcon={<ArrowRightIcon />}
      onPress={onPress("both-icons")}
    />
  ),
};

// ---------------------------------------------------------------------------
// Compact — Primary
// ---------------------------------------------------------------------------

export const CompactPrimary = {
  render: () => (
    <ButtonLink
      label="Button Link"
      compact
      onPress={onPress("compact-primary")}
    />
  ),
};

// ---------------------------------------------------------------------------
// Compact — Disabled
// ---------------------------------------------------------------------------

export const CompactDisabled = {
  render: () => (
    <ButtonLink
      label="Button Link"
      compact
      disabled
    />
  ),
};

// ---------------------------------------------------------------------------
// Compact — With Icons
// ---------------------------------------------------------------------------

export const CompactWithIcons = {
  render: () => (
    <ButtonLink
      label="Button Link"
      compact
      leadingIcon={<SettingsIcon />}
      trailingIcon={<ArrowRightIcon />}
      onPress={onPress("compact-icons")}
    />
  ),
};

// ---------------------------------------------------------------------------
// All Variants Overview
// ---------------------------------------------------------------------------

export const AllVariants = {
  render: () => {
    const theme = useNuDSTheme();
    return (
      <View style={{ gap: theme.spacing[4], padding: theme.spacing[4] }}>
        <NText variant="subtitleMediumStrong">Default</NText>
        <ButtonLink
          label="Button Link"
          onPress={onPress("default")}
        />
        <ButtonLink
          label="Button Link"
          disabled
        />
        <ButtonLink
          label="Button Link"
          leadingIcon={<SettingsIcon />}
          trailingIcon={<ArrowRightIcon />}
          onPress={onPress("default-icons")}
        />
        <ButtonLink
          label="Button Link"
          leadingIcon={<SettingsIcon />}
          trailingIcon={<ArrowRightIcon />}
          disabled
        />

        <View style={{ height: theme.spacing[4] }} />

        <NText variant="subtitleMediumStrong">Compact</NText>
        <ButtonLink
          label="Button Link"
          compact
          onPress={onPress("compact")}
        />
        <ButtonLink
          label="Button Link"
          compact
          disabled
        />
        <ButtonLink
          label="Button Link"
          compact
          leadingIcon={<SettingsIcon />}
          trailingIcon={<ArrowRightIcon />}
          onPress={onPress("compact-icons")}
        />
        <ButtonLink
          label="Button Link"
          compact
          leadingIcon={<SettingsIcon />}
          trailingIcon={<ArrowRightIcon />}
          disabled
        />
      </View>
    );
  },
};
