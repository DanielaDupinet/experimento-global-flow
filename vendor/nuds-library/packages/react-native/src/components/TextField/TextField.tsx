import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Animated,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import type { TextInputProps, TextStyle, ViewStyle } from "react-native";
import { NText } from "../../primitives/Text";
import { WarningCircleIcon } from "../../icons/WarningCircleIcon";
import { useNuDSTheme } from "../../theme";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

/** Visual size variant matching Figma "Type" property. */
export type TextFieldType = "regular" | "small" | "large" | "multiline";

export type TextFieldSuggestion = {
  key: string;
  label: string;
};

export type TextFieldProps = Omit<TextInputProps, "style"> & {
  /** Label displayed above the input. */
  label?: string;
  /**
   * Visual size variant.
   * - `regular` — 20 px display-medium value text (default)
   * - `small` — 14 px label-style value text
   * - `large` — 24 px display-medium value text, no label
   * - `multiline` — 14 px regular text, multi-line
   * @default "regular"
   */
  type?: TextFieldType;
  /** Helper text shown below the divider. */
  helperText?: string;
  /** Error message — when set, activates the error state (red divider + icon). */
  error?: string;
  /** Marks the field as required (appends * to label). */
  required?: boolean;
  /** Leading icon element (20 px recommended). */
  leadingIcon?: React.ReactNode;
  /** Leading value prefix (e.g. "R$" for currency). */
  leadingValue?: string;
  /** Trailing icon element (20 px). Overridden by the error icon when in error state. */
  trailingIcon?: React.ReactNode;
  /** Character counter display (e.g. "0 / 140"). */
  characterCount?: string;
  /** Quick-suggestion chips shown below the input. */
  suggestions?: TextFieldSuggestion[];
  /** Called when a suggestion chip is tapped. */
  onSuggestionPress?: (suggestion: TextFieldSuggestion) => void;
  /** Container style. */
  style?: ViewStyle | ViewStyle[];
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export const TextField = ({
  label,
  type = "regular",
  helperText,
  error,
  required,
  leadingIcon,
  leadingValue,
  trailingIcon,
  characterCount,
  suggestions,
  onSuggestionPress,
  editable = true,
  style,
  onFocus: onFocusProp,
  onBlur: onBlurProp,
  ...rest
}: TextFieldProps) => {
  const theme = useNuDSTheme();
  const inputRef = useRef<TextInput>(null);
  const [isFocused, setIsFocused] = useState(false);

  // For multiline: track text internally so a hidden Text component can
  // measure the height. TextInput auto-grow is broken on RN 0.81 / Fabric,
  // so we use a shadow Text to drive the container height instead.
  const [shadowText, setShadowText] = useState(
    rest.value ?? rest.defaultValue ?? ""
  );

  // Keep shadow in sync when consumer updates `value` from outside.
  useEffect(() => {
    if (rest.value !== undefined) {
      setShadowText(rest.value as string);
    }
  }, [rest.value]);

  // Animated divider colour
  const focusAnim = useRef(new Animated.Value(0)).current;

  const hasError = Boolean(error);
  const isDisabled = editable === false;
  const isLarge = type === "large";
  const isSmall = type === "small";
  const isMultiline = type === "multiline";

  // ---- Focus / blur handlers ----
  const handleFocus = useCallback(
    (e: any) => {
      setIsFocused(true);
      Animated.timing(focusAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false,
      }).start();
      onFocusProp?.(e);
    },
    [focusAnim, onFocusProp]
  );

  const handleBlur = useCallback(
    (e: any) => {
      setIsFocused(false);
      Animated.timing(focusAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
      onBlurProp?.(e);
    },
    [focusAnim, onBlurProp]
  );

  // ---- Typography variant for the input value ----
  const valueTypography: TextStyle = isLarge
    ? theme.typography.titleSmall // 24 px
    : isSmall
      ? theme.typography.labelSmallStrong // 14 px semibold
      : isMultiline
        ? theme.typography.labelSmallDefault // 14 px regular
        : theme.typography.titleXSmall; // 20 px (regular default)

  // Minimum height for the input based on line height to prevent clipping
  const inputMinHeight = (valueTypography.lineHeight as number) ?? 24;

  // ---- Colours ----
  const labelColor = theme.color.content.subtle;
  const valueColor = isDisabled
    ? theme.color.content.disabled
    : theme.color.content.default;
  const placeholderColor = theme.color.content.disabled;
  const helperColor = hasError
    ? theme.color.content.feedback.critical
    : theme.color.content.subtle;

  // Divider colour — animated between default, focused (accent), and error
  const dividerColor = hasError
    ? theme.color.content.feedback.critical
    : focusAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [theme.color.border.default, theme.color.border.accent.primary],
      });

  // ---- Resolve trailing element ----
  const resolvedTrailing = hasError ? (
    <WarningCircleIcon size={20} color={theme.color.content.feedback.critical} />
  ) : (
    trailingIcon ?? null
  );

  // ---- Tap container to focus input ----
  const handleContainerPress = useCallback(() => {
    if (!isDisabled) {
      inputRef.current?.focus();
    }
  }, [isDisabled]);

  return (
    <Pressable
      onPress={handleContainerPress}
      style={[
        {
          gap: theme.spacing[3],
          paddingHorizontal: theme.spacing[5],
        },
        style,
      ]}
    >
      {/* ---- Label ---- */}
      {label && !isLarge ? (
        <NText
          variant="labelSmallStrong"
          color={labelColor}
          numberOfLines={1}
        >
          {label}
          {required ? " *" : ""}
        </NText>
      ) : null}

      {/* ---- Content area ---- */}
      {isMultiline ? (
        /* Multiline: TextInput auto-grow is broken on RN 0.81 / Fabric.
           A hidden Text with the same content drives the container height.
           The TextInput is layered on top via absolute positioning. */
        <View>
          {/* Shadow Text — drives container height */}
          <Text
            style={{
              fontSize: valueTypography.fontSize,
              lineHeight: valueTypography.lineHeight,
              fontFamily: valueTypography.fontFamily,
              padding: 0,
              color: "transparent",
              ...(leadingIcon ? { paddingLeft: 24 + (theme.spacing[3] as number) } : {}),
              ...(resolvedTrailing ? { paddingRight: 20 + (theme.spacing[3] as number) } : {}),
            }}
          >
            {shadowText || rest.placeholder || " "}
          </Text>

          {/* TextInput — fills the shadow container.
              Spread ...rest so all consumer TextInput props pass through
              (maxLength, returnKeyType, selectionColor, etc.), then override
              only the props this component controls. */}
          <TextInput
            {...rest}
            ref={inputRef}
            multiline
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              fontSize: valueTypography.fontSize,
              lineHeight: valueTypography.lineHeight,
              fontFamily: valueTypography.fontFamily,
              color: valueColor,
              padding: 0,
              ...(leadingIcon ? { paddingLeft: 24 + (theme.spacing[3] as number) } : {}),
              ...(resolvedTrailing ? { paddingRight: 20 + (theme.spacing[3] as number) } : {}),
            }}
            placeholderTextColor={placeholderColor}
            editable={editable}
            onChangeText={(text) => {
              setShadowText(text);
              rest.onChangeText?.(text);
            }}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />

          {/* Leading icon (absolute) */}
          {leadingIcon ? (
            <View
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 24,
                height: 24,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {leadingIcon}
            </View>
          ) : null}

          {/* Trailing icon (absolute) */}
          {resolvedTrailing ? (
            <View
              style={{
                position: "absolute",
                right: 0,
                top: 0,
                width: 20,
                height: 20,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {resolvedTrailing}
            </View>
          ) : null}
        </View>
      ) : (
        /* Single-line: row layout with leading value support */
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: theme.spacing[3],
            minHeight: inputMinHeight,
          }}
        >
          {/* Leading icon */}
          {leadingIcon ? (
            <View
              style={{
                width: 24,
                height: 24,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {leadingIcon}
            </View>
          ) : null}

          {/* Input area with optional currency prefix */}
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {/* Leading value prefix — rendered as a non-editable TextInput so it
                shares identical internal text positioning with the real input */}
            {leadingValue ? (
              <TextInput
                value={leadingValue}
                editable={false}
                scrollEnabled={false}
                pointerEvents="none"
                style={[
                  valueTypography,
                  {
                    color: valueColor,
                    padding: 0,
                    margin: 0,
                    marginRight: theme.spacing[3],
                    includeFontPadding: false,
                    ...Platform.select({
                      ios: { paddingTop: 0, paddingBottom: 0 },
                      android: {},
                    }),
                  },
                ]}
              />
            ) : null}

            <TextInput
              ref={inputRef}
              {...rest}
              style={[
                valueTypography,
                {
                  flex: 1,
                  color: valueColor,
                  padding: 0,
                  margin: 0,
                  minHeight: inputMinHeight,
                  includeFontPadding: false,
                  ...Platform.select({
                    ios: { paddingTop: 0, paddingBottom: 0 },
                    android: {},
                  }),
                },
              ]}
              placeholderTextColor={placeholderColor}
              editable={editable}
              multiline={false}
              scrollEnabled={false}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </View>

          {/* Trailing icon */}
          {resolvedTrailing ? (
            <View
              style={{
                width: 20,
                height: 20,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {resolvedTrailing}
            </View>
          ) : null}
        </View>
      )}

      {/* ---- Bottom section (divider + helper/counter) ---- */}
      <View style={{ gap: theme.spacing[2] }}>
        {/* Divider — fixed 2 px height to prevent layout shift, only colour changes */}
        <Animated.View
          style={{
            height: 2,
            backgroundColor: dividerColor,
            width: "100%",
          }}
        />

        {/* Helper text / character counter row */}
        {(helperText || error || characterCount) ? (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flex: 1 }}>
              {(error || helperText) ? (
                <NText variant="labelXSmallDefault" color={helperColor}>
                  {error || helperText}
                </NText>
              ) : null}
            </View>
            {characterCount ? (
              <NText
                variant="labelXSmallDefault"
                color={
                  hasError
                    ? theme.color.content.feedback.critical
                    : theme.color.content.disabled
                }
              >
                {characterCount}
              </NText>
            ) : null}
          </View>
        ) : null}
      </View>

      {/* ---- Suggestions ---- */}
      {suggestions && suggestions.length > 0 ? (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: theme.spacing[2] }}
        >
          {suggestions.map((s) => (
            <Pressable
              key={s.key}
              onPress={() => onSuggestionPress?.(s)}
              style={{
                height: 40,
                minHeight: 36,
                paddingHorizontal: theme.spacing[4],
                borderRadius: theme.radius.full,
                borderWidth: 1,
                borderColor: theme.color.border.default,
                backgroundColor: theme.color.surface.default,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <NText
                variant="labelXSmallStrong"
                color={theme.color.content.default}
              >
                {s.label}
              </NText>
            </Pressable>
          ))}
        </ScrollView>
      ) : null}
    </Pressable>
  );
};
