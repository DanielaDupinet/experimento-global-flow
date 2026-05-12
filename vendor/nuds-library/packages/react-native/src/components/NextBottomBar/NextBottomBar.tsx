import React from "react";
import { StyleSheet, View } from "react-native";
import type { StyleProp, ViewStyle } from "react-native";
import { Button } from "../Button";
import { Divider } from "../../primitives/Divider";
import { ArrowRightIcon } from "../../icons/ArrowRightIcon";
import { useNuDSTheme } from "../../theme";

export type NextBottomBarProps = {
  /** Called when the floating next action is pressed */
  onPress?: () => void;
  /** Disables the action button */
  disabled?: boolean;
  /** Shows a divider on top of the bar */
  scrolled?: boolean;
  /** Accessibility label for the action button */
  accessibilityLabel?: string;
  /** Optional custom icon; defaults to ArrowRightIcon */
  icon?: React.ReactNode;
  /** Optional style for the outer bar container */
  style?: StyleProp<ViewStyle>;
  /** Optional style for the action button */
  buttonStyle?: StyleProp<ViewStyle>;
};

export const NextBottomBar = ({
  onPress,
  disabled = false,
  scrolled = false,
  accessibilityLabel = "Next",
  icon,
  style,
  buttonStyle,
}: NextBottomBarProps) => {
  const theme = useNuDSTheme();

  return (
    <View style={[{ backgroundColor: theme.color.surface.default }, style]}>
      {scrolled ? <Divider /> : null}

      <View
        style={{
          alignItems: "flex-end",
          padding: theme.spacing[5],
        }}
      >
        <Button
          variant="primary"
          iconOnly
          icon={
            icon ?? (
              <ArrowRightIcon
                size={20}
                color={theme.color.content.onColor}
              />
            )
          }
          onPress={onPress}
          disabled={disabled}
          accessibilityLabel={accessibilityLabel}
          style={StyleSheet.flatten(buttonStyle)}
        />
      </View>
    </View>
  );
};
