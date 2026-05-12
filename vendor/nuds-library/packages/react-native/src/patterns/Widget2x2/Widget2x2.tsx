import React from "react";
import { Pressable, View } from "react-native";
import type { ViewStyle } from "react-native";
import { Avatar } from "../../components/Avatar";
import { Button } from "../../components/Button";
import { NText } from "../../primitives/Text";
import { useNuDSTheme } from "../../theme";

type Widget2x2Variant = "default" | "singleBar" | "button" | "list1" | "list2" | "list3";
type Widget2x2DescriptionVariant = "default" | "success" | "warning" | "error" | "performanceUp" | "performanceDown";

export type Widget2x2ListItem = {
  key?: string;
  avatar?: React.ReactNode;
  label: string;
  description?: string;
  onPress?: () => void;
};

export type Widget2x2Props = {
  variant?: Widget2x2Variant;
  showLeading?: boolean;
  leadingContent?: React.ReactNode;
  overline?: string;
  title?: string;
  description?: string;
  descriptionVariant?: Widget2x2DescriptionVariant;
  descriptionIcon?: React.ReactNode;
  listItems?: Widget2x2ListItem[];
  buttonLabel?: string;
  onButtonPress?: () => void;
  onPress?: () => void;
  style?: ViewStyle | ViewStyle[];
};

export const Widget2x2 = ({
  variant = "default",
  showLeading = true,
  leadingContent,
  overline = "Overline",
  title = "Title",
  description = "Description",
  descriptionVariant = "default",
  descriptionIcon,
  listItems = [],
  buttonLabel,
  onButtonPress,
  onPress,
  style
}: Widget2x2Props) => {
  const theme = useNuDSTheme();
  const isList = variant.startsWith("list");
  const listCount = variant === "list1" ? 1 : variant === "list2" ? 2 : variant === "list3" ? 3 : 0;
  const hasButton = variant === "button" || Boolean(buttonLabel);
  const descriptionTone: "secondary" | "positive" | "warning" | "negative" =
    descriptionVariant === "success" || descriptionVariant === "performanceUp"
      ? "positive"
      : descriptionVariant === "warning"
        ? "warning"
        : descriptionVariant === "error" || descriptionVariant === "performanceDown"
          ? "negative"
          : "secondary";

  const Container = onPress ? Pressable : View;

  return (
    <View style={[{ flex: 1, maxWidth: "50%" }, style]}>
      <Container
        style={{
          aspectRatio: 1,
          justifyContent: "space-between",
          borderRadius: theme.radius.xl,
          backgroundColor: theme.color.surface.default,
          borderWidth: 1,
          borderColor: theme.color.border.default,
          overflow: "hidden",
          ...theme.elevation.level1,
          shadowColor: theme.color.content.default
        }}
        onPress={onPress}
      >
      {/* Top: leading icon in avatar circle */}
      <View style={{ paddingTop: theme.spacing[4], paddingHorizontal: theme.spacing[4] }}>
        {showLeading && leadingContent ? (
          <Avatar variant="icon" size="small" icon={leadingContent} />
        ) : null}
      </View>

      {/* Bottom: text content + optional list/button */}
      <View style={{ paddingHorizontal: theme.spacing[4], paddingBottom: theme.spacing[4], gap: 2 }}>
        {overline ? (
          <NText variant="labelXSmallDefault" tone="secondary">
            {overline}
          </NText>
        ) : null}
        <NText variant={isList ? "subtitleMediumStrong" : "subtitleMediumStrong"} numberOfLines={isList ? 1 : 2}>
          {title}
        </NText>
        {!isList && description ? (
          <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
            <NText variant="labelXSmallDefault" tone={descriptionTone} numberOfLines={1} style={{ flex: 1 }}>
              {description}
            </NText>
            {descriptionIcon ? <View style={{ width: 16, height: 16 }}>{descriptionIcon}</View> : null}
          </View>
        ) : isList && description ? (
          <NText variant="labelXSmallDefault" tone="secondary" numberOfLines={1}>
            {description}
          </NText>
        ) : null}
      </View>

      {(isList && listItems.length > 0) || hasButton ? (
        <View style={{ paddingHorizontal: theme.spacing[2], paddingBottom: theme.spacing[2], gap: theme.spacing[2] }}>
          {isList && listItems.length > 0 ? (
            <View
              style={{
                borderRadius: theme.radius.lg,
                borderWidth: 1,
                borderColor: theme.color.border.default,
                paddingVertical: theme.spacing[2]
              }}
            >
              {listItems.slice(0, listCount).map((item, index) => (
                <Pressable
                  key={item.key ?? `item-${index}`}
                  onPress={item.onPress}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingHorizontal: theme.spacing[2],
                    paddingVertical: theme.spacing[1],
                    gap: theme.spacing[1]
                  }}
                >
                  {item.avatar ? <View style={{ width: 32, height: 32, borderRadius: theme.radius.full }}>{item.avatar}</View> : null}
                  <View style={{ flex: 1, gap: 0 }}>
                    <NText variant="labelXSmallStrong" numberOfLines={1}>
                      {item.label}
                    </NText>
                    {item.description ? (
                      <NText variant="labelXSmallDefault" tone="secondary" numberOfLines={1}>
                        {item.description}
                      </NText>
                    ) : null}
                  </View>
                </Pressable>
              ))}
            </View>
          ) : null}
          {hasButton ? (
            <Button compact label={buttonLabel ?? "Button"} expanded onPress={onButtonPress} />
          ) : null}
        </View>
      ) : null}
      </Container>
    </View>
  );
};
