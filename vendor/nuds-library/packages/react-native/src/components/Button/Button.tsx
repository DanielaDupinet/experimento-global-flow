import React from "react";
import { ActivityIndicator, Pressable, View } from "react-native";
import type { PressableProps, ViewStyle } from "react-native";
import { NText } from "../../primitives/Text";
import { useNuDSTheme } from "../../theme";
import styles from "./styles";

type ButtonVariant = "primary" | "secondary" | "ghost" | "destructive";
type LegacyButtonType = "Primary" | "Secondary" | "Ghost" | "Destructive" | "Icon";

export type ButtonProps = Omit<PressableProps, "style"> & {
  label?: string;
  variant?: ButtonVariant;
  /** @deprecated Use lowercase `variant` instead. */
  type?: LegacyButtonType;
  compact?: boolean;
  expanded?: boolean;
  loading?: boolean;
  iconOnly?: boolean;
  icon?: React.ReactNode;
  onColor?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  style?: ViewStyle | ViewStyle[];
};

export const Button = ({
  label,
  variant = "primary",
  type,
  compact = false,
  expanded = false,
  loading = false,
  iconOnly = false,
  icon,
  onColor = false,
  leadingIcon,
  trailingIcon,
  disabled,
  style,
  ...rest
}: ButtonProps) => {
  const theme = useNuDSTheme();

  // --- Variant resolution (supports legacy PascalCase `type` prop) ---
  const normalizedVariant: ButtonVariant =
    type === "Primary"
      ? "primary"
      : type === "Secondary"
        ? "secondary"
        : type === "Ghost"
          ? "ghost"
          : type === "Destructive"
            ? "destructive"
            : variant;

  const isLegacyIconButton = type === "Icon";
  const resolvedIconOnly = isLegacyIconButton || iconOnly;
  const isDisabled = disabled || loading;

  // --- Sizing (Figma: non-compact 48px, compact 40px) ---
  const buttonHeight = compact ? 40 : 48;
  const iconOnlySize = compact ? 40 : 48;
  const verticalPadding = compact ? theme.spacing[2] : theme.spacing[3];
  const horizontalPadding = compact ? theme.spacing[4] : theme.spacing[6];

  // --- Per-variant background ---
  const variantStyle: Record<ButtonVariant, ViewStyle> = {
    primary: {
      backgroundColor: onColor
        ? theme.color.surface.default
        : theme.color.surface.accent.primary
    },
    secondary: {
      backgroundColor: theme.color.surface.default,
      borderWidth: 1,
      borderColor: theme.color.border.default
    },
    ghost: {
      backgroundColor: "transparent"
    },
    destructive: {
      backgroundColor: onColor
        ? theme.color.content.feedback.critical
        : theme.color.content.feedback.critical
    }
  };

  // --- Per-variant label color ---
  // Ghost uses brand color (accent) by default; white when onColor.
  // Secondary always uses primary text color.
  // Primary/Destructive use white (inverse) by default; dark when onColor (primary only).
  const getLabelColor = (): string => {
    switch (normalizedVariant) {
      case "primary":
        return onColor
          ? theme.color.content.default
          : theme.color.content.onColor;
      case "secondary":
        return onColor
          ? theme.color.content.default
          : theme.color.content.default;
      case "ghost":
        return onColor
          ? theme.color.content.onColor
          : theme.color.content.accent.primary;
      case "destructive":
        return onColor
          ? theme.color.content.onColor
          : theme.color.content.onColor;
      default:
        return theme.color.content.default;
    }
  };

  const labelColorValue = getLabelColor();

  // --- Visibility flags ---
  const hasLabel = Boolean(label);
  const showLeading = Boolean(leadingIcon) && !loading && !resolvedIconOnly;
  const showTrailing = Boolean(trailingIcon) && !loading;
  const iconNode = icon ?? leadingIcon;
  const showIconOnlyContent = resolvedIconOnly && Boolean(iconNode) && !loading;

  // --- Shadow (Primary, Secondary, Destructive get elevation; Ghost does not) ---
  const shadowStyle: ViewStyle | undefined =
    normalizedVariant !== "ghost" && !isDisabled
      ? { ...theme.elevation.level1, shadowColor: theme.color.content.default }
      : undefined;

  return (
    <Pressable
      accessibilityRole="button"
      disabled={isDisabled}
      style={[
        styles.root,
        {
          borderRadius: theme.radius.full,
          paddingVertical: resolvedIconOnly ? 0 : verticalPadding,
          paddingHorizontal: resolvedIconOnly ? 0 : horizontalPadding,
          minWidth: resolvedIconOnly
            ? iconOnlySize
            : expanded
              ? "100%"
              : undefined,
          width: resolvedIconOnly ? iconOnlySize : undefined,
          height: resolvedIconOnly ? iconOnlySize : buttonHeight
        },
        variantStyle[normalizedVariant],
        shadowStyle,
        isDisabled && styles.disabled,
        style
      ]}
      {...rest}
    >
      <View style={[styles.content, { gap: theme.spacing[2] }]}>
        {showLeading ? leadingIcon : null}
        {loading ? (
          <ActivityIndicator color={labelColorValue} size="small" />
        ) : null}
        {showIconOnlyContent ? iconNode : null}
        {!loading && hasLabel ? (
          <NText
            variant="labelSmallStrong"
            color={labelColorValue}
          >
            {label}
          </NText>
        ) : null}
        {showTrailing ? trailingIcon : null}
      </View>
    </Pressable>
  );
};
