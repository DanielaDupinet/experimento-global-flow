import React from "react";
import { View } from "react-native";
import type { StyleProp, ViewStyle } from "react-native";
import { NText } from "../../primitives/Text";
import { Divider } from "../../primitives/Divider";
import { Button } from "../Button";
import { useNuDSTheme } from "../../theme";
import styles from "./styles";

export type CheckoutBottomBarProps = {
  /** Primary text (e.g. price or total) */
  primaryText: string;
  /** Secondary text (e.g. description or installments) */
  secondaryText?: string;
  /** Button label */
  buttonLabel: string;
  /** Called when the button is pressed */
  onButtonPress?: () => void;
  /** Disable the button */
  buttonDisabled?: boolean;
  /** Show loading state on the button */
  buttonLoading?: boolean;
  /** Custom style applied to the outer container */
  style?: StyleProp<ViewStyle>;
};

export const CheckoutBottomBar = ({
  primaryText,
  secondaryText,
  buttonLabel,
  onButtonPress,
  buttonDisabled,
  buttonLoading,
  style,
}: CheckoutBottomBarProps) => {
  const theme = useNuDSTheme();

  return (
    <View style={[styles.root, { backgroundColor: theme.color.surface.default }, style]}>
      <Divider />

      <View
        style={[
          styles.container,
          {
            padding: theme.spacing[5], // 20
          },
        ]}
      >
        <View
          style={[
            styles.content,
            {
              gap: theme.spacing[6], // 24
            },
          ]}
        >
          {/* Text area */}
          <View style={styles.textArea}>
            <NText
              variant="subtitleMediumStrong"
              color={theme.color.content.default}
              numberOfLines={1}
            >
              {primaryText}
            </NText>

            {secondaryText ? (
              <NText
                variant="subtitleSmallDefault"
                color={theme.color.content.subtle}
                numberOfLines={1}
              >
                {secondaryText}
              </NText>
            ) : null}
          </View>

          {/* Action button */}
          <Button
            label={buttonLabel}
            variant="primary"
            onPress={onButtonPress}
            disabled={buttonDisabled}
            loading={buttonLoading}
          />
        </View>
      </View>
    </View>
  );
};
