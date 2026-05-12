import React from "react";
import { Image, Pressable, View } from "react-native";
import type { ViewStyle } from "react-native";
import { Avatar } from "../../components/Avatar";
import { Button } from "../../components/Button";
import { NText } from "../../primitives/Text";
import { useNuDSTheme } from "../../theme";
import { PerformanceIndicator } from "../shared/PerformanceIndicator";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type Widget4xNVariant =
  | "default"
  | "stepped"
  | "determinate"
  | "list"
  | "crossSell";

type Widget4xNDescriptionType = "default" | "performanceUp" | "performanceDown";

type Widget4xNButtonLayout = "hug" | "fill" | "fillHug";

export type Widget4xNButton = {
  key: string;
  label: string;
  onPress?: () => void;
  type?: "Primary" | "Secondary";
};

export type Widget4xNListItem = {
  key: string;
  image?: number | { uri: string };
  label: string;
  description?: string;
  /** Right-aligned secondary label (bold) */
  secLabel?: string;
  /** Right-aligned secondary description */
  secDescription?: string;
  /** Color style for the secondary description */
  secDescriptionType?: "default" | "performance" | "success" | "attention" | "critical";
  /** Swap visual hierarchy: primary becomes subtle, description becomes bold */
  invertHierarchy?: boolean;
  onPress?: () => void;
};

export type Widget4xNProps = {
  variant?: Widget4xNVariant;
  overline?: string;
  title?: string;
  description?: string;
  /** Controls how the description renders — plain text or performance indicator */
  descriptionType?: Widget4xNDescriptionType;
  /** @deprecated Use descriptionType instead */
  descriptionColor?: string;
  /** Use the large 28 px display title instead of the default 18 px */
  largeTitle?: boolean;
  /** Flexible trailing element (avatar, illustration, etc.) */
  trailing?: React.ReactNode;
  /** @deprecated Use trailing instead — icon shown inside a 40 px circle */
  trailingIcon?: React.ReactNode;
  showTrailing?: boolean;
  buttons?: Widget4xNButton[];
  /** How buttons are sized: fill (default), hug, or fillHug */
  buttonLayout?: Widget4xNButtonLayout;
  currentStep?: number;
  totalSteps?: number;
  progress?: number;
  progressLabel?: string;
  listItems?: Widget4xNListItem[];
  artworkImage?: number | { uri: string };
  onPress?: () => void;
  style?: ViewStyle | ViewStyle[];
};

