import React, { useEffect, useRef, useState } from "react";
import { AccessibilityInfo, Animated, Easing, View } from "react-native";
import type { ViewProps, ViewStyle } from "react-native";
import Svg, { Circle } from "react-native-svg";
import { useNuDSTheme } from "../../theme";

export type LoadingIndicatorProps = ViewProps & {
  /** Use compact (20px) for inline/tight contexts; default is 48px */
  compact?: boolean;
  style?: ViewStyle | ViewStyle[];
};

const SIZES = { default: 48, compact: 20 } as const;
const STROKE_WIDTHS = { default: 4, compact: 2 } as const;
const ARC_RATIO = 0.25;

export const LoadingIndicator = ({
  compact = false,
  style,
  ...rest
}: LoadingIndicatorProps) => {
  const theme = useNuDSTheme();
  const spinValue = useRef(new Animated.Value(0)).current;
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const listener = AccessibilityInfo.addEventListener(
      "reduceMotionChanged",
      setReduceMotion,
    );
    AccessibilityInfo.isReduceMotionEnabled().then(setReduceMotion);
    return () => listener.remove();
  }, []);

  useEffect(() => {
    if (reduceMotion) return;

    const animation = Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 800,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    );
    animation.start();
    return () => animation.stop();
  }, [spinValue, reduceMotion]);

  const size = compact ? SIZES.compact : SIZES.default;
  const strokeWidth = compact ? STROKE_WIDTHS.compact : STROKE_WIDTHS.default;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const arcLength = circumference * ARC_RATIO;

  const rotate = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const trackColor = theme.color.surface.feedback.neutralOnSubtle;
  const arcColor = theme.color.content.accent.primary;
  const center = size / 2;

  return (
    <View
      style={style}
      accessibilityRole="progressbar"
      accessibilityLabel="Loading"
      {...rest}
    >
      <Animated.View
        style={reduceMotion ? undefined : { transform: [{ rotate }] }}
      >
        <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <Circle
            cx={center}
            cy={center}
            r={radius}
            stroke={trackColor}
            strokeWidth={strokeWidth}
            fill="none"
          />
          <Circle
            cx={center}
            cy={center}
            r={radius}
            stroke={arcColor}
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={`${arcLength} ${circumference - arcLength}`}
            strokeLinecap="round"
            transform={`rotate(-90 ${center} ${center})`}
          />
        </Svg>
      </Animated.View>
    </View>
  );
};
