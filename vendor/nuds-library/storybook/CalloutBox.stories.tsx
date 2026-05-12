import React from "react";
import { Alert, ScrollView, View } from "react-native";
import {
  CalloutBox,
  NText,
  useNuDSTheme,
  ReceiptIcon,
} from "@nu-design-org/nuds-vibecode-react-native";

export default {
  title: "Components/CalloutBox",
  component: CalloutBox,
};

const onPress = (name: string) => () => Alert.alert(name);

// ---------------------------------------------------------------------------
// Basic — Title Only
// ---------------------------------------------------------------------------

export const TitleOnly = {
  render: () => (
    <CalloutBox
      title="Callout box title"
      onDismiss={onPress("Dismissed")}
    />
  ),
};

// ---------------------------------------------------------------------------
// With Description
// ---------------------------------------------------------------------------

export const WithDescription = {
  render: () => (
    <CalloutBox
      title="Callout box title"
      description="Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet"
      onDismiss={onPress("Dismissed")}
    />
  ),
};

// ---------------------------------------------------------------------------
// With Action
// ---------------------------------------------------------------------------

export const WithAction = {
  render: () => (
    <CalloutBox
      title="Callout box title"
      description="Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet"
      actionLabel="Saiba mais"
      onActionPress={onPress("Action pressed")}
      onDismiss={onPress("Dismissed")}
    />
  ),
};

// ---------------------------------------------------------------------------
// Without Dismiss
// ---------------------------------------------------------------------------

export const WithoutDismiss = {
  render: () => (
    <CalloutBox
      title="Important information"
      description="This callout cannot be dismissed because there is no onDismiss handler."
      actionLabel="Learn more"
      onActionPress={onPress("Action pressed")}
    />
  ),
};

// ---------------------------------------------------------------------------
// Description Only (no title)
// ---------------------------------------------------------------------------

export const DescriptionOnly = {
  render: () => (
    <CalloutBox
      description="Payments made after the 25th will be credited the following business day."
    />
  ),
};

// ---------------------------------------------------------------------------
// Accent Tone
// ---------------------------------------------------------------------------

export const AccentTone = {
  render: () => (
    <CalloutBox
      title="Pay smarter"
      description="Paying your full statement balance by the due date is a great way to minimize interest costs."
      tone="accent"
    />
  ),
};

// ---------------------------------------------------------------------------
// With Illustration
// ---------------------------------------------------------------------------

export const WithIllustration = {
  render: () => {
    const theme = useNuDSTheme();
    return (
      <CalloutBox
        title="Payment tip"
        description="Pay your full balance to avoid interest charges and build your credit score."
        tone="accent"
        illustration={
          <ReceiptIcon size={32} color={theme.color.content.accent.primary} />
        }
      />
    );
  },
};

// ---------------------------------------------------------------------------
// Accent + Action + Illustration
// ---------------------------------------------------------------------------

export const AccentFull = {
  render: () => {
    const theme = useNuDSTheme();
    return (
      <CalloutBox
        title="Earn more cashback"
        description="Activate your shopping rewards to earn up to 5% cashback on partner stores."
        tone="accent"
        illustration={
          <ReceiptIcon size={32} color={theme.color.content.accent.primary} />
        }
        actionLabel="Activate now"
        onActionPress={onPress("Activate")}
        onDismiss={onPress("Dismissed")}
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
      <ScrollView contentContainerStyle={{ gap: theme.spacing[6], padding: theme.spacing[4] }}>
        <NText variant="subtitleMediumStrong">Title only + dismiss</NText>
        <CalloutBox
          title="Callout box title"
          onDismiss={onPress("Dismissed")}
        />

        <NText variant="subtitleMediumStrong">Title + description + dismiss</NText>
        <CalloutBox
          title="Callout box title"
          description="Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet"
          onDismiss={onPress("Dismissed")}
        />

        <NText variant="subtitleMediumStrong">Full (title + description + action + dismiss)</NText>
        <CalloutBox
          title="Callout box title"
          description="Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet"
          actionLabel="Saiba mais"
          onActionPress={onPress("Action")}
          onDismiss={onPress("Dismissed")}
        />

        <NText variant="subtitleMediumStrong">No dismiss (persistent)</NText>
        <CalloutBox
          title="Persistent callout"
          description="This one stays on screen and cannot be dismissed."
          actionLabel="Learn more"
          onActionPress={onPress("Action")}
        />

        <NText variant="subtitleMediumStrong">Description only (no title)</NText>
        <CalloutBox
          description="Payments made after the 25th will be credited the following business day."
        />

        <NText variant="subtitleMediumStrong">Accent tone</NText>
        <CalloutBox
          title="Pay smarter"
          description="Paying your full statement balance by the due date minimizes interest costs."
          tone="accent"
        />

        <NText variant="subtitleMediumStrong">Accent + illustration</NText>
        <CalloutBox
          title="Earn cashback"
          description="Activate your shopping rewards to earn up to 5% cashback."
          tone="accent"
          illustration={
            <ReceiptIcon size={32} color={theme.color.content.accent.primary} />
          }
          actionLabel="Activate"
          onActionPress={onPress("Activate")}
          onDismiss={onPress("Dismissed")}
        />
      </ScrollView>
    );
  },
};
