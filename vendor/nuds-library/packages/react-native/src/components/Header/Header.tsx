import React from "react";
import { Image, View } from "react-native";
import type { ImageSourcePropType, ViewStyle } from "react-native";
import { MoreHorizontalIcon, NuLogoIcon } from "../../icons";
import { NText } from "../../primitives/Text";
import { useNuDSTheme } from "../../theme";
import { TopBar } from "../TopBar";

type HeaderType = "standard" | "artwork" | "full-bleed";

export type HeaderProps = {
  /** Header layout variant */
  type?: HeaderType;
  /** Whether title, subtitle, and artwork are center-aligned */
  centered?: boolean;
  /** Title text */
  title?: string;
  /** Subtitle text */
  subtitle?: string;
  /** Whether to show the subtitle */
  showSubtitle?: boolean;
  /** Whether to show the top navigation bar */
  showTopBar?: boolean;
  /** Whether to show the Nu logo (standard type only) */
  showLogo?: boolean;
  /** Custom illustration element (artwork type) */
  illustration?: React.ReactNode;
  /** Image source for full-bleed type */
  imageSource?: ImageSourcePropType;
  /** Custom image element for full-bleed type (overrides imageSource) */
  image?: React.ReactNode;
  /** Callback when back / leading button is pressed */
  onBackPress?: () => void;
  /** Callback when trailing action button is pressed */
  onActionPress?: () => void;
  /** Whether to show the trailing action button */
  showAction?: boolean;
  /** Custom trailing icon element */
  trailing?: React.ReactNode;
  /** Custom leading icon element */
  leading?: React.ReactNode;
  /** Additional style applied to the root container */
  style?: ViewStyle | ViewStyle[];
};

export const Header = ({
  type = "standard",
  centered = false,
  title = "Header title",
  subtitle = "Subtitle",
  showSubtitle = true,
  showTopBar = true,
  showLogo = false,
  illustration,
  imageSource,
  image,
  onBackPress,
  onActionPress,
  showAction = true,
  trailing,
  leading,
  style,
}: HeaderProps) => {
  const theme = useNuDSTheme();

  const iconColor = theme.color.content.default;
  const alignment = centered ? "center" : "flex-start";
  const textAlign = centered ? ("center" as const) : ("left" as const);

  /* ── Title section paddingTop varies by type ── */
  const titlePaddingTop =
    type === "full-bleed"
      ? theme.spacing[5]
      : type === "artwork" || centered
        ? theme.spacing[3]
        : 0;

  /* ── Artwork / Logo / Image area ── */
  const renderArtwork = () => {
    if (type === "standard" && showLogo) {
      return (
        <View
          style={{
            width: "100%",
            paddingHorizontal: theme.spacing[6],
            paddingVertical: theme.spacing[2],
            alignItems: alignment,
          }}
        >
          <NuLogoIcon size={40} color={iconColor} />
        </View>
      );
    }

    if (type === "artwork") {
      return (
        <View
          style={{
            width: "100%",
            paddingHorizontal: theme.spacing[6],
            paddingVertical: theme.spacing[2],
            alignItems: alignment,
          }}
        >
          {illustration ?? (
            <View
              style={{
                width: 150,
                height: 150,
                backgroundColor: theme.color.surface.subtle,
                borderRadius: theme.radius.md,
              }}
            />
          )}
        </View>
      );
    }

    if (type === "full-bleed") {
      return (
        <View
          style={{
            width: "100%",
            paddingHorizontal: theme.spacing[4],
          }}
        >
          {image ??
            (imageSource ? (
              <Image
                source={imageSource}
                style={{
                  width: "100%",
                  height: 229,
                  borderRadius: theme.radius.xl,
                }}
                resizeMode="cover"
              />
            ) : (
              <View
                style={{
                  width: "100%",
                  height: 229,
                  borderRadius: theme.radius.xl,
                  backgroundColor: theme.color.surface.subtle,
                }}
              />
            ))}
        </View>
      );
    }

    return null;
  };

  return (
    <View style={[{ width: "100%", alignItems: "center" }, style]}>
      {/* ── Top Bar ── */}
      {showTopBar ? (
        <TopBar
          title=""
          show1stAction={showAction}
          show2ndAction={false}
          trailing={
            trailing ?? <MoreHorizontalIcon color={iconColor} opacity={0.62} />
          }
          leading={leading}
          onBackPress={onBackPress}
          on1stActionPress={onActionPress}
          style={{ backgroundColor: "transparent" }}
        />
      ) : null}

      {/* ── Artwork / Logo / Image ── */}
      {renderArtwork()}

      {/* ── Title + Subtitle ── */}
      <View
        style={{
          width: "100%",
          paddingHorizontal: theme.spacing[5],
          paddingBottom: theme.spacing[5],
          paddingTop: titlePaddingTop,
          gap: theme.spacing[2],
          overflow: "hidden",
          alignItems: alignment,
        }}
      >
        <NText
          variant="titleMedium"
          tone="primary"
          style={{ textAlign, width: "100%" }}
        >
          {title}
        </NText>
        {showSubtitle ? (
          <NText
            variant="subtitleMediumDefault"
            tone="secondary"
            style={{ textAlign, width: "100%" }}
          >
            {subtitle}
          </NText>
        ) : null}
      </View>
    </View>
  );
};
