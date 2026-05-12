import React from "react";
import { Pressable, View } from "react-native";
import type { ViewStyle } from "react-native";
import { NText } from "../../primitives/Text";
import { useNuDSTheme } from "../../theme";

export type SegmentedControlSegment = {
  key: string;
  /** Text label — omit for icon-only segments */
  label?: string;
  /** Icon element (20×20 recommended) — omit for label-only segments */
  icon?: React.ReactNode;
  /** Shows a small accent dot on the segment */
  notificationDot?: boolean;
};

export type SegmentedControlSize = "standard" | "small";

export type SegmentedControlProps = {
  /** Array of segments (2–4 items) */
  segments: SegmentedControlSegment[];
  /** Key of the currently selected segment */
  selectedKey: string;
  /** Called when a segment is pressed */
  onSelect: (key: string) => void;
  /** "standard" segments stretch to fill; "small" (icon-only) segments size to content */
  size?: SegmentedControlSize;
  /** Disables all segments */
  disabled?: boolean;
  style?: ViewStyle | ViewStyle[];
};

const TRACK_HEIGHT = 48;
const SEGMENT_HEIGHT = 44;
const TRACK_PADDING = 2;
const SEGMENT_HORIZONTAL_PADDING = 16;
const SMALL_SEGMENT_VERTICAL_PADDING = 12;
const ICON_SIZE = 20;
const ICON_LABEL_GAP = 8;
const DOT_SIZE = 8;

export const SegmentedControl = ({
  segments,
  selectedKey,
  onSelect,
  size = "standard",
  disabled = false,
  style,
}: SegmentedControlProps) => {
  const theme = useNuDSTheme();

  const allIconOnly = segments.every(
    (s) => s.icon != null && (s.label == null || s.label.length === 0),
  );
  const isSmall = size === "small" && allIconOnly;

  return (
    <View
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: theme.color.surface.subtle,
          borderRadius: theme.radius.full,
          paddingHorizontal: TRACK_PADDING,
          paddingVertical: TRACK_PADDING,
          alignSelf: isSmall ? "flex-start" : undefined,
        },
        !isSmall && { height: TRACK_HEIGHT },
        style,
      ]}
      accessibilityRole="tablist"
    >
      {segments.map((segment) => {
        const isSelected = segment.key === selectedKey;
        const hasIcon = segment.icon != null;
        const hasLabel = segment.label != null && segment.label.length > 0;

        const contentColor = disabled
          ? theme.color.content.disabled
          : isSelected
            ? theme.color.content.default
            : theme.color.content.subtle;

        const iconElement =
          hasIcon && React.isValidElement(segment.icon)
            ? React.cloneElement(segment.icon as React.ReactElement<{ color?: string }>, {
                color: contentColor,
              })
            : segment.icon;

        const dotElement = segment.notificationDot ? (
          <View
            style={{
              width: DOT_SIZE,
              height: DOT_SIZE,
              borderRadius: theme.radius.full,
              backgroundColor: theme.color.surface.accent.primary,
            }}
          />
        ) : null;

        return (
          <Pressable
            key={segment.key}
            accessibilityRole="tab"
            accessibilityState={{ selected: isSelected, disabled }}
            disabled={disabled}
            onPress={() => onSelect(segment.key)}
            style={[
              {
                borderRadius: theme.radius.full,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                paddingHorizontal: SEGMENT_HORIZONTAL_PADDING,
                gap: ICON_LABEL_GAP,
              },
              isSmall
                ? { paddingVertical: SMALL_SEGMENT_VERTICAL_PADDING }
                : { height: SEGMENT_HEIGHT, flex: 1, minWidth: 1, minHeight: 1 },
              isSelected && {
                backgroundColor: theme.color.surface.default,
                ...theme.elevation.level1,
              },
              disabled && !isSelected && { opacity: 0.6 },
            ]}
          >
            {hasIcon && (
              <View style={{ width: ICON_SIZE, height: ICON_SIZE }}>
                {iconElement}
              </View>
            )}

            {hasLabel ? (
              <View style={{ flexDirection: "row", alignItems: "flex-start", gap: ICON_LABEL_GAP }}>
                <NText
                  variant="labelSmallStrong"
                  color={contentColor}
                  numberOfLines={1}
                >
                  {segment.label}
                </NText>
                {dotElement}
              </View>
            ) : (
              dotElement
            )}
          </Pressable>
        );
      })}
    </View>
  );
};
