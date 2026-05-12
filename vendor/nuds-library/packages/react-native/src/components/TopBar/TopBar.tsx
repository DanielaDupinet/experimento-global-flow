import React from "react";
import { Pressable, View } from "react-native";
import type { ViewStyle } from "react-native";
import {
  ArrowBackIcon,
  CloseIcon,
  ExpandMoreIcon,
  SettingsIcon,
} from "../../icons";
import { NText } from "../../primitives/Text";
import { useNuDSTheme } from "../../theme";

type TopBarTone = "default" | "subtle";
type TopBarVariant = "default" | "dropdown" | "modal" | "modal-dropdown";
type LegacyTopBarVariant = "Default" | "Dropdown" | "Modal" | "Modal-Dropdown";
type LegacyTopBarBackground = "Default" | "Subtle";

export type TopBarProps = {
  title?: string;
  /** @deprecated Use `title` instead. */
  subtitle?: string;
  variant?: TopBarVariant;
  legacyVariant?: LegacyTopBarVariant;
  background?: TopBarTone;
  legacyBackground?: LegacyTopBarBackground;
  tone?: TopBarTone;
  /** @deprecated Kept for backward compatibility. This prop is currently a no-op. */
  showStatusBar?: boolean;
  show1stAction?: boolean;
  show2ndAction?: boolean;
  leading?: React.ReactNode;
  leadingAccessibilityLabel?: string;
  trailing?: React.ReactNode;
  trailingSecond?: React.ReactNode;
  onPressLeading?: () => void;
  onBackPress?: () => void;
  on1stActionPress?: () => void;
  on2ndActionPress?: () => void;
  onDropdownPress?: () => void;
  style?: ViewStyle | ViewStyle[];
};

export const TopBar = ({
  title,
  subtitle,
  variant = "default",
  legacyVariant,
  background,
  legacyBackground,
  tone = "default",
  show1stAction = true,
  show2ndAction = false,
  leading,
  leadingAccessibilityLabel = "Go back",
  trailing,
  trailingSecond,
  onPressLeading,
  onBackPress,
  on1stActionPress,
  on2ndActionPress,
  onDropdownPress,
  style,
}: TopBarProps) => {
  const theme = useNuDSTheme();
  const resolvedTitle = title ?? subtitle ?? "Screen Title";
  const resolvedVariant =
    legacyVariant === "Default"
      ? "default"
      : legacyVariant === "Dropdown"
        ? "dropdown"
        : legacyVariant === "Modal"
          ? "modal"
          : legacyVariant === "Modal-Dropdown"
            ? "modal-dropdown"
            : variant;
  const resolvedBackground: TopBarTone =
    legacyBackground === "Subtle"
      ? "subtle"
      : legacyBackground === "Default"
        ? "default"
        : tone === "subtle"
          ? "subtle"
          : (background ?? "default");
  const isModal = resolvedVariant.includes("modal");
  const isDropdown = resolvedVariant.includes("dropdown");
  const backgroundColor =
    resolvedBackground === "subtle"
      ? theme.color.surface.subtle
      : theme.color.surface.default;
  const iconColor = theme.color.content.default;
  const secondarySurfaceColor =
    resolvedBackground === "subtle"
      ? theme.color.surface.default
      : theme.color.surface.subtle;
  const leadingIcon =
    leading ??
    (isModal ? (
      <CloseIcon color={iconColor} opacity={0.62} />
    ) : (
      <ArrowBackIcon color={iconColor} opacity={0.62} />
    ));
  const onLeadingPress = onBackPress ?? onPressLeading;

  return (
    <View
      style={[
        {
          width: "100%",
          minHeight: isModal ? 74 : 64,
          paddingHorizontal: theme.spacing[2],
          paddingTop: isModal ? theme.spacing[2] : 0,
          borderTopLeftRadius: isModal ? theme.radius.xl : 0,
          borderTopRightRadius: isModal ? theme.radius.xl : 0,
          backgroundColor,
          borderColor: theme.color.border.default,
        },
        style,
      ]}
    >
      <View
        style={{
          height: 64,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Center title — absolutely positioned so it is always screen-centered */}
        <View
          pointerEvents="box-none"
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {isDropdown ? (
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Open dropdown"
              onPress={onDropdownPress}
              style={{
                height: 32,
                minWidth: 44,
                borderRadius: theme.radius.full,
                backgroundColor: secondarySurfaceColor,
                paddingLeft: theme.spacing[4],
                paddingRight: theme.spacing[2],
                flexDirection: "row",
                alignItems: "center",
                gap: theme.spacing[2],
                ...theme.elevation.level1,
                shadowColor: theme.color.content.default,
              }}
            >
              <NText variant="labelSmallStrong" tone="secondary">
                Dropdown
              </NText>
              <ExpandMoreIcon
                size={12}
                color={theme.color.content.subtle}
                opacity={1}
              />
            </Pressable>
          ) : (
            <View style={{ alignItems: "center" }}>
              <NText variant="labelSmallStrong">{resolvedTitle}</NText>
            </View>
          )}
        </View>

        {/* Leading action (back / close) */}
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={leadingAccessibilityLabel}
          hitSlop={12}
          onPress={onLeadingPress}
          style={{
            width: 44,
            height: 44,
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1,
          }}
        >
          <View
            style={{
              width: 32,
              height: 32,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {leadingIcon}
          </View>
        </Pressable>

        {/* Trailing actions — auto-sized, pushed to the right */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: "auto",
            zIndex: 1,
          }}
        >
          {show1stAction ? (
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Primary top bar action"
              onPress={on1stActionPress}
              style={{
                width: 44,
                height: 44,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: 32,
                  height: 32,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {trailing ?? <SettingsIcon color={iconColor} opacity={0.62} />}
              </View>
            </Pressable>
          ) : null}
          {show2ndAction ? (
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Secondary top bar action"
              onPress={on2ndActionPress}
              style={{
                width: 44,
                height: 44,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: 32,
                  height: 32,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {trailingSecond ?? (
                  <SettingsIcon color={iconColor} opacity={0.62} />
                )}
              </View>
            </Pressable>
          ) : null}
        </View>
      </View>
    </View>
  );
};
