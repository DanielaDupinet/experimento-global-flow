import React, { useState } from "react";
import { Pressable, View } from "react-native";
import type { PressableStateCallbackType, StyleProp, ViewStyle } from "react-native";
import { NText } from "../../primitives/Text";
import { MoreHorizontalIcon } from "../../icons";
import { useNuDSTheme } from "../../theme";
import { ActionSheet } from "../../patterns/ActionSheet";
import type { ActionSheetItem } from "../../patterns/ActionSheet";

type InlineActionsLayout = "single" | "buttons";
type LegacyButtonType = "Primary" | "Secondary";

export type InlineActionItem = {
  key: string;
  label: string;
  type?: LegacyButtonType;
  icon?: React.ReactNode;
  badge?: boolean;
  badgeLabel?: string;
  notification?: boolean;
  onPress: () => void;
  accessibilityLabel?: string;
  disabled?: boolean;
};

export type InlineActionsProps = {
  actions?: InlineActionItem[];
  variant?: InlineActionsLayout;
  showMore?: boolean;
  onMorePress?: () => void;
  /** Actions to show in the "More" bottom sheet. If omitted, falls back to `actions`. */
  moreActions?: ActionSheetItem[];
  /** Title for the "More" bottom sheet */
  moreTitle?: string;
  style?: StyleProp<ViewStyle>;
};

export const InlineActions = ({
  actions,
  variant = "buttons",
  showMore = false,
  onMorePress,
  moreActions,
  moreTitle,
  style
}: InlineActionsProps) => {
  const theme = useNuDSTheme();
  const [moreVisible, setMoreVisible] = useState(false);

  const handleMorePress = () => {
    if (onMorePress) {
      onMorePress();
    } else {
      setMoreVisible(true);
    }
  };

  const resolvedMoreActions: ActionSheetItem[] = moreActions ?? (actions ?? []).map((a) => ({
    key: a.key,
    label: a.label,
    icon: a.icon,
    onPress: a.onPress,
    disabled: a.disabled,
    accessibilityLabel: a.accessibilityLabel
  }));
  const normalizedItems = (actions ?? []).map((item) => ({
    ...item,
    type: item.type ?? "Secondary"
  }));
  const isSingle = variant === "single" || normalizedItems.length === 1;
  const actionCount = normalizedItems.length + (showMore ? 1 : 0);
  const containerPadding =
    isSingle ? theme.spacing[8] : actionCount === 2 ? theme.spacing[16] : actionCount === 3 ? theme.spacing[4] : theme.spacing[3];
  const gap = isSingle ? 0 : theme.spacing[1];

  const resolveContainerStyle = (type: LegacyButtonType, pressed: boolean): ViewStyle => {
    if (type === "Primary") {
      return { backgroundColor: pressed ? theme.color.surface.accent.primaryStrongOnPrimary : theme.color.surface.accent.primary };
    }
    return { backgroundColor: pressed ? theme.color.surface.subtleOnSubtle : theme.color.surface.default };
  };

  if (isSingle && normalizedItems.length > 0) {
    const action = normalizedItems[0];
    const isPrimary = action.type === "Primary";
    return (
      <View
        style={[
          {
            alignItems: "center",
            paddingHorizontal: containerPadding,
            width: "100%"
          },
          style
        ]}
      >
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={action.accessibilityLabel ?? action.label}
          disabled={action.disabled}
          onPress={action.onPress}
          style={({ pressed }: PressableStateCallbackType) => [
            {
              height: 64,
              borderRadius: theme.radius.full,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              paddingHorizontal: theme.spacing[6],
              gap: theme.spacing[2],
              ...theme.elevation.level1
            },
            resolveContainerStyle(action.type ?? "Secondary", pressed),
            !isPrimary
              ? { borderWidth: 1, borderColor: theme.color.border.default }
              : undefined,
            action.disabled ? { opacity: 0.6 } : undefined
          ]}
        >
          <View style={{ width: 20, height: 20, alignItems: "center", justifyContent: "center" }}>{action.icon}</View>
          <NText variant="labelSmallStrong" tone={isPrimary ? "inverse" : "primary"}>
            {action.label}
          </NText>
        </Pressable>
      </View>
    );
  }

  return (
    <View
      style={[
        {
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center",
          flexWrap: "nowrap",
          width: "100%",
          paddingTop: theme.spacing[2],
          paddingBottom: theme.spacing[5],
          paddingHorizontal: containerPadding,
          gap
        },
        style
      ]}
    >
      {normalizedItems.map((item) => {
        const isPrimary = item.type === "Primary";

        return (
          <View key={item.key} style={{ flex: 1, alignItems: "center", gap: theme.spacing[2] }}>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel={item.accessibilityLabel ?? item.label}
              accessibilityState={{ disabled: item.disabled }}
              disabled={item.disabled}
              onPress={item.onPress}
              style={({ pressed }: PressableStateCallbackType) => [
                {
                  width: 64,
                  height: 64,
                  borderRadius: theme.radius.full,
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  ...theme.elevation.level1
                },
                resolveContainerStyle(item.type ?? "Secondary", pressed),
                !isPrimary
                  ? { borderWidth: 1, borderColor: theme.color.border.default }
                  : undefined,
                item.disabled ? { opacity: 0.6 } : undefined
              ]}
            >
              <View style={{ width: 48, height: 48, alignItems: "center", justifyContent: "center" }}>{item.icon}</View>
              {item.notification ? (
                <View
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: 20,
                    height: 20,
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <View
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: 4,
                      backgroundColor: theme.color.surface.accent.primary,
                      borderWidth: 2,
                      borderColor: theme.color.surface.default
                    }}
                  />
                </View>
              ) : null}
            </Pressable>
            {item.badge && item.badgeLabel ? (
              <View
                style={{
                  position: "absolute",
                  top: 44,
                  minHeight: 20,
                  borderRadius: theme.radius.md,
                  backgroundColor: theme.color.surface.subtle,
                  paddingHorizontal: theme.spacing[2],
                  paddingVertical: 2
                }}
              >
                <NText variant="labelXSmallStrong" color={theme.color.content.accent.primary}>
                  {item.badgeLabel}
                </NText>
              </View>
            ) : null}
            <NText
              variant="labelSmallStrong"
              color={isPrimary ? theme.color.content.accent.primary : theme.color.content.default}
              style={{ textAlign: "center" }}
            >
              {item.label}
            </NText>
          </View>
        );
      })}
      {showMore ? (
        <View style={{ flex: 1, alignItems: "center", gap: theme.spacing[2] }}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="More"
            onPress={handleMorePress}
            style={{
              width: 64,
              height: 64,
              borderRadius: theme.radius.full,
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              borderColor: theme.color.border.default,
              backgroundColor: theme.color.surface.default,
              ...theme.elevation.level1
            }}
          >
            <View style={{ width: 48, height: 48, alignItems: "center", justifyContent: "center" }}>
              <MoreHorizontalIcon color={theme.color.content.default} />
            </View>
          </Pressable>
          <NText variant="labelSmallStrong" color={theme.color.content.default}>
            More
          </NText>
        </View>
      ) : null}
      {showMore && !onMorePress ? (
        <ActionSheet
          visible={moreVisible}
          onClose={() => setMoreVisible(false)}
          title={moreTitle}
          actions={resolvedMoreActions}
        />
      ) : null}
    </View>
  );
};
