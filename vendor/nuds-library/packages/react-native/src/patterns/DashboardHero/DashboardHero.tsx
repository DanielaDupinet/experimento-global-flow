import React, { useEffect, useRef, useState } from "react";
import { Animated, View } from "react-native";
import type { ViewStyle } from "react-native";
import Svg, { Ellipse, G, Rect } from "react-native-svg";
import { NText } from "../../primitives/Text";
import { useNuDSTheme } from "../../theme";

export type DashboardHeroProps = {
  balance?: string;
  dueDate?: string;
  showAutopay?: boolean;
  autopayDate?: string;
  autopayStatus?: "success" | "attention" | "critical";
  enableRotation?: boolean;
  rotationDuration?: number;
  /** Duration of the balance counting animation in ms (matches LimitBar) */
  balanceAnimationDuration?: number;
  /** Custom illustration to replace the default card SVG */
  illustration?: React.ReactNode;
  style?: ViewStyle | ViewStyle[];
};

export const DashboardHero = ({
  balance = "$1,350.75",
  dueDate = "Sep 28",
  showAutopay = false,
  autopayDate = "Oct 10",
  autopayStatus = "success",
  enableRotation = false,
  rotationDuration = 3000,
  balanceAnimationDuration = 800,
  illustration,
  style
}: DashboardHeroProps) => {
  const theme = useNuDSTheme();
  const [isShowingAutopay, setIsShowingAutopay] = useState(showAutopay && !enableRotation);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const translateYAnim = useRef(new Animated.Value(0)).current;

  // Balance counting animation
  const numericBalance = parseFloat(balance.replace(/[^0-9.]/g, "")) || 0;
  const [displayBalance, setDisplayBalance] = useState("$0.00");
  const formatterRef = useRef(
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" })
  );

  useEffect(() => {
    let startTime: number | null = null;
    let rafId: number;
    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / balanceAnimationDuration, 1);
      // Ease-out for smooth deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayBalance(formatterRef.current.format(numericBalance * eased));
      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      }
    };
    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [numericBalance, balanceAnimationDuration]);

  const animateTransition = (toAutopay: boolean) => {
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 0, duration: 300, useNativeDriver: true }),
      Animated.timing(translateYAnim, { toValue: -10, duration: 300, useNativeDriver: true })
    ]).start(() => {
      setIsShowingAutopay(toAutopay);
      translateYAnim.setValue(10);
      Animated.parallel([
        Animated.timing(fadeAnim, { toValue: 1, duration: 300, useNativeDriver: true }),
        Animated.timing(translateYAnim, { toValue: 0, duration: 300, useNativeDriver: true })
      ]).start();
    });
  };

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    if (!(enableRotation && showAutopay)) {
      setIsShowingAutopay(showAutopay);
      return;
    }
    // Rotate to autopay after 3s, then back after another 3s (once)
    timerRef.current = setTimeout(() => {
      animateTransition(true);
      timerRef.current = setTimeout(() => {
        animateTransition(false);
      }, rotationDuration);
    }, rotationDuration);
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [enableRotation, rotationDuration, showAutopay]);

  const autopayTone =
    autopayStatus === "critical" ? "negative" : autopayStatus === "attention" ? "warning" : "positive";

  return (
    <View
      style={[
        {
          width: "100%",
          borderRadius: theme.radius.xl,
          alignItems: "center",
          gap: theme.spacing[4],
          paddingVertical: 0,
          paddingHorizontal: 0
        },
        style
      ]}
    >
      {illustration ? (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          {illustration}
        </View>
      ) : (
        <View style={{ height: 40, justifyContent: "center", alignItems: "center" }}>
          <Svg width={59} height={40} viewBox="0 0 59 40" fill="none">
            <Rect width={59} height={40} rx={4} fill={theme.color.surface.accent.primaryStrongOnPrimary} />
            <G opacity={1} transform="translate(35.77, 6.1) rotate(33.27 24 24.93)">
              <Rect x={-12.34} y={-24.93} width={24.68} height={49.867} fill={theme.color.surface.accent.primary} />
            </G>
            <Rect x={0} y={39} width={59} height={1.9} fill={theme.color.content.onColor} opacity={0.76} />
            <Rect x={0} y={0} width={1.9} height={40} fill={theme.color.content.onColor} opacity={0.76} />
            <G transform="translate(7.14, 15.24)">
              <Rect width={11.429} height={8.571} rx={1} fill={theme.color.surface.accent.primarySubtleOnPrimary} />
              <Rect x={0} y={0} width={11.429} height={1.9} fill={theme.color.content.onColor} />
              <Rect x={10.95} y={0} width={1.9} height={8.571} fill={theme.color.surface.accent.primaryStrongOnPrimary} />
            </G>
          </Svg>
        </View>
      )}
      <View style={{ width: "100%", alignItems: "center", gap: 4 }}>
        <NText variant="labelSmallDefault" tone="secondary" style={{ textAlign: "center" }}>
          Credit card balance
        </NText>
        <NText variant="titleLarge" style={{ textAlign: "center", width: "100%" }}>
          {displayBalance}
        </NText>
        <Animated.View style={{ minHeight: 20, justifyContent: "center", alignItems: "center", opacity: fadeAnim, transform: [{ translateY: translateYAnim }] }}>
          {isShowingAutopay ? (
            <View style={{ flexDirection: "row", alignItems: "center", gap: 7 }}>
              <Svg width={8} height={8} viewBox="0 0 8 8">
                <Ellipse cx={4} cy={4} rx={4} ry={4} fill={autopayTone === "positive" ? theme.color.content.feedback.success : autopayTone === "warning" ? theme.color.content.feedback.attention : theme.color.content.feedback.critical} />
              </Svg>
              <NText variant="labelSmallDefault" tone={autopayTone}>
                Autopay on {autopayDate}
              </NText>
            </View>
          ) : (
            <NText variant="labelSmallDefault" tone="secondary">
              Payment due on {dueDate}
            </NText>
          )}
        </Animated.View>
      </View>
    </View>
  );
};
