import React from "react";
import { ActivityIndicator, Pressable, View } from "react-native";
import type { PressableStateCallbackType, StyleProp, ViewStyle } from "react-native";
import { NText } from "../../primitives/Text";
import { Divider } from "../../primitives/Divider";
import { ChevronIcon } from "../../icons/ChevronIcon";
import { useNuDSTheme } from "../../theme";

export type ListRowProps = {
  /** Primary label text (required) */
  label: string;
  /** Description text — displayed below the primary label */
  description?: string;
  /** Secondary label — right-aligned, next to the primary label */
  secondaryLabel?: string;
  /** Secondary description — below the secondary label */
  secondaryDescription?: string;
  /** Swap label/description typography: label becomes lighter, description becomes bold.
   *  Useful when the top text is a category ("From") and the bottom text is the value. */
  invertLabels?: boolean;
  /** Compact row height: 12px vertical padding instead of 16px */
  compact?: boolean;
  /** Leading slot — icon (20×20), avatar (32×32), or illustration */
  leading?: React.ReactNode;
  /** Trailing slot — badge, button, or custom content (overrides showChevron) */
  trailing?: React.ReactNode;
  /** Convenience: show a chevron icon in the trailing slot */
  showChevron?: boolean;
  /** Disabled state — reduces opacity, disables tap */
  disabled?: boolean;
  /** Loading state — shows spinner in trailing slot */
  loading?: boolean;
  /** Show a bottom divider */
  showDivider?: boolean;
  /** Press handler — when provided the row becomes tappable */
  onPress?: () => void;
  accessibilityLabel?: string;
  style?: StyleProp<ViewStyle>;
};

export const ListRow = ({
  label,
  description,
  secondaryLabel,
  secondaryDescription,
  invertLabels = false,
  compact = false,
  leading,
  trailing,
  showChevron = false,
  disabled = false,
  loading = false,
  showDivider = false,
  onPress,
  accessibilityLabel,
  style,
}: ListRowProps) => {
  const theme = useNuDSTheme();

  const isDisabled = disabled || loading;

  // Resolve trailing content: loading spinner → custom trailing → chevron
  const trailingContent = loading ? (
    <ActivityIndicator size="small" color={theme.color.content.subtle} />
  ) : trailing ? (
    trailing
  ) : showChevron ? (
    <View style={{ transform: [{ rotate: "-90deg" }] }}>
      <ChevronIcon
        size={20}
        color={
          disabled
            ? theme.color.content.disabled
            : theme.color.content.default
        }
      />
    </View>
  ) : null;

  // Text colors adapt to disabled state
  const primaryColor = disabled
    ? theme.color.content.disabled
    : theme.color.content.default;
  const subtleColor = disabled
    ? theme.color.content.disabled
    : theme.color.content.subtle;

  // Does the secondary column have content?
  const hasSecondary = !!(secondaryLabel || secondaryDescription);

  return (
    <View style={[{ width: "100%", position: "relative" }, style]}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={accessibilityLabel ?? label}
        accessibilityState={{ disabled: isDisabled }}
        disabled={isDisabled || !onPress}
        onPress={onPress}
        style={({ pressed }: PressableStateCallbackType) => ({
          flexDirection: "row",
          alignItems: "center",
          gap: theme.spacing[3], // 12px
          paddingHorizontal: theme.spacing[5], // 20px
          paddingVertical: compact ? theme.spacing[3] : theme.spacing[4], // 12 or 16
          backgroundColor: pressed
            ? theme.color.surface.subtleOnSubtle
            : theme.color.surface.default,
          opacity: disabled ? 0.4 : 1,
        })}
      >
        {/* ── Leading slot ── */}
        {leading ? (
          <View style={{ alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            {leading}
          </View>
        ) : null}

        {/* ── Content area (flex: 1) ── */}
        <View style={{ flex: 1, gap: theme.spacing[1], overflow: "hidden" }}>
          <NText
            variant={invertLabels ? "paragraphSmallDefault" : "labelSmallStrong"}
            style={{ color: invertLabels ? subtleColor : primaryColor }}
            numberOfLines={1}
          >
            {label}
          </NText>

          {description ? (
            <NText
              variant={invertLabels ? "labelSmallStrong" : "paragraphSmallDefault"}
              style={{ color: invertLabels ? primaryColor : subtleColor }}
              numberOfLines={2}
            >
              {description}
            </NText>
          ) : null}
        </View>

        {/* ── Secondary column ── */}
        {hasSecondary ? (
          <View
            style={{
              flexShrink: 0,
              maxWidth: 144,
              alignItems: "flex-end",
              gap: theme.spacing[1],
            }}
          >
            {secondaryLabel ? (
              <NText
                variant="labelSmallStrong"
                style={{ color: primaryColor, textAlign: "right" }}
                numberOfLines={1}
              >
                {secondaryLabel}
              </NText>
            ) : null}

            {secondaryDescription ? (
              <NText
                variant="paragraphSmallDefault"
                style={{ color: subtleColor, textAlign: "right" }}
                numberOfLines={1}
              >
                {secondaryDescription}
              </NText>
            ) : null}
          </View>
        ) : null}

        {/* ── Trailing slot ── */}
        {trailingContent ? (
          <View style={{ alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            {trailingContent}
          </View>
        ) : null}
      </Pressable>

      {/* ── Bottom divider ── */}
      {showDivider ? (
        <View
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            paddingHorizontal: theme.spacing[4],
          }}
        >
          <Divider />
        </View>
      ) : null}
    </View>
  );
};
