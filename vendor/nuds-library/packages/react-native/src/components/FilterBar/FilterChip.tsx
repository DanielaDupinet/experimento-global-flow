import React, { useEffect, useRef } from "react";
import { ActivityIndicator, Animated, Pressable, View } from "react-native";
import type { ViewStyle } from "react-native";
import { NText } from "../../primitives/Text";
import { ExpandMoreIcon } from "../../icons/ExpandMoreIcon";
import { CheckmarkIcon } from "../../icons/CheckmarkIcon";
import { useNuDSTheme } from "../../theme";
import styles from "./styles";

export type FilterChipType = "dropdown" | "option";
export type FilterChipState = "enabled" | "loading" | "disabled";

export type FilterChipProps = {
  /** Text displayed inside the chip */
  label: string;
  /** Dropdown shows a trailing chevron; option does not */
  type?: FilterChipType;
  /** Whether the chip is currently selected / active */
  selected?: boolean;
  /** Chip state: enabled, loading, or disabled */
  state?: FilterChipState;
  /** @deprecated Use state="disabled" instead */
  disabled?: boolean;
  /** Optional leading icon element */
  leadingIcon?: React.ReactNode;
  /** Called when the chip is pressed */
  onPress?: () => void;
  /** When true the chip stretches to fill available space (used by non-scrollable FilterBar) */
  fill?: boolean;
  style?: ViewStyle | ViewStyle[];
};

export const FilterChip = ({
  label,
  type = "dropdown",
  selected = false,
  state = "enabled",
  disabled = false,
  leadingIcon,
  onPress,
  fill = false,
  style,
}: FilterChipProps) => {
  const theme = useNuDSTheme();

  // Resolved from theme tokens (previously hardcoded hex values)
  const SELECTED_BG = theme.color.surface.accent.selectedSubtle;
  const SELECTED_BORDER = theme.color.border.accent.primary;
  const SELECTED_TEXT = theme.color.content.accent.primary;
  const DISABLED_BG = theme.color.surface.disabled;
  const DISABLED_BORDER_STRONG = theme.color.content.disabled;

  const isDropdown = type === "dropdown";
  const isOption = type === "option";
  const resolvedState: FilterChipState = disabled ? "disabled" : state;
  const isEnabled = resolvedState === "enabled";
  const isLoading = resolvedState === "loading";
  const isDisabled = resolvedState === "disabled";

  // --- Crossfade animation: 0 = unselected, 1 = selected ---
  const selectionAnim = useRef(new Animated.Value(selected ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(selectionAnim, {
      toValue: selected ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [selected, selectionAnim]);

  // --- Colors by state ---
  let backgroundColor: string | Animated.AnimatedInterpolation<string>;
  let borderColor: string | Animated.AnimatedInterpolation<string>;
  let borderWidth = 1;
  let textColor: string;

  if (selected && isDisabled) {
    // Selected + Disabled
    backgroundColor = DISABLED_BG;
    borderColor = DISABLED_BORDER_STRONG;
    borderWidth = 2;
    textColor = theme.color.content.disabled;
  } else if (selected && isEnabled) {
    // Selected + Enabled — animate
    backgroundColor = selectionAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [theme.color.surface.default, SELECTED_BG],
    });
    borderColor = selectionAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [theme.color.border.default, SELECTED_BORDER],
    });
    borderWidth = 2;
    textColor = SELECTED_TEXT; // accent purple
  } else if (isDisabled) {
    // Unselected + Disabled
    backgroundColor = theme.color.surface.default;
    borderColor = theme.color.border.default;
    textColor = theme.color.content.disabled;
  } else if (isLoading) {
    // Loading
    backgroundColor = theme.color.surface.default;
    borderColor = theme.color.border.default;
    textColor = theme.color.content.disabled;
  } else {
    // Unselected + Enabled — animate
    backgroundColor = selectionAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [theme.color.surface.default, SELECTED_BG],
    });
    borderColor = selectionAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [theme.color.border.default, SELECTED_BORDER],
    });
    borderWidth = 1;
    textColor = theme.color.content.default;
  }

  // --- Padding ---
  const paddingLeft = theme.spacing[3]; // 12px
  const paddingRight = isDropdown ? theme.spacing[2] : theme.spacing[3]; // 8px / 12px

  // --- Shadow (only unselected + enabled) ---
  const showShadow = !selected && isEnabled;
  const shadowStyle: ViewStyle = showShadow
    ? {
        shadowColor: theme.color.content.default,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 0,
        elevation: 1,
      }
    : {};

  // --- Leading content ---
  const renderLeading = () => {
    if (isLoading) {
      return (
        <View style={styles.chipLeading}>
          <ActivityIndicator size={14} color={theme.color.content.disabled} />
        </View>
      );
    }
    if (isOption && selected && isEnabled) {
      return (
        <View style={styles.chipLeading}>
          <CheckmarkIcon size={20} color={SELECTED_TEXT} />
        </View>
      );
    }
    if (isOption && selected && isDisabled) {
      return (
        <View style={styles.chipLeading}>
          <CheckmarkIcon size={20} color={theme.color.content.disabled} />
        </View>
      );
    }
    if (leadingIcon) {
      return <View style={styles.chipLeading}>{leadingIcon}</View>;
    }
    return null;
  };

  return (
    <View style={[styles.chipOuter, fill && styles.chipFill, style]}>
      <Animated.View
        style={[
          styles.chip,
          {
            backgroundColor,
            borderColor,
            borderWidth,
            borderRadius: theme.radius.full,
            paddingLeft,
            paddingRight,
            gap: isDropdown ? 2 : 0,
          },
          shadowStyle,
          fill && styles.chipFill,
        ]}
      >
        <Pressable
          accessibilityRole="button"
          disabled={isDisabled || isLoading}
          onPress={onPress}
          style={styles.chipPressable}
        >
          {renderLeading()}

          <View style={[styles.chipWrapper, { gap: isDropdown ? 2 : 0 }]}>
            <NText
              variant="labelXSmallStrong"
              color={textColor}
              numberOfLines={1}
            >
              {label}
            </NText>
          </View>

          {isDropdown ? (
            <View style={styles.chipTrailing}>
              <ExpandMoreIcon
                size={20}
                color={isDisabled || isLoading ? theme.color.content.disabled : textColor}
              />
            </View>
          ) : null}
        </Pressable>
      </Animated.View>
    </View>
  );
};
