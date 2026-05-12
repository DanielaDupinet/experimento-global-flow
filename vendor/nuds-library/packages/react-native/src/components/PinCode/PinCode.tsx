import React, { useCallback, useEffect, useRef } from "react";
import {
  Animated,
  Easing,
  Platform,
  Pressable,
  TextInput,
  View,
} from "react-native";
import type { StyleProp, ViewStyle } from "react-native";
import { NText } from "../../primitives/Text";
import { useNuDSTheme } from "../../theme";

// ---------------------------------------------------------------------------
// Haptics (graceful fallback when expo-haptics is not installed)
// ---------------------------------------------------------------------------

let Haptics: typeof import("expo-haptics") | null = null;
try {
  Haptics = require("expo-haptics");
} catch {
  // expo-haptics not available — haptic feedback will be silently skipped
}

function triggerHaptic(style: "light" | "medium" | "error") {
  if (!Haptics) return;
  if (style === "error") {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
  } else {
    Haptics.impactAsync(
      style === "medium"
        ? Haptics.ImpactFeedbackStyle.Medium
        : Haptics.ImpactFeedbackStyle.Light
    );
  }
}

// ---------------------------------------------------------------------------
// Pin Digit (internal)
// ---------------------------------------------------------------------------

type PinDigitState = "placeholder" | "focused" | "filled" | "error";

const DOT_CONTAINER_SIZE = 48;
const DOT_SMALL = 8;
const DOT_LARGE = 16;

function PinDigit({ state }: { state: PinDigitState }) {
  const theme = useNuDSTheme();
  const scaleAnim = useRef(new Animated.Value(state === "filled" || state === "error" ? 1 : 0)).current;
  const prevState = useRef(state);

  useEffect(() => {
    const wasSmall = prevState.current === "placeholder" || prevState.current === "focused";
    const isNowLarge = state === "filled" || state === "error";

    if (wasSmall && isNowLarge) {
      // Animate: pop in from small to large
      scaleAnim.setValue(0);
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 180,
        easing: Easing.out(Easing.back(1.6)),
        useNativeDriver: true,
      }).start();
    } else if (!isNowLarge) {
      // Reset immediately when going back to small
      scaleAnim.setValue(0);
    } else {
      scaleAnim.setValue(1);
    }

    prevState.current = state;
  }, [state, scaleAnim]);

  const isLarge = state === "filled" || state === "error";

  const dotColor =
    state === "error"
      ? theme.color.content.feedback.critical
      : state === "filled"
        ? theme.color.content.default
        : state === "focused"
          ? theme.color.content.subtle
          : theme.color.content.disabled;

  // Small dot is always rendered; large dot fades/scales on top
  const smallDotColor =
    state === "focused"
      ? theme.color.content.subtle
      : theme.color.content.disabled;

  return (
    <View
      style={{
        width: DOT_CONTAINER_SIZE,
        height: DOT_CONTAINER_SIZE,
        borderRadius: theme.radius.full,
        backgroundColor: theme.color.surface.default,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Small dot (placeholder / focused) */}
      {!isLarge && (
        <View
          style={{
            width: DOT_SMALL,
            height: DOT_SMALL,
            borderRadius: DOT_SMALL / 2,
            backgroundColor: smallDotColor,
          }}
        />
      )}

      {/* Large dot (filled / error) with scale animation */}
      {isLarge && (
        <Animated.View
          style={{
            width: DOT_LARGE,
            height: DOT_LARGE,
            borderRadius: DOT_LARGE / 2,
            backgroundColor: dotColor,
            transform: [{ scale: scaleAnim }],
          }}
        />
      )}
    </View>
  );
}

// ---------------------------------------------------------------------------
// Shake animation helper
// ---------------------------------------------------------------------------

