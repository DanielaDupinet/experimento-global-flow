import React, { useEffect, useMemo, useRef } from "react";
import { Animated, Easing, Pressable, View } from "react-native";
import type { ViewStyle } from "react-native";
import { NText } from "../../primitives/Text";
import { useNuDSTheme } from "../../theme";

export type LimitBarProps = {
  availableAmount?: number;
  totalLimit?: number;
  onManagePress?: () => void;
  animationDuration?: number;
  label?: string;
  used?: number;
  total?: number;
  style?: ViewStyle | ViewStyle[];
};

export const LimitBar = ({
  availableAmount,
  totalLimit,
  onManagePress,
  animationDuration = 800,
  label,
  used,
  total,
  style
}: LimitBarProps) => {
  const theme = useNuDSTheme();
  const resolvedTotal = totalLimit ?? total ?? 2000;
  const resolvedUsed = used ?? (availableAmount !== undefined ? resolvedTotal - availableAmount : 1350.75);
  const resolvedAvailable = availableAmount ?? Math.max(resolvedTotal - resolvedUsed, 0);
  const clamped = resolvedTotal > 0 ? Math.min(resolvedUsed / resolvedTotal, 1) : 0;
  const progressAnimation = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(progressAnimation, {
      toValue: clamped,
      duration: animationDuration,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false
    }).start();
  }, [animationDuration, clamped, progressAnimation]);
  const animatedWidth = progressAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"]
  });
  const resolvedLabel = label ?? `${new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(resolvedAvailable)} available`;

  return (
    <View style={[{ width: "100%", paddingHorizontal: theme.spacing[9], paddingVertical: theme.spacing[2] }, style]}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <NText variant="labelSmallStrong">{resolvedLabel}</NText>
        <Pressable onPress={onManagePress} hitSlop={8}>
          <NText variant="labelSmallStrong" color={theme.color.content.accent.primary}>
            Manage
          </NText>
        </Pressable>
      </View>
      <View
        style={{
          marginTop: theme.spacing[2],
          height: 6,
          borderRadius: theme.radius.full,
          backgroundColor: theme.color.surface.subtleOnSubtle,
          overflow: "hidden"
        }}
      >
        <Animated.View
          style={{
            width: animatedWidth,
            height: "100%",
            backgroundColor: theme.color.surface.accent.primary
          }}
        />
      </View>
    </View>
  );
};
