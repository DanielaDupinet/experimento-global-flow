import React, { useCallback, useRef, useState } from "react";
import { Animated, Pressable, ScrollView, View } from "react-native";
import type { ViewStyle } from "react-native";
import { NText } from "../../primitives/Text";
import { CloseMiniIcon } from "../../icons/CloseMiniIcon";
import { SectionTitle } from "../../components/SectionTitle";
import { useNuDSTheme } from "../../theme";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

/** Available decorative color schemes from NuDS V3 tokens (01–06). */
export type DecorativeScheme = "01" | "02" | "03" | "04" | "05" | "06";

/** Banner size — `regular` is the 4xN wide card, `compact` is the 2×2 grid card. */
export type CrossSellBannerSize = "regular" | "compact";

export type CrossSellBanner = {
  key: string;
  /** Leading icon element (20 px recommended) */
  icon?: React.ReactNode;
  /** Primary text rendered in semibold weight */
  text: string;
  /**
   * Optional secondary text appended after `text` in regular weight.
   * Both flow together in the same paragraph (mixed-weight inline text).
   */
  description?: string;
  /** Called when the banner is tapped */
  onPress?: () => void;
  /** Called after the banner has been dismissed (animation finished) */
  onDismiss?: () => void;
};

export type CrossSellCarouselProps = {
  /** Array of banner offers to display */
  items: CrossSellBanner[];
  /**
   * When `true`, each banner shows a dismiss (×) button that fades the
   * banner out on tap. Once every banner is dismissed the whole carousel
   * collapses so no blank space remains.
   * @default false
   */
  dismissible?: boolean;
  /**
   * Decorative color scheme applied to the banners (01–06).
   * Maps to NuDS V3 surface.decorativeXXSubtle (background) and
   * content.decorativeXX (text) tokens.
   * @default "05"
   */
  colorScheme?: DecorativeScheme;
  /**
   * Banner size variant.
   * - `"regular"` — wide 4xN card (299 px, 60 px min-height, 14 px text, 24 px radius)
   * - `"compact"` — small 2×2 grid card (150 px, 48 px min-height, 12 px text, 16 px radius)
   * @default "regular"
   */
  size?: CrossSellBannerSize;
  /**
   * When provided, renders a compact SectionTitle above the carousel.
   * The title automatically disappears when all banners are dismissed.
   */
  sectionTitle?: string;
  /** Called when every banner has been dismissed */
  onAllDismissed?: () => void;
  style?: ViewStyle | ViewStyle[];
};

// ---------------------------------------------------------------------------
// Animated banner wrapper
// ---------------------------------------------------------------------------

type AnimatedBannerProps = {
  item: CrossSellBanner;
  dismissible: boolean;
  bannerBg: string;
  bannerTextColor: string;
  size: CrossSellBannerSize;
  isSingle: boolean;
  onDismissed: (key: string) => void;
};

const ANIMATION_DURATION = 250;

const AnimatedBanner = ({
  item,
  dismissible,
  bannerBg,
  bannerTextColor,
  size,
  isSingle,
  onDismissed,
}: AnimatedBannerProps) => {
  const theme = useNuDSTheme();
  const opacity = useRef(new Animated.Value(1)).current;
  const scale = useRef(new Animated.Value(1)).current;

  const isCompact = size === "compact";

  const handleDismiss = useCallback(() => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 0,
        duration: ANIMATION_DURATION,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 0.9,
        duration: ANIMATION_DURATION,
        useNativeDriver: true,
      }),
    ]).start(() => {
      item.onDismiss?.();
      onDismissed(item.key);
    });
  }, [item, onDismissed, opacity, scale]);

  // --- Size-specific layout values ---
  const bannerWidth = isCompact ? 150 : 299;
  const bannerMinHeight = isCompact ? 48 : 60;
  const bannerRadius = isCompact ? theme.radius.lg : theme.radius.xl;
  const textVariantStrong = isCompact ? "labelXSmallStrong" as const : "labelSmallStrong" as const;
  const textVariantDefault = isCompact ? "labelXSmallDefault" as const : "labelSmallDefault" as const;

  const bannerContent = (
    <View
      style={{
        flexDirection: "row",
        alignItems: isCompact ? "center" : "flex-start",
        gap: theme.spacing[2],
        backgroundColor: bannerBg,
        borderRadius: bannerRadius,
        paddingLeft: theme.spacing[3],
        paddingRight: isCompact ? theme.spacing[2] : theme.spacing[3],
        paddingVertical: isCompact ? theme.spacing[2] : theme.spacing[3],
        minHeight: bannerMinHeight,
        width: bannerWidth,
        // Elevation — matches Figma [Magic] Elevation/Default
        borderWidth: 1,
        borderColor: theme.color.border.default,
        ...theme.elevation.level1,
      }}
    >
      {/* Leading icon */}
      {item.icon ? (
        <View style={{ width: 20, height: 20, flexShrink: 0 }}>
          {item.icon}
        </View>
      ) : null}

      {/* Text — mixed weight: bold title + regular description */}
      <View style={{ flex: 1 }}>
        <NText
          variant={textVariantStrong}
          color={bannerTextColor}
        >
          {item.text}
          {item.description ? (
            <NText
              variant={textVariantDefault}
              color={bannerTextColor}
            >
              {` ${item.description}`}
            </NText>
          ) : null}
        </NText>
      </View>

      {/* Dismiss button — only for regular size when dismissible */}
      {dismissible && !isCompact ? (
        <Pressable
          onPress={handleDismiss}
          accessibilityRole="button"
          accessibilityLabel="Dismiss offer"
          hitSlop={8}
          style={{
            width: 32,
            height: 32,
            flexShrink: 0,
            alignItems: "center",
            justifyContent: "center",
            marginTop: -4,
            marginRight: -4,
          }}
        >
          <CloseMiniIcon size={20} color={bannerTextColor} />
        </Pressable>
      ) : null}
    </View>
  );

  const wrappedContent = item.onPress ? (
    <Pressable onPress={item.onPress}>{bannerContent}</Pressable>
  ) : (
    bannerContent
  );

  return (
    <Animated.View style={{ opacity, transform: [{ scale }] }}>
      {wrappedContent}
    </Animated.View>
  );
};

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Decorative-scheme colour resolver
// ---------------------------------------------------------------------------