function useShakeAnimation() {
  const shakeAnim = useRef(new Animated.Value(0)).current;

  const shake = useCallback(() => {
    shakeAnim.setValue(0);
    Animated.sequence([
      Animated.timing(shakeAnim, { toValue: 10, duration: 50, easing: Easing.linear, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: -10, duration: 50, easing: Easing.linear, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: 8, duration: 50, easing: Easing.linear, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: -8, duration: 50, easing: Easing.linear, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: 4, duration: 40, easing: Easing.linear, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: 0, duration: 40, easing: Easing.linear, useNativeDriver: true }),
    ]).start();
  }, [shakeAnim]);

  return { shakeAnim, shake };
}

// ---------------------------------------------------------------------------
// PinCode (public)
// ---------------------------------------------------------------------------

export type PinCodeProps = {
  /** Current entered value */
  value: string;
  /** Called whenever the value changes */
  onChange: (value: string) => void;
  /** Called when all digits have been entered */
  onComplete?: (value: string) => void;
  /** Number of digits (default 4) */
  length?: number;
  /** Error state — pass `true` for default error, or a string for a custom message */
  error?: boolean | string;
  /** Helper text shown below the digits */
  helperText?: string;
  /** Automatically focus on mount */
  autoFocus?: boolean;
  /** Optional styles for the outer container */
  style?: StyleProp<ViewStyle>;
};

export const PinCode = ({
  value,
  onChange,
  onComplete,
  length = 4,
  error = false,
  helperText,
  autoFocus = true,
  style,
}: PinCodeProps) => {
  const theme = useNuDSTheme();
  const inputRef = useRef<TextInput>(null);
  const { shakeAnim, shake } = useShakeAnimation();
  const prevValueLength = useRef(value.length);

  // Trigger shake + error haptic whenever error becomes truthy.
  // Must live in useEffect (not the render body) to avoid double-firing
  // in React Strict Mode / concurrent features.
  const prevError = useRef(error);
  useEffect(() => {
    if (error && !prevError.current) {
      shake();
      triggerHaptic("error");
    }
    prevError.current = error;
  }, [error, shake]);

  // Trigger haptic on each new digit entered
  useEffect(() => {
    if (value.length > prevValueLength.current) {
      triggerHaptic("light");
    }
    prevValueLength.current = value.length;
  }, [value.length]);

  const hasError = !!error;

  const getDigitState = (index: number): PinDigitState => {
    if (hasError) return "error";
    if (index < value.length) return "filled";
    if (index === value.length) return "focused";
    return "placeholder";
  };

  const handleChangeText = (text: string) => {
    // Only allow numeric input, clamp to length
    const numeric = text.replace(/[^0-9]/g, "").slice(0, length);
    onChange(numeric);
    if (numeric.length === length) {
      onComplete?.(numeric);
    }
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  // Resolve helper / error text
  const displayText = hasError
    ? typeof error === "string"
      ? error
      : undefined
    : helperText;

  // Use a consistent gap between digits — avoids negative values for larger lengths.
  const gap = theme.spacing[4]; // 16px

  return (
    <View style={[{ alignItems: "center", gap: theme.spacing[5] }, style]}>
      {/* Hidden text input for keyboard capture */}
      <TextInput
        ref={inputRef}
        value={value}
        onChangeText={handleChangeText}
        keyboardType="number-pad"
        maxLength={length}
        autoFocus={autoFocus}
        caretHidden
        style={{
          position: "absolute",
          opacity: 0,
          width: 1,
          height: 1,
        }}
        accessible={false}
        importantForAccessibility="no"
      />

      {/* Digit row */}
      <Pressable onPress={focusInput} accessibilityRole="none">
        <Animated.View
          style={{
            flexDirection: "row",
            gap,
            transform: [{ translateX: shakeAnim }],
          }}
        >
          {Array.from({ length }, (_, i) => (
            <PinDigit key={i} state={getDigitState(i)} />
          ))}
        </Animated.View>
      </Pressable>

      {/* Helper / error text */}
      {displayText != null && (
        <View style={{ paddingHorizontal: theme.spacing[5], width: "100%" }}>
          <NText
            variant="labelXSmallDefault"
            tone={hasError ? undefined : "secondary"}
            style={hasError ? { color: theme.color.content.feedback.critical } : undefined}
          >
            {displayText}
          </NText>
        </View>
      )}
    </View>
  );
};
