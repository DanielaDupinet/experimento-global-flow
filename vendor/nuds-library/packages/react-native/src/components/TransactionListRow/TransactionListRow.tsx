import React, { useEffect, useRef } from "react";
import { Animated, Pressable, View } from "react-native";
import type { PressableStateCallbackType, ViewStyle } from "react-native";
import { NText } from "../../primitives/Text";
import { Divider } from "../../primitives/Divider";
import { useNuDSTheme } from "../../theme";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type TransactionListRowVariant =
  | "default"
  | "accent"
  | "success"
  | "attention"
  | "critical"
  | "canceled";

export type TransactionListRowSize = "default" | "small";

export type TransactionListRowProps = {
  /** Transaction name – semibold, single line with ellipsis */
  label: string;
  /** Description text shown below the label */
  description?: string;
  /** Optional timestamp shown before the description with a dot separator */
  timestamp?: string;
  /** Formatted amount string (e.g. "999.000,00") */
  amount?: string;
  /**
   * Currency symbol or prefix (e.g. "R$", "$").
   * Displayed before the amount when using the default "symbol" amount format.
   */
  amountPrefix?: string;
  /**
   * Currency code displayed after the amount (e.g. "BRL", "USD").
   * Displayed when `amountFormat` is `"currency"`.
   */
  amountSuffix?: string;
  /**
   * Controls how the amount is displayed.
   * - `"symbol"` — shows prefix before the amount (e.g. "R$ 999.000,00")
   * - `"currency"` — shows the amount followed by a currency code (e.g. "999.000,00 BRL")
   * @default "symbol"
   */
  amountFormat?: "symbol" | "currency";
  /** Optional secondary line below the amount */
  secondaryAmount?: string;
  /** Leading element – typically a 32 px avatar or icon */
  leading?: React.ReactNode;
  /**
   * Controls the amount text colour.
   * @default "default"
   */
  variant?: TransactionListRowVariant;
  /**
   * "default" uses 14 px typography; "small" uses 12 px.
   * @default "default"
   */
  size?: TransactionListRowSize;
  /** Reduces the row opacity when true */
  disabled?: boolean;
  /**
   * Renders a skeleton loading placeholder instead of real content.
   * When true, all text and amounts are replaced by animated shimmer bars.
   * @default false
   */
  skeleton?: boolean;
  /** Show a divider line at the bottom of the row */
  showDivider?: boolean;
  /** Called when the row is pressed */
  onPress?: () => void;
  style?: ViewStyle | ViewStyle[];
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const useAmountColor = (variant: TransactionListRowVariant) => {
  const theme = useNuDSTheme();
  switch (variant) {
    case "accent":
      return theme.color.content.accent.primary;
    case "success":
      return theme.color.content.feedback.success;
    case "attention":
      return theme.color.content.feedback.attention;
    case "critical":
      return theme.color.content.feedback.critical;
    case "canceled":
      return theme.color.content.subtle;
    case "default":
    default:
      return theme.color.content.default;
  }
};

// ---------------------------------------------------------------------------
// Skeleton bar
// ---------------------------------------------------------------------------

const SkeletonBar = ({
  width,
  height,
  borderRadius,
}: {
  width: number;
  height: number;
  borderRadius?: number;
}) => {
  const theme = useNuDSTheme();
  const opacity = useRef(new Animated.Value(0.4)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.4,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    );
    animation.start();
    return () => animation.stop();
  }, [opacity]);

  return (
    <Animated.View
      style={{
        width,
        height,
        borderRadius: borderRadius ?? height / 2,
        backgroundColor: theme.color.surface.subtle,
        opacity,
      }}
    />
  );
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export const TransactionListRow = ({
  label,
  description,
  timestamp,
  amount,
  amountPrefix,
  amountSuffix,
  amountFormat = "symbol",
  secondaryAmount,
  leading,
  variant = "default",
  size = "default",
  disabled = false,
  skeleton = false,
  showDivider = false,
  onPress,
  style,
}: TransactionListRowProps) => {
  const theme = useNuDSTheme();
  const amountColor = useAmountColor(variant);

  const isSmall = size === "small";
  const isCanceled = variant === "canceled";

  // Typography variants by size
  const labelVariant = isSmall ? "labelXSmallStrong" : "labelSmallStrong";
  const bodyVariant = isSmall ? "labelXSmallDefault" : "labelSmallDefault";

  // Spacing by size
  const horizontalPadding = isSmall ? theme.spacing[4] : theme.spacing[5];
  const contentGap = isSmall ? 2 : theme.spacing[1]; // 2 px = spacing.half (not tokenised)
  const dividerPadding = isSmall ? theme.spacing[4] : theme.spacing[5];

  // ── Skeleton state ──
  if (skeleton) {
    return (
      <View style={[{ width: "100%", position: "relative" }, style]}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: theme.spacing[3],
            paddingHorizontal: horizontalPadding,
            paddingVertical: theme.spacing[4],
            backgroundColor: theme.color.surface.default,
          }}
        >
          {/* Skeleton avatar circle */}
          <SkeletonBar width={32} height={32} borderRadius={16} />

          {/* Skeleton text bars */}
          <View style={{ flex: 1, gap: contentGap }}>
            <SkeletonBar width={112} height={isSmall ? 14 : 18} />
            <SkeletonBar width={80} height={isSmall ? 14 : 18} />
          </View>
        </View>

        {/* Divider */}
        {showDivider ? (
          <View
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              paddingHorizontal: dividerPadding,
            }}
          >
            <Divider />
          </View>
        ) : null}
      </View>
    );
  }

  // ── Amount rendering ──
  const renderAmount = () => {
    if (!amount) return null;

    if (amountFormat === "currency") {
      return (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: theme.spacing[1],
          }}
        >
          <NText
            variant={labelVariant}
            color={amountColor}
            numberOfLines={1}
            style={
              isCanceled ? { textDecorationLine: "line-through" } : undefined
            }
          >
            {amount}
          </NText>
          {amountSuffix ? (
            <NText
              variant={labelVariant}
              color={amountColor}
              numberOfLines={1}
              style={
                isCanceled ? { textDecorationLine: "line-through" } : undefined
              }
            >
              {amountSuffix}
            </NText>
          ) : null}
        </View>
      );
    }

    // Default: symbol format (prefix + amount)
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: theme.spacing[1],
        }}
      >
        {amountPrefix ? (
          <NText
            variant={labelVariant}
            color={amountColor}
            numberOfLines={1}
            style={
              isCanceled ? { textDecorationLine: "line-through" } : undefined
            }
          >
            {amountPrefix}
          </NText>
        ) : null}
        <NText
          variant={labelVariant}
          color={amountColor}
          numberOfLines={1}
          style={
            isCanceled ? { textDecorationLine: "line-through" } : undefined
          }
        >
          {amount}
        </NText>
      </View>
    );
  };

  const rowContent = (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: theme.spacing[3],
        paddingHorizontal: horizontalPadding,
        paddingVertical: theme.spacing[4],
        backgroundColor: theme.color.surface.default,
        opacity: disabled ? 0.4 : 1,
      }}
    >
      {/* Leading avatar / icon */}
      {leading ? (
        <View style={{ flexShrink: 0 }}>{leading}</View>
      ) : null}

      {/* Content – label + description row */}
      <View style={{ flex: 1, gap: contentGap, overflow: "hidden" }}>
        {/* Label */}
        <NText
          variant={labelVariant}
          tone={isCanceled ? "secondary" : "primary"}
          numberOfLines={1}
          style={
            isCanceled ? { textDecorationLine: "line-through" } : undefined
          }
        >
          {label}
        </NText>

        {/* Description with optional timestamp */}
        {description || timestamp ? (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: theme.spacing[1],
            }}
          >
            {timestamp ? (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: theme.spacing[1],
                  flexShrink: 0,
                }}
              >
                <NText variant={bodyVariant} tone="secondary" numberOfLines={1}>
                  {timestamp}
                </NText>
                <NText variant={bodyVariant} tone="secondary" numberOfLines={1}>
                  ·
                </NText>
              </View>
            ) : null}
            {description ? (
              <NText
                variant={bodyVariant}
                tone="secondary"
                numberOfLines={1}
                style={{ flex: 1 }}
              >
                {description}
              </NText>
            ) : null}
          </View>
        ) : null}
      </View>

      {/* Amount area */}
      {amount || secondaryAmount ? (
        <View
          style={{
            flexShrink: 0,
            alignItems: "flex-end",
            gap: contentGap,
          }}
        >
          {renderAmount()}
          {secondaryAmount ? (
            <NText variant={bodyVariant} tone="secondary" numberOfLines={1}>
              {secondaryAmount}
            </NText>
          ) : null}
        </View>
      ) : null}
    </View>
  );

  return (
    <View style={[{ width: "100%", position: "relative" }, style]}>
      {onPress ? (
        <Pressable
          onPress={onPress}
          disabled={disabled}
          accessibilityRole="button"
          accessibilityLabel={label}
          accessibilityState={{ disabled }}
          style={({ pressed }: PressableStateCallbackType) => ({
            backgroundColor: pressed
              ? theme.color.surface.subtle
              : undefined,
          })}
        >
          {rowContent}
        </Pressable>
      ) : (
        rowContent
      )}

      {/* Divider */}
      {showDivider ? (
        <View
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            paddingHorizontal: dividerPadding,
          }}
        >
          <Divider />
        </View>
      ) : null}
    </View>
  );
};
