import React from "react";
import { View } from "react-native";
import type { ViewStyle } from "react-native";
import { NText } from "../../primitives/Text";
import { useNuDSTheme } from "../../theme";

type BadgeColor = "accent" | "neutral" | "success" | "attention" | "critical";

export type BadgeProps = {
  /** Text displayed inside the badge */
  label?: string;
  /** Semantic color variant */
  color?: BadgeColor;
  /** When false, renders in disabled/N-A style regardless of color */
  enabled?: boolean;
  /** Use slightly darker background for placement on subtle surfaces */
  onSubtle?: boolean;
  style?: ViewStyle | ViewStyle[];
};

export const Badge = ({
  label = "Label",
  color = "accent",
  enabled = true,
  onSubtle = false,
  style,
}: BadgeProps) => {
  const theme = useNuDSTheme();

  // Resolve badge background from surface tokens
  const badgeSurfaces = {
    accent:    { bg: theme.color.surface.accent.primarySubtle,    bgStrong: theme.color.surface.accent.primarySubtleOnSubtle },
    neutral:   { bg: theme.color.surface.feedback.neutral,   bgStrong: theme.color.surface.feedback.neutralOnSubtle },
    success:   { bg: theme.color.surface.feedback.success,   bgStrong: theme.color.surface.feedback.successOnSubtle },
    attention: { bg: theme.color.surface.feedback.attention,   bgStrong: theme.color.surface.feedback.attentionOnSubtle },
    critical:  { bg: theme.color.surface.feedback.critical,  bgStrong: theme.color.surface.feedback.criticalOnSubtle },
    disabled:  { bg: theme.color.surface.feedback.neutral,   bgStrong: theme.color.surface.feedback.neutralOnSubtle },
  } as const;

  const resolvedColor = enabled ? color : "disabled";
  const surfaces = badgeSurfaces[resolvedColor];
  const backgroundColor = onSubtle ? surfaces.bgStrong : surfaces.bg;

  const textColor = enabled
    ? {
        accent: theme.color.content.accent.primary,
        neutral: theme.color.content.subtle,
        success: theme.color.content.feedback.success,
        attention: theme.color.content.feedback.attention,
        critical: theme.color.content.feedback.critical,
      }[color]
    : theme.color.content.disabled;

  return (
    <View
      style={[
        {
          alignSelf: "flex-start",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: theme.spacing[2],
          paddingVertical: 2,
          borderRadius: theme.radius.md,
          backgroundColor,
          minHeight: 20,
          maxWidth: 359,
          overflow: "hidden",
        },
        style,
      ]}
      accessibilityRole="text"
    >
      <NText
        variant="labelXSmallStrong"
        numberOfLines={1}
        style={{ color: textColor, textAlign: "center" }}
      >
        {label}
      </NText>
    </View>
  );
};
