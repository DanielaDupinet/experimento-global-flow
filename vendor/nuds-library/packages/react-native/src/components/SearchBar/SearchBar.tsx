import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Animated,
  Easing,
  Platform,
  Pressable,
  TextInput,
  View,
} from "react-native";
import type { TextInputProps, ViewStyle } from "react-native";
import { NText } from "../../primitives/Text";
import { useNuDSTheme } from "../../theme";
import { SearchIcon } from "../../icons/SearchIcon";
import { ArrowBackIcon } from "../../icons/ArrowBackIcon";
import { CloseCircleIcon } from "../../icons/CloseCircleIcon";
import { LoadingIndicator } from "../LoadingIndicator";

export type SearchBarProps = Omit<TextInputProps, "style" | "editable"> & {
  /** Placeholder text shown when empty and unfocused. */
  placeholder?: string;
  /** Current search text (controlled). */
  value?: string;
  /** Called when the search text changes. */
  onChangeText?: (text: string) => void;
  /** Called when the back arrow is pressed (focused/typing/loading states). */
  onBackPress?: () => void;
  /** Called when the clear button is pressed (typing state). */
  onClear?: () => void;
  /** Disables the search bar. */
  disabled?: boolean;
  /** Shows a loading spinner in place of the clear button. */
  loading?: boolean;
  /** Shows a skeleton placeholder instead of the search bar. */
  skeleton?: boolean;
  /** Container style override. */
  style?: ViewStyle | ViewStyle[];
};

export const SearchBar = ({
  placeholder = "Search",
  value,
  onChangeText,
  onBackPress,
  onClear,
  disabled = false,
  loading = false,
  skeleton = false,
  style,
  onFocus: onFocusProp,
  onBlur: onBlurProp,
  ...rest
}: SearchBarProps) => {
  const theme = useNuDSTheme();
  const inputRef = useRef<TextInput>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [internalValue, setInternalValue] = useState(value ?? "");

  const skeletonAnim = useRef(new Animated.Value(0.4)).current;

  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value);
    }
  }, [value]);

  useEffect(() => {
    if (!skeleton) return;
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(skeletonAnim, {
          toValue: 1,
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(skeletonAnim, {
          toValue: 0.4,
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    );
    loop.start();
    return () => loop.stop();
  }, [skeleton, skeletonAnim]);

  const handleFocus = useCallback(
    (e: any) => {
      setIsFocused(true);
      onFocusProp?.(e);
    },
    [onFocusProp]
  );

  const handleBlur = useCallback(
    (e: any) => {
      setIsFocused(false);
      onBlurProp?.(e);
    },
    [onBlurProp]
  );

  const handleChangeText = useCallback(
    (text: string) => {
      setInternalValue(text);
      onChangeText?.(text);
    },
    [onChangeText]
  );

  const handleClear = useCallback(() => {
    setInternalValue("");
    onChangeText?.("");
    onClear?.();
    inputRef.current?.focus();
  }, [onChangeText, onClear]);

  const handleBackPress = useCallback(() => {
    inputRef.current?.blur();
    setInternalValue("");
    onChangeText?.("");
    onBackPress?.();
  }, [onBackPress, onChangeText]);

  const handleContainerPress = useCallback(() => {
    if (!disabled) {
      inputRef.current?.focus();
    }
  }, [disabled]);

  const hasText = internalValue.length > 0;
  const showBackArrow = isFocused || hasText || loading;
  const showClearButton = hasText && isFocused && !loading;
  const showLoader = loading;
  const isFocusedElevation = (isFocused || hasText) && !loading;

  if (skeleton) {
    return (
      <Animated.View
        style={[
          {
            height: 48,
            borderRadius: theme.radius.full,
            backgroundColor: theme.color.surface.disabled,
            opacity: skeletonAnim,
          },
          style,
        ]}
      />
    );
  }

  const containerBackground = disabled
    ? theme.color.surface.disabled
    : theme.color.surface.default;

  const containerBorder = disabled
    ? undefined
    : theme.color.border.default;

  const focusedShadow: ViewStyle = isFocusedElevation
    ? {
        shadowColor: "rgba(31, 0, 47, 1)",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 15,
        elevation: 3,
      }
    : {
        ...theme.elevation.level1,
      };

  return (
    <Pressable
      onPress={handleContainerPress}
      accessibilityRole="search"
      disabled={disabled}
      style={[
        {
          height: 48,
          borderRadius: theme.radius.full,
          backgroundColor: containerBackground,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: theme.spacing[4],
          paddingVertical: theme.spacing[3],
          gap: theme.spacing[4],
          ...(containerBorder
            ? { borderWidth: 1, borderColor: containerBorder }
            : {}),
          ...focusedShadow,
        },
        style,
      ]}
    >
      {/* Leading icon */}
      <View
        style={{
          width: 20,
          height: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {showBackArrow ? (
          <Pressable
            onPress={handleBackPress}
            accessibilityRole="button"
            accessibilityLabel="Go back"
            hitSlop={8}
          >
            <ArrowBackIcon
              size={20}
              color={theme.color.content.default}
            />
          </Pressable>
        ) : (
          <SearchIcon
            size={20}
            color={
              disabled
                ? theme.color.content.disabled
                : theme.color.content.subtle
            }
          />
        )}
      </View>

      {/* Content / Input */}
      <TextInput
        ref={inputRef}
        {...rest}
        value={internalValue}
        onChangeText={handleChangeText}
        onFocus={handleFocus}
        onBlur={handleBlur}
        editable={!disabled}
        placeholder={placeholder}
        placeholderTextColor={
          disabled
            ? theme.color.content.disabled
            : theme.color.content.subtle
        }
        selectionColor={theme.color.content.accent.primary}
        style={[
          {
            fontFamily: theme.typography.labelSmallStrong.fontFamily,
            fontSize: theme.typography.labelSmallStrong.fontSize,
            flex: 1,
            color: disabled
              ? theme.color.content.disabled
              : theme.color.content.default,
            padding: 0,
            margin: 0,
            includeFontPadding: false,
            textAlignVertical: "center",
          },
        ]}
      />

      {/* Trailing icon */}
      {(showClearButton || showLoader) && (
        <View
          style={{
            width: 20,
            height: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {showLoader ? (
            <LoadingIndicator compact />
          ) : (
            <Pressable
              onPress={handleClear}
              accessibilityRole="button"
              accessibilityLabel="Clear search"
              hitSlop={8}
            >
              <CloseCircleIcon
                size={20}
                color={theme.color.content.subtle}
              />
            </Pressable>
          )}
        </View>
      )}
    </Pressable>
  );
};
