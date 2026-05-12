import React from "react";
import { Image, StyleSheet, View } from "react-native";
import type { ImageSourcePropType, StyleProp, ViewStyle } from "react-native";
import { NText } from "../../primitives/Text";
import { useNuDSTheme } from "../../theme";
import type { TypographyVariant } from "@nu-design-org/nuds-vibecode-tokens";

// ── Size tokens ──────────────────────────────────────────────────────
const SIZE_MAP = {
  xsmall: 24,
  small: 32,
  medium: 40,
  large: 64,
} as const;

const ICON_SIZE_MAP = {
  xsmall: 12,
  small: 16,
  medium: 20,
  large: 32,
} as const;

const INITIALS_VARIANT_MAP: Record<AvatarSize, TypographyVariant> = {
  xsmall: "label2XSmallStrong",
  small: "labelXSmallStrong",
  medium: "labelSmallStrong",
  large: "subtitleMediumStrong",
};

// ── Types ────────────────────────────────────────────────────────────
export type AvatarSize = "xsmall" | "small" | "medium" | "large";
export type AvatarVariant = "icon" | "image" | "initials";

export type AvatarProps = {
  /** Visual variant */
  variant?: AvatarVariant;
  /** Size preset */
  size?: AvatarSize;
  /** Icon node — used when variant="icon" */
  icon?: React.ReactNode;
  /** Image source — used when variant="image" */
  imageSource?: ImageSourcePropType;
  /** 1–2 letter initials — used when variant="initials" */
  initials?: string;
  /** Use accent background for initials (purple tint) */
  onSubtle?: boolean;
  /** Show a small notification dot badge */
  showNotificationDot?: boolean;
  /** Disabled state — reduces opacity */
  disabled?: boolean;
  /** Custom background colour — overrides the default circle background.
   *  Useful for branded avatars (e.g. Nu logo on a purple background). */
  backgroundColor?: string;
  /**
   * When greater than 0, draws `theme.color.background.default` at this opacity over the circle fill
   * (Magic stacked fills: tint + white scrim). Icon and initials variants only.
   */
  backgroundScrimOpacity?: number;
  /** Custom style on the outer container */
  style?: StyleProp<ViewStyle>;
};

export const Avatar = ({
  variant = "icon",
  size = "small",
  icon,
  imageSource,
  initials = "AA",
  onSubtle = false,
  showNotificationDot = false,
  disabled = false,
  backgroundColor: backgroundColorProp,
  backgroundScrimOpacity,
  style,
}: AvatarProps) => {
  const theme = useNuDSTheme();

  const dimension = SIZE_MAP[size];
  const iconSize = ICON_SIZE_MAP[size];
  const initialsTypo = INITIALS_VARIANT_MAP[size];

  // Background for icon / initials variants
  // Custom backgroundColor prop takes priority, then onSubtle accent, then default grey
  const circleBackground = backgroundColorProp
    ? backgroundColorProp
    : variant === "initials" && onSubtle
      ? theme.color.surface.accent.primarySubtleOnSubtle // light purple (brand[10])
      : theme.color.surface.subtle; // neutral grey

  const showBackgroundScrim =
    typeof backgroundScrimOpacity === "number" &&
    backgroundScrimOpacity > 0 &&
    (variant === "icon" || variant === "initials");

  return (
    <View
      style={[
        {
          width: dimension,
          height: dimension,
          borderRadius: dimension / 2,
          overflow: "hidden",
          alignItems: "center",
          justifyContent: "center",
          opacity: disabled ? 0.4 : 1,
        },
        style,
      ]}
    >
      {/* ── Image variant ── */}
      {variant === "image" && imageSource ? (
        <>
          <Image
            source={imageSource}
            style={{
              width: dimension,
              height: dimension,
              borderRadius: dimension / 2,
            }}
            resizeMode="cover"
          />
          {/* Subtle overlay matching Figma */}
          <View
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              borderRadius: dimension / 2,
              backgroundColor: theme.color.surface.subtle,
            }}
          />
        </>
      ) : null}

      {/* ── Icon variant ── */}
      {variant === "icon" ? (
        <>
          <View
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              borderRadius: dimension / 2,
              backgroundColor: circleBackground,
            }}
          />
          {showBackgroundScrim ? (
            <View
              pointerEvents="none"
              style={[
                StyleSheet.absoluteFillObject,
                {
                  borderRadius: dimension / 2,
                  backgroundColor: theme.color.background.default,
                  opacity: backgroundScrimOpacity,
                },
              ]}
            />
          ) : null}
          {icon ? (
            <View
              style={{
                width: iconSize,
                height: iconSize,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {icon}
            </View>
          ) : null}
        </>
      ) : null}

      {/* ── Initials variant ── */}
      {variant === "initials" ? (
        <>
          <View
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              borderRadius: dimension / 2,
              backgroundColor: circleBackground,
            }}
          />
          {showBackgroundScrim ? (
            <View
              pointerEvents="none"
              style={[
                StyleSheet.absoluteFillObject,
                {
                  borderRadius: dimension / 2,
                  backgroundColor: theme.color.background.default,
                  opacity: backgroundScrimOpacity,
                },
              ]}
            />
          ) : null}
          <NText
            variant={initialsTypo}
            style={{
              color: disabled
                ? theme.color.content.disabled
                : theme.color.content.default,
              textAlign: "center",
            }}
          >
            {initials.slice(0, 2).toUpperCase()}
          </NText>
        </>
      ) : null}

      {/* ── Notification dot badge ── */}
      {showNotificationDot && !disabled ? (
        <View
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: 8,
            height: 8,
            borderRadius: 4,
            backgroundColor: theme.color.surface.accent.primarySubtleOnPrimary,
            borderWidth: 2,
            borderColor: theme.color.surface.default,
          }}
        />
      ) : null}
    </View>
  );
};