export const Widget4xN = ({
  variant = "default",
  overline,
  title = "Title",
  description = "Description",
  descriptionType = "default",
  descriptionColor,
  largeTitle = false,
  trailing,
  trailingIcon,
  showTrailing = true,
  buttons,
  buttonLayout = "hug",
  currentStep = 1,
  totalSteps = 3,
  progress = 30,
  progressLabel = "Label",
  listItems = [],
  artworkImage,
  onPress,
  style,
}: Widget4xNProps) => {
  const theme = useNuDSTheme();

  // --- Variant flags ---
  const isStepped = variant === "stepped";
  const isDeterminate = variant === "determinate";
  const isList = variant === "list";
  const isCrossSell = variant === "crossSell";

  // --- Colours ---
  const backgroundColor = isCrossSell
    ? theme.color.surface.decorative["05Subtle"]
    : theme.color.surface.default;

  const titleTone = "primary";
  const descriptionTone = "secondary";

  // --- Resolve trailing element (new prop takes precedence) ---
  const resolvedTrailing = trailing ?? (trailingIcon ? (
    <Avatar variant="icon" size="medium" icon={trailingIcon} />
  ) : null);

  // --- Description renderer ---
  const renderDescription = () => {
    if (!description) return null;

    if (descriptionType === "performanceUp") {
      return <PerformanceIndicator value={description} direction="up" />;
    }
    if (descriptionType === "performanceDown") {
      return <PerformanceIndicator value={description} direction="down" />;
    }

    // Default text description
    return (
      <NText
        variant="labelSmallDefault"
        tone={descriptionTone}
        color={descriptionColor}
        numberOfLines={2}
      >
        {description}
      </NText>
    );
  };

  // --- Button renderer ---
  const renderButtons = () => {
    if (!buttons || buttons.length === 0) return null;
    return (
      <View
        style={{
          paddingHorizontal: theme.spacing[3],
          paddingBottom: theme.spacing[1],
        }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: theme.spacing[2],
            height: 44,
            alignItems: "center",
          }}
        >
          {buttons.map((button, index) => {
            const isFirst = index === 0;

            // Button sizing based on layout
            let btnStyle: ViewStyle = {};
            if (buttonLayout === "fill") {
              btnStyle = { flex: 1 };
            } else if (buttonLayout === "fillHug") {
              btnStyle = isFirst ? { flex: 1 } : {};
            }
            // "hug" = default, no flex (buttons shrink to content)

            return (
              <Button
                key={button.key}
                type={button.type ?? (isFirst ? "Primary" : "Secondary")}
                label={button.label}
                onPress={button.onPress}
                compact
                style={btnStyle}
              />
            );
          })}
        </View>
      </View>
    );
  };

  // --- List item renderer ---
  const renderListItem = (item: Widget4xNListItem) => {
    const secTone = (() => {
      switch (item.secDescriptionType) {
        case "success":
        case "performance":
          return "positive" as const;
        case "attention":
          return "warning" as const;
        case "critical":
          return "negative" as const;
        default:
          return "secondary" as const;
      }
    })();

    return (
      <Pressable
        key={item.key}
        onPress={item.onPress}
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: theme.spacing[3],
          padding: theme.spacing[3],
          borderRadius: theme.radius.md,
          borderWidth: 1,
          borderColor: theme.color.border.default,
          backgroundColor: theme.color.surface.default,
        }}
      >
        {/* Leading avatar / image */}
        {item.image ? (
          <Avatar variant="image" size="small" imageSource={item.image} />
        ) : null}

        {/* Primary content (left side) */}
        <View style={{ flex: 1, gap: 2 }}>
          <NText
            variant={item.invertHierarchy ? "labelSmallDefault" : "labelSmallStrong"}
            tone={item.invertHierarchy ? "secondary" : "primary"}
            numberOfLines={1}
          >
            {item.label}
          </NText>
          {item.description ? (
            <NText
              variant={item.invertHierarchy ? "labelSmallStrong" : "labelSmallDefault"}
              tone={item.invertHierarchy ? "primary" : "secondary"}
              numberOfLines={1}
            >
              {item.description}
            </NText>
          ) : null}
        </View>

        {/* Secondary content (right side) */}
        {(item.secLabel || item.secDescription) ? (
          <View style={{ alignItems: "flex-end", gap: 2 }}>
            {item.secLabel ? (
              <NText variant="labelSmallStrong" numberOfLines={1}>
                {item.secLabel}
              </NText>
            ) : null}
            {item.secDescription ? (
              item.secDescriptionType === "performance" ? (
                <PerformanceIndicator value={item.secDescription} direction="up" />
              ) : (
                <NText
                  variant="labelSmallDefault"
                  tone={secTone}
                  numberOfLines={1}
                >
                  {item.secDescription}
                </NText>
              )
            ) : null}
          </View>
        ) : null}
      </Pressable>
    );
  };

  // ---------------------------------------------------------------------------
  // Card content
  // ---------------------------------------------------------------------------

  const card = (
    <View
      style={[
        {
          borderRadius: theme.radius.xl,
          borderWidth: 1,
          borderColor: theme.color.border.default,
          backgroundColor,
          overflow: "hidden",
          ...theme.elevation.level1,
          shadowColor: theme.color.content.default,
        },
        style,
      ]}
    >
      {/* Cross-sell artwork */}
      {isCrossSell && artworkImage ? (
        <Image
          source={artworkImage}
          style={{ width: "100%", height: 144 }}
          resizeMode="cover"
        />
      ) : null}

      {/* ---- Top section (non-list variants) ---- */}
      {!isList ? (
        <View
          style={{
            paddingHorizontal: 20,
            paddingTop: 20,
            paddingBottom: theme.spacing[4],
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-start",
              gap: theme.spacing[3],
            }}
          >
            <View style={{ flex: 1, gap: theme.spacing[1] }}>
              {overline ? (
                <NText variant="labelSmallDefault" tone="secondary" numberOfLines={1}>
                  {overline}
                </NText>
              ) : null}
              <View style={{ gap: 2 }}>
                <NText
                  variant={largeTitle ? "titleMedium" : "subtitleMediumStrong"}
                  tone={titleTone}
                  numberOfLines={2}
                >
                  {title}
                </NText>
                {renderDescription()}
              </View>
            </View>
            {showTrailing && resolvedTrailing ? resolvedTrailing : null}
          </View>
        </View>
      ) : (
        /* ---- Top section (list variant) ---- */
        <View style={{ width: "100%" }}>
          <View
            style={{
              paddingHorizontal: 20,
              paddingTop: 20,
              paddingBottom: theme.spacing[1],
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                gap: theme.spacing[3],
              }}
            >
              <View style={{ flex: 1, gap: 2 }}>
                {overline ? (
                  <NText variant="labelSmallDefault" tone="secondary" numberOfLines={1}>
                    {overline}
                  </NText>
                ) : null}
                <NText
                  variant={largeTitle ? "titleMedium" : "subtitleMediumStrong"}
                  numberOfLines={2}
                >
                  {title}
                </NText>
                {description ? (
                  <NText variant="labelSmallDefault" tone="secondary" numberOfLines={2}>
                    {description}
                  </NText>
                ) : null}
              </View>
              {showTrailing && resolvedTrailing ? resolvedTrailing : null}
            </View>
          </View>

          {/* List rows */}
          <View
            style={{
              paddingHorizontal: theme.spacing[3],
              paddingTop: theme.spacing[1],
              paddingBottom: theme.spacing[2],
              gap: theme.spacing[2],
            }}
          >
            {listItems.map(renderListItem)}
          </View>
        </View>
      )}

      {/* ---- Stepped progress ---- */}
      {isStepped ? (
        <View
          style={{
            paddingHorizontal: 20,
            paddingTop: theme.spacing[1],
            paddingBottom: theme.spacing[4],
          }}
        >
          <View
            style={{
              flexDirection: "row",
              gap: theme.spacing[1],
              height: 6,
            }}
          >
            {Array.from({ length: totalSteps }).map((_, index) => (
              <View
                key={`step-${index}`}
                style={{
                  flex: 1,
                  height: 6,
                  borderRadius: theme.radius.full,
                  backgroundColor:
                    index < currentStep
                      ? theme.color.surface.accent.primary
                      : theme.color.surface.subtleOnSubtle,
                }}
              />
            ))}
          </View>
        </View>
      ) : null}

      {/* ---- Determinate progress ---- */}
      {isDeterminate ? (
        <View
          style={{
            paddingHorizontal: 20,
            paddingTop: theme.spacing[1],
            paddingBottom: theme.spacing[4],
          }}
        >
          <NText variant="labelSmallStrong">{progressLabel}</NText>
          <View
            style={{
              width: "100%",
              height: 6,
              borderRadius: theme.radius.full,
              overflow: "hidden",
              marginTop: theme.spacing[2],
              backgroundColor: theme.color.surface.subtleOnSubtle,
            }}
          >
            <View
              style={{
                width: `${Math.max(0, Math.min(progress, 100))}%`,
                height: "100%",
                borderRadius: theme.radius.md,
                backgroundColor: theme.color.surface.accent.primary,
              }}
            />
          </View>
        </View>
      ) : null}

      {/* ---- Buttons ---- */}
      {renderButtons()}
    </View>
  );

  // ---------------------------------------------------------------------------
  // Pressable wrapper
  // ---------------------------------------------------------------------------

  return onPress && !isList ? (
    <Pressable onPress={onPress} style={{ width: "100%" }}>
      {card}
    </Pressable>
  ) : (
    card
  );
};