const useDecorativeColors = (scheme: DecorativeScheme) => {
  const theme = useNuDSTheme();

  const bgMap: Record<DecorativeScheme, string> = {
    "01": theme.color.surface.decorative["01Subtle"],
    "02": theme.color.surface.decorative["02Subtle"],
    "03": theme.color.surface.decorative["03Subtle"],
    "04": theme.color.surface.decorative["04Subtle"],
    "05": theme.color.surface.decorative["05Subtle"],
    "06": theme.color.surface.decorative["06Subtle"],
  };
  const textMap: Record<DecorativeScheme, string> = {
    "01": theme.color.content.decorative["01"],
    "02": theme.color.content.decorative["02"],
    "03": theme.color.content.decorative["03"],
    "04": theme.color.content.decorative["04"],
    "05": theme.color.content.decorative["05"],
    "06": theme.color.content.decorative["06"],
  };

  return { bg: bgMap[scheme], text: textMap[scheme] };
};

export const CrossSellCarousel = ({
  items,
  dismissible = false,
  colorScheme = "05",
  size = "regular",
  sectionTitle,
  onAllDismissed,
  style,
}: CrossSellCarouselProps) => {
  const theme = useNuDSTheme();
  const { bg: bannerBg, text: bannerTextColor } = useDecorativeColors(colorScheme);

  // Track which banners have been dismissed
  const [dismissedKeys, setDismissedKeys] = useState<Set<string>>(new Set());

  // Animate the whole container collapsing
  const containerHeight = useRef(new Animated.Value(1)).current;
  const [collapsed, setCollapsed] = useState(false);

  const handleBannerDismissed = useCallback(
    (key: string) => {
      setDismissedKeys((prev) => {
        const next = new Set(prev);
        next.add(key);

        // Check if all items are now dismissed
        if (next.size >= items.length) {
          // Collapse the container
          Animated.timing(containerHeight, {
            toValue: 0,
            duration: ANIMATION_DURATION,
            useNativeDriver: false, // height animation can't use native driver
          }).start(() => {
            setCollapsed(true);
            onAllDismissed?.();
          });
        }

        return next;
      });
    },
    [items.length, containerHeight, onAllDismissed]
  );

  if (!items || items.length === 0 || collapsed) return null;

  const visibleItems = items.filter((i) => !dismissedKeys.has(i.key));
  const isSingle = visibleItems.length <= 1;

  return (
    <Animated.View
      style={[
        {
          opacity: containerHeight, // 1 → 0
          transform: [{ scaleY: containerHeight }],
        },
        style,
      ]}
    >
      {/* Section title — auto-hides when all banners are dismissed */}
      {sectionTitle ? (
        <SectionTitle title={sectionTitle} compact />
      ) : null}

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: theme.spacing[4],
          paddingBottom: theme.spacing[3],
          gap: theme.spacing[3],
        }}
      >
        {visibleItems.map((item) => (
          <AnimatedBanner
            key={item.key}
            item={item}
            dismissible={dismissible}
            bannerBg={bannerBg}
            bannerTextColor={bannerTextColor}
            size={size}
            isSingle={isSingle}
            onDismissed={handleBannerDismissed}
          />
        ))}
      </ScrollView>
    </Animated.View>
  );
};
