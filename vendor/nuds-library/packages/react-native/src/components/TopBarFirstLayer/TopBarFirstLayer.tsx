import React, { useEffect } from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import type { ImageSourcePropType, ViewStyle } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { NuLogoIcon } from "../../icons/NuLogoIcon";
import { SettingsIcon } from "../../icons";
import { NText } from "../../primitives/Text";
import { useNuDSTheme } from "../../theme";

const ACTION_HIT_SIZE = 44;
const ACTION_ICON_SIZE = 32;
const TOP_BAR_DEFAULT_HEIGHT = 116;
const TOP_BAR_REFRESHING_HEIGHT = 200;
const LOGO_TRANSLATE_OFFSET = -20;

export type TopBarFirstLayerProps = {
  /** User's first name displayed next to the avatar. */
  firstName?: string;
  /** Tier label displayed below the first name. */
  tier?: string;
  /** Whether to show the tier row (defaults to true when tier is provided). */
  showTier?: boolean;
  /** Avatar node rendered in the leading slot. */
  avatar?: React.ReactNode;
  /** Callback when the avatar is pressed. */
  onAvatarPress?: () => void;
  /** First (rightmost) trailing action node. */
  trailing?: React.ReactNode;
  /** Second trailing action node. */
  trailingSecond?: React.ReactNode;
  /** Third (leftmost) trailing action node. */
  trailingThird?: React.ReactNode;
  /** Whether to show the 1st trailing action. */
  show1stAction?: boolean;
  /** Whether to show the 2nd trailing action. */
  show2ndAction?: boolean;
  /** Whether to show the 3rd trailing action. */
  show3rdAction?: boolean;
  /** Callback for the 1st trailing action. */
  on1stActionPress?: () => void;
  /** Callback for the 2nd trailing action. */
  on2ndActionPress?: () => void;
  /** Callback for the 3rd trailing action. */
  on3rdActionPress?: () => void;
  /** Background image rendered behind the content with a brand-colored overlay. */
  backgroundImage?: ImageSourcePropType;
  /** Whether the pull-to-refresh animation is active. */
  isRefreshing?: boolean;
  style?: ViewStyle | ViewStyle[];
};

const IconActionSlot = ({
  children,
  onPress,
  accessibilityLabel,
}: {
  children: React.ReactNode;
  onPress?: () => void;
  accessibilityLabel: string;
}) => (
  <Pressable
    accessibilityRole="button"
    accessibilityLabel={accessibilityLabel}
    onPress={onPress}
    style={styles.actionSlot}
  >
    <View style={styles.actionIcon}>{children}</View>
  </Pressable>
);

const TIMING_CONFIG = {
  duration: 300,
  easing: Easing.out(Easing.cubic),
};

export const TopBarFirstLayer = ({
  firstName,
  tier,
  showTier = true,
  avatar,
  onAvatarPress,
  show1stAction = true,
  show2ndAction = true,
  show3rdAction = true,
  trailing,
  trailingSecond,
  trailingThird,
  on1stActionPress,
  on2ndActionPress,
  on3rdActionPress,
  backgroundImage,
  isRefreshing = false,
  style,
}: TopBarFirstLayerProps) => {
  const theme = useNuDSTheme();
  const onColorText = theme.color.content.onColor;

  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withTiming(isRefreshing ? 1 : 0, TIMING_CONFIG);
  }, [isRefreshing, progress]);

  const containerAnimatedStyle = useAnimatedStyle(() => ({
    height:
      TOP_BAR_DEFAULT_HEIGHT +
      progress.value * (TOP_BAR_REFRESHING_HEIGHT - TOP_BAR_DEFAULT_HEIGHT),
  }));

  const contentRowAnimatedStyle = useAnimatedStyle(() => ({
    opacity: 1 - progress.value,
  }));

  const logoAnimatedStyle = useAnimatedStyle(() => ({
    opacity: progress.value,
    transform: [
      { translateY: LOGO_TRANSLATE_OFFSET * (1 - progress.value) },
    ],
  }));

  const avatarNode = avatar ? (
    onAvatarPress ? (
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={`${firstName ?? "User"} profile`}
        onPress={onAvatarPress}
      >
        {avatar}
      </Pressable>
    ) : (
      <View accessibilityLabel={`${firstName ?? "User"} avatar`}>{avatar}</View>
    )
  ) : null;

  return (
    <Animated.View
      style={[
        {
          width: "100%",
          backgroundColor: theme.color.surface.accent.primary,
          overflow: "hidden" as const,
        },
        containerAnimatedStyle,
        style,
      ]}
    >
      {backgroundImage != null && (
        <>
          <Image
            source={backgroundImage}
            style={StyleSheet.absoluteFillObject}
            resizeMode="cover"
            accessibilityElementsHidden
            importantForAccessibility="no-hide-descendants"
          />
          <View
            style={[
              StyleSheet.absoluteFillObject,
              { backgroundColor: theme.color.surface.accent.primary, opacity: 0.75 },
            ]}
          />
        </>
      )}

      <Animated.View
        style={[
          StyleSheet.absoluteFillObject,
          styles.logoContainer,
          logoAnimatedStyle,
        ]}
        pointerEvents="none"
      >
        <NuLogoIcon size={40} color={onColorText} />
      </Animated.View>

      <Animated.View
        style={[
          {
            flexDirection: "row",
            alignItems: "center",
            gap: theme.spacing[3],
            padding: theme.spacing[4],
          },
          contentRowAnimatedStyle,
        ]}
      >
        {avatarNode}

        <View style={{ flex: 1, gap: 2 }}>
          {firstName ? (
            <NText
              variant="titleXSmall"
              numberOfLines={1}
              style={{ color: onColorText }}
            >
              {firstName}
            </NText>
          ) : null}
          {showTier && tier ? (
            <NText
              variant="labelSmallDefault"
              numberOfLines={1}
              style={{ color: onColorText }}
            >
              {tier}
            </NText>
          ) : null}
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: theme.spacing[1],
          }}
        >
          {show3rdAction ? (
            <IconActionSlot
              onPress={on3rdActionPress}
              accessibilityLabel="Tertiary top bar action"
            >
              {trailingThird ?? <SettingsIcon color={onColorText} />}
            </IconActionSlot>
          ) : null}
          {show2ndAction ? (
            <IconActionSlot
              onPress={on2ndActionPress}
              accessibilityLabel="Secondary top bar action"
            >
              {trailingSecond ?? <SettingsIcon color={onColorText} />}
            </IconActionSlot>
          ) : null}
          {show1stAction ? (
            <IconActionSlot
              onPress={on1stActionPress}
              accessibilityLabel="Primary top bar action"
            >
              {trailing ?? <SettingsIcon color={onColorText} />}
            </IconActionSlot>
          ) : null}
        </View>
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  actionSlot: {
    width: ACTION_HIT_SIZE,
    height: ACTION_HIT_SIZE,
    justifyContent: "center",
    alignItems: "center",
  },
  actionIcon: {
    width: ACTION_ICON_SIZE,
    height: ACTION_ICON_SIZE,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
