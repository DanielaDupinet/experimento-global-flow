import React from "react";
import { Pressable, View } from "react-native";
import type { StyleProp, ViewStyle } from "react-native";
import { NText } from "../../primitives/Text";
import { ButtonLink } from "../ButtonLink";
import { CloseIcon } from "../../icons/CloseIcon";
import { ArrowRightIcon } from "../../icons/ArrowRightIcon";
import { useNuDSTheme } from "../../theme";
import styles from "./styles";

export type CalloutBoxProps = {
  /** Bold title text (optional — omit for description-only callouts) */
  title?: string;
  /** Optional description text below the title */
  description?: string;
  /** Visual tone of the callout background.
   *  - "neutral" (default) — subtle grey
   *  - "accent" — brand-coloured tint */
  tone?: "neutral" | "accent";
  /** Optional illustration or icon rendered above the text content */
  illustration?: React.ReactNode;
  /** Optional action link label (renders a compact ButtonLink with arrow) */
  actionLabel?: string;
  /** Called when the action link is pressed */
  onActionPress?: () => void;
  /** Called when the dismiss (X) button is pressed */
  onDismiss?: () => void;
  /** Custom style applied to the outer container */
  style?: StyleProp<ViewStyle>;
};

export const CalloutBox = ({
  title,
  description,
  tone = "neutral",
  illustration,
  actionLabel,
  onActionPress,
  onDismiss,
  style,
}: CalloutBoxProps) => {
  const theme = useNuDSTheme();

  const hasAction = Boolean(actionLabel);
  // When there's no action link, match top padding so it looks balanced.
  // When there IS an action, the ButtonLink's own height adds visual weight,
  // so we use a tighter bottom padding.
  const bottomPadding = hasAction ? theme.spacing[1] : theme.spacing[5];

  // Background colour based on tone
  const wrapperBackground =
    tone === "accent"
      ? theme.color.surface.accent.primarySubtle
      : theme.color.surface.feedback.neutral;

  return (
    <View
      style={[
        styles.outer,
        {
          paddingHorizontal: theme.spacing[4], // 16
          paddingVertical: theme.spacing[3], // 12
        },
        style,
      ]}
    >
      <View
        style={[
          styles.wrapper,
          {
            backgroundColor: wrapperBackground,
            borderRadius: theme.radius.xl, // 24
            paddingTop: theme.spacing[5], // 20
            paddingBottom: bottomPadding,
          },
        ]}
      >
        {/* Content area */}
        <View
          style={[
            styles.container,
            {
              paddingLeft: theme.spacing[5], // 20
              paddingRight: theme.spacing[12], // 48 — room for dismiss button
            },
          ]}
        >
          <View style={styles.content}>
            {/* Optional illustration above text */}
            {illustration ? (
              <View style={{ paddingBottom: theme.spacing[2] }}>
                {illustration}
              </View>
            ) : null}

            {/* Text box (title + description) */}
            <View style={[styles.textBox, { gap: theme.spacing[1] }]}>
              {title ? (
                <NText variant="subtitleSmallStrong" color={theme.color.content.default}>
                  {title}
                </NText>
              ) : null}

              {description ? (
                <NText variant="paragraphSmallDefault" color={theme.color.content.subtle}>
                  {description}
                </NText>
              ) : null}
            </View>

            {/* Action link */}
            {actionLabel ? (
              <View style={[styles.actions, { gap: theme.spacing[2] }]}>
                <ButtonLink
                  label={actionLabel}
                  compact
                  trailingIcon={<ArrowRightIcon />}
                  onPress={onActionPress}
                />
              </View>
            ) : null}
          </View>
        </View>

        {/* Dismiss button */}
        {onDismiss ? (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Dismiss"
            onPress={onDismiss}
            style={[
              styles.dismissButton,
              {
                borderRadius: theme.radius.full, // 64
              },
            ]}
          >
            <CloseIcon size={20} color={theme.color.content.subtle} />
          </Pressable>
        ) : null}
      </View>
    </View>
  );
};
