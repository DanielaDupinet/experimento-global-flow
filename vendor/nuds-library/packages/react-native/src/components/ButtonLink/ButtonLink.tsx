import React from "react";
import { Pressable, View } from "react-native";
import type { PressableProps, StyleProp, ViewStyle } from "react-native";
import { NText } from "../../primitives/Text";
import { useNuDSTheme } from "../../theme";
import styles from "./styles";

export type ButtonLinkProps = Omit<PressableProps, "style"> & {
  /** Text displayed on the button link */
  label: string;
  /** Use the smaller variant */
  compact?: boolean;
  /** Optional icon rendered before the label */
  leadingIcon?: React.ReactNode;
  /** Optional icon rendered after the label */
  trailingIcon?: React.ReactNode;
  /** Custom style applied to the outer container */
  style?: StyleProp<ViewStyle>;
};

export const ButtonLink = ({
  label,
  compact = false,
  leadingIcon,
  trailingIcon,
  disabled,
  style,
  ...rest
}: ButtonLinkProps) => {
  const theme = useNuDSTheme();

  // Colors ----------------------------------------------------------------
  const contentColor = disabled
    ? theme.color.content.disabled
    : theme.color.content.accent.primary;

  // Sizing ----------------------------------------------------------------
  const minHeight = compact ? 38 : 44;
  const iconSize = compact ? 13 : 20;
  const gap = compact ? 4 : 8;
  const verticalPadding = compact ? 0 : theme.spacing[2]; // 8px default

  // Typography variant
  const textVariant = compact ? "labelSmallStrong" : "labelMediumStrong";

  return (
    <Pressable
      accessibilityRole="link"
      disabled={disabled}
      style={[
        styles.root,
        {
          minHeight,
        },
        disabled && styles.disabled,
        style,
      ]}
      {...rest}
    >
      <View
        style={[
          styles.wrapper,
          {
            gap,
            paddingVertical: verticalPadding,
            borderRadius: theme.radius.md,
          },
        ]}
      >
        {leadingIcon ? (
          <View style={{ width: iconSize, height: iconSize }}>
            {React.isValidElement(leadingIcon)
              ? React.cloneElement(
                  leadingIcon as React.ReactElement<any>,
                  { size: iconSize, color: contentColor },
                )
              : leadingIcon}
          </View>
        ) : null}

        <NText
          variant={textVariant}
          color={contentColor}
          numberOfLines={1}
        >
          {label}
        </NText>

        {trailingIcon ? (
          <View style={{ width: iconSize, height: iconSize }}>
            {React.isValidElement(trailingIcon)
              ? React.cloneElement(
                  trailingIcon as React.ReactElement<any>,
                  { size: iconSize, color: contentColor },
                )
              : trailingIcon}
          </View>
        ) : null}
      </View>
    </Pressable>
  );
};
