import React, { useEffect, useMemo, useRef, useState } from "react";
import { AccessibilityInfo, Animated, Easing, View } from "react-native";
import type { LayoutChangeEvent, LayoutRectangle, ViewProps, ViewStyle } from "react-native";
import { Box } from "../../primitives/Box";
import { NText } from "../../primitives/Text";
import { useNuDSTheme } from "../../theme";
import styles from "./styles";

export type TooltipArrowPosition =
  | "topCenter"
  | "bottomCenter"
  | "topLeft"
  | "bottomLeft"
  | "topRight"
  | "bottomRight";

export type TooltipProps = Omit<ViewProps, "children"> & {
  label: string;
  arrowPosition?: TooltipArrowPosition;
  visible?: boolean;
  maxWidth?: number;
  floating?: boolean;
  zIndex?: number;
  /** Layout frame of the element this tooltip is anchored to. */
  anchorFrame?: Pick<LayoutRectangle, "x" | "y" | "width" | "height">;
  /** Gap between anchor element and tooltip. */
  anchorGap?: number;
  /** Optional boundary width used to clamp horizontal overflow in floating mode. */
  boundaryWidth?: number;
  /** Horizontal inset used while clamping overflow. */
  boundaryInset?: number;
};

type HorizontalArrowAlign = "left" | "center" | "right";

const EASE_OUT_CUBIC = Easing.bezier(0.215, 0.61, 0.355, 1);

const getHorizontalArrowAlign = (arrowPosition: TooltipArrowPosition): HorizontalArrowAlign => {
  if (arrowPosition === "topLeft" || arrowPosition === "bottomLeft") return "left";
  if (arrowPosition === "topRight" || arrowPosition === "bottomRight") return "right";
  return "center";
};

const getOriginOffset = (
  arrowPosition: TooltipArrowPosition,
  offsetDistance: number
): { x: number; y: number } => {
  const isTopArrow = arrowPosition === "topCenter" || arrowPosition === "topLeft" || arrowPosition === "topRight";
  const horizontalAlign = getHorizontalArrowAlign(arrowPosition);
  const x = horizontalAlign === "left" ? -offsetDistance : horizontalAlign === "right" ? offsetDistance : 0;
  const y = isTopArrow ? -offsetDistance : offsetDistance;
  return { x, y };
};

