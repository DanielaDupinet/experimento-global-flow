import React from "react";
import { Pressable, View } from "react-native";
import type { ViewStyle } from "react-native";
import { NText } from "../../primitives/Text";
import { useNuDSTheme } from "../../theme";

export type SectionTitleProps = {
  /** The section heading text */
  title?: string;
  /** When true (default) uses the smaller, secondary-coloured label style.
   *  When false uses the larger display title style. */
  compact?: boolean;
  /** Optional right-aligned secondary text (e.g. "See all") */
  secondary?: string;
  /** Tone of the secondary text. Defaults to "secondary" (grey).
   *  Use "accent" for brand-coloured emphasis. */
  secondaryTone?: "secondary" | "accent";
  /** Called when the secondary text is pressed */
  onSecondaryPress?: () => void;
  /** Optional trailing element (typically an icon action) */
  trailing?: React.ReactNode;
  /** Called when the trailing icon is pressed */
  onTrailingPress?: () => void;
  style?: ViewStyle | ViewStyle[];
};

export const SectionTitle = ({
  title = "Section title",
  compact = true,
  secondary,
  secondaryTone = "secondary",
  onSecondaryPress,
  trailing,
  onTrailingPress,
  style,
}: SectionTitleProps) => {
  const theme = useNuDSTheme();

  return (
    <View
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
          gap: 0,
          height: 48,
          minHeight: 48,
          maxHeight: 48,
          paddingLeft: theme.spacing[5],
          paddingRight: theme.spacing[2],
        },
        style,
      ]}
    >
      {/* Title */}
      <NText
        variant={compact ? "labelSmallStrong" : "titleXSmall"}
        tone={compact ? "secondary" : "primary"}
        style={{ flex: 1 }}
        numberOfLines={1}
      >
        {title}
      </NText>

      {/* Secondary text */}
      {secondary ? (
        onSecondaryPress ? (
          <Pressable
            onPress={onSecondaryPress}
            accessibilityRole="button"
            style={!trailing ? { paddingRight: theme.spacing[3] } : undefined}
          >
            <NText
              variant="labelSmallDefault"
              tone={secondaryTone === "accent" ? undefined : "secondary"}
              style={secondaryTone === "accent" ? { color: theme.color.content.accent.primary } : undefined}
            >
              {secondary}
            </NText>
          </Pressable>
        ) : (
          <View style={!trailing ? { paddingRight: theme.spacing[3] } : undefined}>
            <NText
              variant="labelSmallDefault"
              tone={secondaryTone === "accent" ? undefined : "secondary"}
              style={secondaryTone === "accent" ? { color: theme.color.content.accent.primary } : undefined}
            >
              {secondary}
            </NText>
          </View>
        )
      ) : null}

      {/* Trailing icon action */}
      {trailing ? (
        onTrailingPress ? (
          <Pressable
            onPress={onTrailingPress}
            accessibilityRole="button"
            style={{
              width: 48,
              height: 48,
              borderRadius: theme.radius.full,
              alignItems: "center",
              justifyContent: "center",
              padding: theme.spacing[2],
            }}
          >
            {trailing}
          </Pressable>
        ) : (
          <View
            style={{
              width: 48,
              height: 48,
              borderRadius: theme.radius.full,
              alignItems: "center",
              justifyContent: "center",
              padding: theme.spacing[2],
            }}
          >
            {trailing}
          </View>
        )
      ) : null}
    </View>
  );
};
