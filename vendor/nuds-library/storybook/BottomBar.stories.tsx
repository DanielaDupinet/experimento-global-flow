import React from "react";
import { Alert, View } from "react-native";
import {
  BottomBar,
  NText,
  useNuDSTheme,
} from "@nu-design-org/nuds-vibecode-react-native";

export default {
  title: "Components/BottomBar",
  component: BottomBar,
};

const onPress = (name: string) => () => Alert.alert(name);

// ---------------------------------------------------------------------------
// Vertical — Primary Only
// ---------------------------------------------------------------------------

export const VerticalPrimaryOnly = {
  render: () => (
    <BottomBar
      primaryLabel="Continue"
      onPrimaryPress={onPress("Primary")}
    />
  ),
};

// ---------------------------------------------------------------------------
// Vertical — With Secondary Action
// ---------------------------------------------------------------------------

export const VerticalWithSecondary = {
  render: () => (
    <BottomBar
      primaryLabel="Confirm payment"
      onPrimaryPress={onPress("Primary")}
      secondaryLabel="Go back"
      onSecondaryPress={onPress("Secondary")}
    />
  ),
};

// ---------------------------------------------------------------------------
// Vertical — Scrolled (with divider)
// ---------------------------------------------------------------------------

export const VerticalScrolled = {
  render: () => (
    <BottomBar
      primaryLabel="Button label"
      onPrimaryPress={onPress("Primary")}
      secondaryLabel="Secondary action"
      onSecondaryPress={onPress("Secondary")}
      scrolled
    />
  ),
};

// ---------------------------------------------------------------------------
// Vertical — With Footnote
// ---------------------------------------------------------------------------

export const VerticalWithFootnote = {
  render: () => (
    <BottomBar
      primaryLabel="Accept terms"
      onPrimaryPress={onPress("Primary")}
      footnote="By continuing, you agree to our terms and conditions"
      scrolled
    />
  ),
};

// ---------------------------------------------------------------------------
// Horizontal — Primary + Secondary
// ---------------------------------------------------------------------------

export const HorizontalLayout = {
  render: () => (
    <BottomBar
      primaryLabel="Primary"
      onPrimaryPress={onPress("Primary")}
      secondaryLabel="Secondary"
      onSecondaryPress={onPress("Secondary")}
      orientation="horizontal"
    />
  ),
};

// ---------------------------------------------------------------------------
// Horizontal — Scrolled with Footnote
// ---------------------------------------------------------------------------

export const HorizontalScrolledWithFootnote = {
  render: () => (
    <BottomBar
      primaryLabel="Primary"
      onPrimaryPress={onPress("Primary")}
      secondaryLabel="Secondary"
      onSecondaryPress={onPress("Secondary")}
      orientation="horizontal"
      scrolled
      footnote="Footnotes can be used to provide additional information"
    />
  ),
};

// ---------------------------------------------------------------------------
// In Context — Below Content
// ---------------------------------------------------------------------------

export const InContext = {
  render: () => {
    const theme = useNuDSTheme();
    return (
      <View style={{ flex: 1, backgroundColor: theme.color.background.default }}>
        <View
          style={{
            flex: 1,
            padding: theme.spacing[4],
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <NText variant="subtitleMediumStrong">Screen content above</NText>
          <NText variant="labelSmallDefault" tone="secondary">
            The Bottom Bar sits below this content
          </NText>
        </View>
        <BottomBar
          primaryLabel="Continue"
          onPrimaryPress={onPress("Continue")}
          secondaryLabel="Cancel"
          onSecondaryPress={onPress("Cancel")}
          scrolled
        />
      </View>
    );
  },
};
