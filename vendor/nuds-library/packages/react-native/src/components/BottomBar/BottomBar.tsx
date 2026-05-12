import React from "react";
import { View } from "react-native";
import type { StyleProp, ViewStyle } from "react-native";
import { Button } from "../Button";
import { Divider } from "../../primitives/Divider";
import { NText } from "../../primitives/Text";
import { useNuDSTheme } from "../../theme";

// ── Types ────────────────────────────────────────────────────────────

export type BottomBarOrientation = "vertical" | "horizontal";

export type BottomBarProps = {
  /** Primary action button label */
  primaryLabel: string;
  /** Called when the primary button is pressed */
  onPrimaryPress?: () => void;
  /** Secondary action button label. When provided, the secondary button is shown. */
  secondaryLabel?: string;
  /** Called when the secondary button is pressed */
  onSecondaryPress?: () => void;
  /** Button layout direction.
   * - vertical: buttons stacked full-width
   * - horizontal: buttons side-by-side, equal width
   * @default "vertical"
   */
  orientation?: BottomBarOrientation;
  /** When true, renders a divider line above the bar (use when content is scrolled).
   * @default false
   */
  scrolled?: boolean;
  /** Optional footnote text displayed below the buttons */
  footnote?: string;
  /** Disable the primary button */
  primaryDisabled?: boolean;
  /** Disable the secondary button */
  secondaryDisabled?: boolean;
  /** Custom style on the outer container */
  style?: StyleProp<ViewStyle>;
};

// ── Component ────────────────────────────────────────────────────────

export const BottomBar = ({
  primaryLabel,
  onPrimaryPress,
  secondaryLabel,
  onSecondaryPress,
  orientation = "vertical",
  scrolled = false,
  footnote,
  primaryDisabled,
  secondaryDisabled,
  style,
}: BottomBarProps) => {
  const theme = useNuDSTheme();

  const isHorizontal = orientation === "horizontal";

  return (
    <View style={[{ backgroundColor: theme.color.surface.default }, style]}>
      {/* Divider — only when scrolled */}
      {scrolled ? <Divider /> : null}

      {/* Button area */}
      <View
        style={{
          paddingHorizontal: theme.spacing[4],
          paddingVertical: theme.spacing[5],
          gap: isHorizontal ? theme.spacing[3] : theme.spacing[4],
          alignItems: "center",
          justifyContent: "center",
          flexDirection: isHorizontal ? "column" : "column",
        }}
      >
        {/* Buttons container */}
        {isHorizontal ? (
          /* Horizontal: secondary + primary side by side */
          <View
            style={{
              flexDirection: "row",
              gap: theme.spacing[3],
              width: "100%",
            }}
          >
            {secondaryLabel ? (
              <View style={{ flex: 1 }}>
                <Button
                  label={secondaryLabel}
                  variant="secondary"
                  expanded
                  onPress={onSecondaryPress}
                  disabled={secondaryDisabled}
                />
              </View>
            ) : null}
            <View style={{ flex: 1 }}>
              <Button
                label={primaryLabel}
                variant="primary"
                expanded
                onPress={onPrimaryPress}
                disabled={primaryDisabled}
              />
            </View>
          </View>
        ) : (
          /* Vertical: primary on top, secondary below */
          <>
            <Button
              label={primaryLabel}
              variant="primary"
              expanded
              onPress={onPrimaryPress}
              disabled={primaryDisabled}
            />
            {secondaryLabel ? (
              <Button
                label={secondaryLabel}
                variant="secondary"
                expanded
                onPress={onSecondaryPress}
                disabled={secondaryDisabled}
              />
            ) : null}
          </>
        )}

        {/* Footnote */}
        {footnote ? (
          <NText
            variant="paragraphSmallDefault"
            tone="secondary"
            style={{ textAlign: "center", width: "100%" }}
          >
            {footnote}
          </NText>
        ) : null}
      </View>
    </View>
  );
};