export const Tooltip = ({
  label,
  arrowPosition = "topCenter",
  visible = true,
  maxWidth = 233,
  floating = false,
  zIndex,
  anchorFrame,
  anchorGap = 0,
  boundaryWidth,
  boundaryInset,
  style,
  ...rest
}: TooltipProps) => {
  const theme = useNuDSTheme();
  const [reducedMotionEnabled, setReducedMotionEnabled] = useState(false);
  const [tooltipSize, setTooltipSize] = useState<{ width: number; height: number } | null>(null);
  const progress = useRef(new Animated.Value(visible ? 1 : 0)).current;

  const horizontalAlign = getHorizontalArrowAlign(arrowPosition);
  const isTopArrow = arrowPosition === "topCenter" || arrowPosition === "topLeft" || arrowPosition === "topRight";

  const arrowWrapperStyle: ViewStyle = useMemo(() => {
    if (horizontalAlign === "left") {
      return {
        alignSelf: "flex-start",
        marginLeft: theme.spacing[4]
      };
    }
    if (horizontalAlign === "right") {
      return {
        alignSelf: "flex-end",
        marginRight: theme.spacing[4]
      };
    }
    return { alignSelf: "center" };
  }, [horizontalAlign, theme.spacing]);

  const originOffset = useMemo(
    () => getOriginOffset(arrowPosition, theme.spacing[2]),
    [arrowPosition, theme.spacing]
  );

  useEffect(() => {
    let mounted = true;
    const syncReduceMotion = (enabled: boolean) => {
      if (mounted) {
        setReducedMotionEnabled(enabled);
      }
    };

    AccessibilityInfo.isReduceMotionEnabled()
      .then(syncReduceMotion)
      .catch(() => {});

    const subscription = AccessibilityInfo.addEventListener("reduceMotionChanged", syncReduceMotion);

    return () => {
      mounted = false;
      subscription.remove();
    };
  }, []);

  useEffect(() => {
    Animated.timing(progress, {
      toValue: visible ? 1 : 0,
      duration: visible ? theme.motion.entering.quick : theme.motion.exiting.quick,
      easing: reducedMotionEnabled ? Easing.linear : EASE_OUT_CUBIC,
      useNativeDriver: true
    }).start();
  }, [progress, reducedMotionEnabled, theme.motion.entering.quick, theme.motion.exiting.quick, visible]);

  const animatedStyle: ViewStyle = reducedMotionEnabled
    ? {
        opacity: progress
      }
    : {
        opacity: progress,
        transform: [
          {
            translateX: progress.interpolate({
              inputRange: [0, 1],
              outputRange: [originOffset.x, 0]
            })
          },
          {
            translateY: progress.interpolate({
              inputRange: [0, 1],
              outputRange: [originOffset.y, 0]
            })
          },
          {
            scale: progress.interpolate({
              inputRange: [0, 1],
              outputRange: [0.9, 1]
            })
          }
        ]
      };

  const tooltipBackgroundColor = theme.color.content.default;
  const tooltipContentColor = theme.color.content.onColor;

  const arrowCommonStyle: ViewStyle = {
    width: 0,
    height: 0,
    borderLeftWidth: theme.spacing[2],
    borderRightWidth: theme.spacing[2],
    borderLeftColor: "transparent",
    borderRightColor: "transparent"
  };

  const anchoredFloatingStyle = useMemo<ViewStyle | null>(() => {
    if (!floating || !anchorFrame || !tooltipSize) return null;

    const rawLeft =
      horizontalAlign === "left"
        ? anchorFrame.x
        : horizontalAlign === "right"
          ? anchorFrame.x + anchorFrame.width - tooltipSize.width
          : anchorFrame.x + anchorFrame.width / 2 - tooltipSize.width / 2;

    const safeInset = boundaryInset ?? theme.spacing[4];
    const clampedLeft =
      typeof boundaryWidth === "number"
        ? Math.min(
            Math.max(rawLeft, safeInset),
            Math.max(safeInset, boundaryWidth - tooltipSize.width - safeInset)
          )
        : rawLeft;

    const top = isTopArrow
      ? anchorFrame.y + anchorFrame.height + anchorGap
      : anchorFrame.y - tooltipSize.height - anchorGap;

    return { left: clampedLeft, top };
  }, [
    anchorFrame,
    anchorGap,
    boundaryInset,
    boundaryWidth,
    floating,
    horizontalAlign,
    isTopArrow,
    theme.spacing,
    tooltipSize
  ]);

  const handleLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    setTooltipSize((prev) => {
      if (prev?.width === width && prev?.height === height) return prev;
      return { width, height };
    });
  };

  return (
    <Animated.View
      style={[
        styles.root,
        floating
          ? {
              position: "absolute",
              zIndex: zIndex ?? theme.zIndex.tooltip
            }
          : null,
        anchoredFloatingStyle,
        horizontalAlign === "left"
          ? styles.alignLeft
          : horizontalAlign === "right"
            ? styles.alignRight
            : styles.alignCenter,
        animatedStyle,
        style
      ]}
      onLayout={handleLayout}
      pointerEvents="none"
      {...rest}
    >
      {isTopArrow ? (
        <View style={[styles.arrowWrapperBase, styles.arrowWrapperCenter, arrowWrapperStyle]}>
          <View
            style={[
              arrowCommonStyle,
              {
                borderBottomWidth: theme.spacing[2],
                borderBottomColor: tooltipBackgroundColor
              }
            ]}
          />
        </View>
      ) : null}

      <Box
        style={{
          backgroundColor: tooltipBackgroundColor,
          borderRadius: theme.radius.md,
          paddingHorizontal: theme.spacing[4],
          paddingVertical: theme.spacing[3],
          maxWidth
        }}
      >
        <NText variant="labelSmallStrong" color={tooltipContentColor} style={styles.label}>
          {label}
        </NText>
      </Box>

      {!isTopArrow ? (
        <View style={[styles.arrowWrapperBase, styles.arrowWrapperCenter, arrowWrapperStyle]}>
          <View
            style={[
              arrowCommonStyle,
              {
                borderTopWidth: theme.spacing[2],
                borderTopColor: tooltipBackgroundColor
              }
            ]}
          />
        </View>
      ) : null}
    </Animated.View>
  );
};
