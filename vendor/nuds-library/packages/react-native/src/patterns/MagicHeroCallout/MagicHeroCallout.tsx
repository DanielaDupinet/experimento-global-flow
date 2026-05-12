import React, { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import type { ViewStyle } from "react-native";
import { Avatar } from "../../components/Avatar";
import { NText } from "../../primitives/Text";
import { ArrowRightIcon } from "../../icons/ArrowRightIcon";
import { PlaceholderIcon } from "../../icons/PlaceholderIcon";
import { WarningCircleIcon } from "../../icons/WarningCircleIcon";
import { WarningIcon } from "../../icons/WarningIcon";
import { useNuDSTheme } from "../../theme";
import {
  MagicHeroCalloutGradientBorder,
  MAGIC_HERO_CALLOUT_DEFAULT_HIGHLIGHT_LENGTH_PERCENT,
  highlightLengthPercentToStrokeFraction,
} from "./MagicHeroCalloutGradientBorder";

/** Figma Magic stacked fills: white scrim over tint (card, primary pill, trailing avatar). */
const MAGIC_CALLOUT_FILL_SCRIM_OPACITY = 0.4;

/** Magic frame stroke width (Figma `8094:169` / `141` / `174`). */
const MAGIC_FRAME_STROKE_WIDTH = 2;

/** `accentBorderSpeed === 1` matches default lap time; higher = faster. Clamped **0.2–5**. */
export const MAGIC_HERO_CALLOUT_DEFAULT_ACCENT_BORDER_SPEED = 1;

const ACCENT_BORDER_SPEED_MIN = 0.2;
const ACCENT_BORDER_SPEED_MAX = 5;

function clampAccentBorderSpeed(speed: number): number {
  return Math.min(ACCENT_BORDER_SPEED_MAX, Math.max(ACCENT_BORDER_SPEED_MIN, speed));
}

/**
 * **Magic Hero Callout** — hero card with title, optional critical body, trailing avatar, primary + ghost actions,
 * and optional **Magic** border (static or orbiting highlight).
 *
 * **Figma:** [instance `8077-1797`](https://www.figma.com/design/RxzAEZlmQX8Outs7RYQWw2/-WIP--NuDS-V3-%E2%80%93%C2%A01st-Level?node-id=8077-1797). Full node map, spacing audit, and border notes: **`README.md`** in this folder.
 *
 * **Border:** `showAccentBorder`, `animatedAccentBorder`, **`accentBorderSpeed`** (1 = default; higher = faster lap),
 * **`accentBorderHighlightLengthPercent`** (% of stroke midline lit, default **27.5**, range **6–50**),
 * optional **`accentBorderLapDurationMs`** (absolute lap time; overrides speed). Peers: **`react-native-svg`**, **`react-native-reanimated`** when animated.
 */

export type MagicHeroCalloutVariant = "standard" | "attention" | "critical";

export type MagicHeroCalloutProps = {
  variant?: MagicHeroCalloutVariant;
  title: string;
  /** Shown only when `variant` is `critical` and `showDescription` is true (matches Figma critical + body). */
  description?: string;
  showDescription?: boolean;
  /**
   * Renders the 2px rounded frame stroke (Figma Magic “animated” border [`8094-169`](https://www.figma.com/design/RxzAEZlmQX8Outs7RYQWw2/-WIP--NuDS-V3-%E2%80%93%C2%A01st-Level?node-id=8094-169) — **light** `/start` tint via `primaryPillTint`, not semantic `border.*` strong tokens).
   * When false and `variant` is `critical`, no border frame is drawn (matches optional Figma state).
   */
  showAccentBorder?: boolean;
  /**
   * When true (default), the Magic frame uses the orbiting highlight (`MagicHeroCalloutGradientBorder`).
   * When false, a static 2px `primaryPillTint` stroke. Still respects system reduced motion (static stroke).
   */
  animatedAccentBorder?: boolean;
  /**
   * One full lap around the border in **milliseconds** when `animatedAccentBorder` is true.
   * When set, **overrides** `accentBorderSpeed`. Omit to derive lap time from speed (default base **`theme.motion.main.slow` × 10** ÷ `accentBorderSpeed`).
   */
  accentBorderLapDurationMs?: number;
  /**
   * Lap speed multiplier when `accentBorderLapDurationMs` is omitted. **1** = default duration; **2** ≈ half the time (faster).
   * Clamped **0.2–5**.
   */
  accentBorderSpeed?: number;
  /**
   * **Percent (0–100 scale)** of the stroke **midline** perimeter that reads highlighted at once (incl. feather).
   * Figma [`8095-179`](https://www.figma.com/design/RxzAEZlmQX8Outs7RYQWw2/-WIP--NuDS-V3-%E2%80%93%C2%A01st-Level?node-id=8095-179) ≈ **25–30**; default **`MAGIC_HERO_CALLOUT_DEFAULT_HIGHLIGHT_LENGTH_PERCENT`** (**27.5**). Clamped **6–50**.
   */
  accentBorderHighlightLengthPercent?: number;
  primaryLabel?: string;
  secondaryLabel?: string;
  onPrimaryPress?: () => void;
  onSecondaryPress?: () => void;
  /** Replaces the default trailing avatar (placeholder / warning icons). */
  trailing?: React.ReactNode;
  style?: ViewStyle | ViewStyle[];
};

type VariantPalette = {
  cardBackground: string;
  titleColor: string;
  /** On-subtle (20) tint: primary pill, avatar, and **2px Magic frame** stroke (`8094:169` / `141` / `174` `/start` colors). */
  primaryPillTint: string;
  primaryContent: string;
  trailingIcon: React.ReactNode;
};

/** Renders the Magic hero callout pattern. See `README.md` in this folder for Figma and border behavior. */
export const MagicHeroCallout = ({
  variant = "standard",
  title,
  description,
  showDescription = false,
  showAccentBorder = true,
  animatedAccentBorder = true,
  accentBorderLapDurationMs,
  accentBorderSpeed,
  accentBorderHighlightLengthPercent,
  primaryLabel = "Label",
  secondaryLabel = "Not now",
  onPrimaryPress,
  onSecondaryPress,
  trailing,
  style,
}: MagicHeroCalloutProps) => {
  const theme = useNuDSTheme();
  const [cardLayout, setCardLayout] = useState({ width: 0, height: 0 });

  const baseAccentBorderLapMs = theme.motion.main.slow * 10;
  const magicBorderRotationMs =
    accentBorderLapDurationMs ??
    Math.max(
      1,
      Math.round(
        baseAccentBorderLapMs /
          clampAccentBorderSpeed(accentBorderSpeed ?? MAGIC_HERO_CALLOUT_DEFAULT_ACCENT_BORDER_SPEED),
      ),
    );

  const magicBorderHighlightStrokeFraction = highlightLengthPercentToStrokeFraction(
    accentBorderHighlightLengthPercent ?? MAGIC_HERO_CALLOUT_DEFAULT_HIGHLIGHT_LENGTH_PERCENT,
  );

  /** Maps `variant` to Figma **Standard / Attention / Critical** `MagicHeroCallout` type fills, borders, and trailing icon. */
  const palette: VariantPalette = (() => {
    switch (variant) {
      case "attention":
        return {
          cardBackground: theme.color.surface.feedback.attention,
          titleColor: theme.color.content.feedback.attention,
          primaryPillTint: theme.color.surface.feedback.attentionOnSubtle,
          primaryContent: theme.color.content.feedback.attention,
          trailingIcon: (
            <WarningIcon size={20} color={theme.color.content.feedback.attention} />
          ),
        };
      case "critical":
        return {
          cardBackground: theme.color.surface.feedback.critical,
          titleColor: theme.color.content.feedback.critical,
          primaryPillTint: theme.color.surface.feedback.criticalOnSubtle,
          primaryContent: theme.color.content.feedback.critical,
          trailingIcon: (
            <WarningCircleIcon size={20} color={theme.color.content.feedback.critical} />
          ),
        };
      default:
        return {
          cardBackground: theme.color.surface.accent.primarySubtle,
          titleColor: theme.color.content.accent.primary,
          primaryPillTint: theme.color.surface.accent.primarySubtleOnSubtle,
          primaryContent: theme.color.content.accent.primary,
          trailingIcon: (
            <PlaceholderIcon size={20} color={theme.color.content.accent.primary} />
          ),
        };
    }
  })();

  /** Trailing — Figma `8103:739` (default: single Avatar ≈ `8103:740`; group variants not implemented). */
  const resolvedTrailing =
    trailing ??
    (
      <Avatar
        variant="icon"
        size="medium"
        icon={palette.trailingIcon}
        backgroundColor={palette.primaryPillTint}
        backgroundScrimOpacity={MAGIC_CALLOUT_FILL_SCRIM_OPACITY}
      />
    );

  const showCriticalDescription = variant === "critical" && showDescription && Boolean(description);
  const gapTitleBlock = variant === "critical" ? theme.spacing[2] : 0;

  /** Critical: optional 2px frame (`animatedBorder` in Figma); standard & attention always show accent border. */
  const drawBorder = variant === "critical" ? showAccentBorder : true;

  return (
    <View style={[{ width: "100%" }, style]}>
      {/*
        Figma `8077:1797` root = full-width column. Next wrapper = file inner shell (px x4, pb x3 below card).
      */}
      <View
        style={{
          width: "100%",
          paddingHorizontal: theme.spacing[4],
          paddingBottom: theme.spacing[3],
        }}
      >
        {/* Card `Wrapper` `8077:1800` — fill stack + hairline + elevation + root `pb` x1 (Figma codegen) */}
        <View
          onLayout={(e) => {
            const { width, height } = e.nativeEvent.layout;
            setCardLayout({ width, height });
          }}
          style={{
            position: "relative",
            borderRadius: theme.radius.xl,
            backgroundColor: palette.cardBackground,
            overflow: "hidden",
            paddingBottom: theme.spacing[1],
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderBottomColor: theme.color.border.onSubtle,
            ...theme.elevation.level1,
            shadowColor: theme.color.content.default,
          }}
        >
          {/* Figma absolute fill: white 40% over subtle base (`linear-gradient` stack in file) */}
          <View
            pointerEvents="none"
            style={[
              StyleSheet.absoluteFillObject,
              {
                borderRadius: theme.radius.xl,
                backgroundColor: theme.color.background.default,
                opacity: MAGIC_CALLOUT_FILL_SCRIM_OPACITY,
              },
            ]}
          />

          {/* Magic frame — `8094:169` / `141` / `174`; motion `8094:170`; length `8095:179` */}
          {drawBorder ? (
            cardLayout.width > 0 && cardLayout.height > 0 ? (
              <MagicHeroCalloutGradientBorder
                width={cardLayout.width}
                height={cardLayout.height}
                borderRadius={theme.radius.xl}
                strokeWidth={MAGIC_FRAME_STROKE_WIDTH}
                baseColor={palette.primaryPillTint}
                highlightColor={palette.primaryContent}
                rotationDurationMs={magicBorderRotationMs}
                animated={animatedAccentBorder}
                highlightStrokeFraction={magicBorderHighlightStrokeFraction}
              />
            ) : (
              <View
                pointerEvents="none"
                style={{
                  ...StyleSheet.absoluteFillObject,
                  borderRadius: theme.radius.xl,
                  borderWidth: MAGIC_FRAME_STROKE_WIDTH,
                  borderColor: palette.primaryPillTint,
                }}
              />
            )
          ) : null}

          {/* `Top` (`8077:1801`): padding top/horizontal x5, bottom x4 */}
          <View
            style={{
              paddingTop: theme.spacing[5],
              paddingHorizontal: theme.spacing[5],
              paddingBottom: theme.spacing[4],
            }}
          >
            {/* Inner row (`8077:1802`): gap x3 between content column and trailing */}
            <View style={{ flexDirection: "row", alignItems: "flex-start", gap: theme.spacing[3] }}>
              {/* Content — `8077:2046`; title [`8077-1830`](https://www.figma.com/design/RxzAEZlmQX8Outs7RYQWw2/-WIP--NuDS-V3-%E2%80%93%C2%A01st-Level?node-id=8077-1830) / `2047` / `2050`; body `8102:121` */}
              <View style={{ flex: 1, gap: gapTitleBlock }}>
                <NText variant="labelMediumStrong" color={palette.titleColor} numberOfLines={4}>
                  {title}
                </NText>
                {showCriticalDescription ? (
                  <NText variant="paragraphSmallDefault" tone="secondary" numberOfLines={6}>
                    {description}
                  </NText>
                ) : null}
              </View>
              {resolvedTrailing}
            </View>
          </View>

          {/* `Bottom` (`8077:1805`): px x3, pb x1 — Figma metadata + codegen; button row full width of inset (w 319 in 343 card) */}
          <View
            style={{
              width: "100%",
              paddingHorizontal: theme.spacing[3],
              paddingBottom: theme.spacing[1],
              alignItems: "stretch",
            }}
          >
            {/* `BB / Hero Callout Button Group BB` [`8077-2074`](https://www.figma.com/design/RxzAEZlmQX8Outs7RYQWw2/-WIP--NuDS-V3-%E2%80%93%C2%A01st-Level?node-id=8077-2074): row, gap x2, 44px-tall slots */}
            <View
              style={{
                flexDirection: "row",
                flexWrap: "nowrap",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: theme.spacing[2],
              }}
            >
              {/* Primary — [`8086-867`](https://www.figma.com/design/RxzAEZlmQX8Outs7RYQWw2/-WIP--NuDS-V3-%E2%80%93%C2%A01st-Level?node-id=8086-867): outer 44px hit slot only; pill + fills live on inner `8086:868` (36 + px x4 + gap x1) */}
              {primaryLabel ? (
                <Pressable
                  accessibilityRole="button"
                  accessibilityLabel={primaryLabel}
                  disabled={!onPrimaryPress}
                  onPress={onPrimaryPress}
                  style={({ pressed }) => [
                    {
                      flexShrink: 0,
                      alignItems: "center",
                      justifyContent: "center",
                      minHeight: theme.spacing[11],
                      opacity: pressed ? 0.92 : 1,
                    },
                  ]}
                >
                  <View
                    style={{
                      position: "relative",
                      flexShrink: 0,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: theme.spacing[1],
                      minHeight: theme.spacing[9],
                      maxHeight: theme.spacing[9],
                      paddingHorizontal: theme.spacing[4],
                      borderRadius: theme.radius.full,
                      overflow: "hidden",
                    }}
                  >
                    <View
                      pointerEvents="none"
                      style={[
                        StyleSheet.absoluteFillObject,
                        { borderRadius: theme.radius.full, backgroundColor: palette.primaryPillTint },
                      ]}
                    />
                    <View
                      pointerEvents="none"
                      style={[
                        StyleSheet.absoluteFillObject,
                        {
                          borderRadius: theme.radius.full,
                          backgroundColor: theme.color.background.default,
                          opacity: MAGIC_CALLOUT_FILL_SCRIM_OPACITY,
                        },
                      ]}
                    />
                    <NText variant="labelXSmallStrong" color={palette.primaryContent} numberOfLines={1}>
                      {primaryLabel}
                    </NText>
                    <ArrowRightIcon size={16} color={palette.primaryContent} />
                  </View>
                </Pressable>
              ) : null}

              {/* Secondary — Figma `8086:844` type Ghost (`8086:878`); hitSlop for touch */}
              {secondaryLabel ? (
                <Pressable
                  accessibilityRole="button"
                  accessibilityLabel={secondaryLabel}
                  disabled={!onSecondaryPress}
                  onPress={onSecondaryPress}
                  hitSlop={{
                    top: theme.spacing[2],
                    bottom: theme.spacing[2],
                    left: theme.spacing[2],
                    right: theme.spacing[2],
                  }}
                  style={({ pressed }) => [
                    {
                      flexShrink: 0,
                      alignItems: "center",
                      justifyContent: "center",
                      minHeight: theme.spacing[11],
                      opacity: pressed ? 0.7 : 1,
                    },
                  ]}
                >
                  <View
                    style={{
                      flexShrink: 0,
                      minHeight: theme.spacing[9],
                      maxHeight: theme.spacing[9],
                      paddingHorizontal: theme.spacing[4],
                      justifyContent: "center",
                    }}
                  >
                    <NText variant="labelXSmallStrong" tone="secondary" numberOfLines={1}>
                      {secondaryLabel}
                    </NText>
                  </View>
                </Pressable>
              ) : null}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
