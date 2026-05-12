import React from "react";
import { View } from "react-native";
import type { StyleProp, ViewStyle } from "react-native";
import { Divider } from "../../primitives/Divider";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import type { SectionTitleProps } from "../SectionTitle/SectionTitle";
import { useNuDSTheme } from "../../theme";

export type ListSectionProps = {
  /** Optional section title displayed above the card */
  sectionTitle?: string;
  /** Additional SectionTitle props (secondary, trailing, etc.) */
  sectionTitleProps?: Omit<SectionTitleProps, "title">;
  /** ListRow children rendered inside the card */
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

export const ListSection = ({
  sectionTitle,
  sectionTitleProps,
  children,
  style,
}: ListSectionProps) => {
  const theme = useNuDSTheme();

  return (
    <View
      style={[
        {
          paddingBottom: theme.spacing[3], // 12px
        },
        style,
      ]}
    >
      {/* Optional Section Title */}
      {sectionTitle ? (
        <SectionTitle title={sectionTitle} {...sectionTitleProps} />
      ) : null}

      {/* Card wrapper */}
      <View
        style={{
          paddingHorizontal: theme.spacing[4], // 16px (list/horizontal-padding)
        }}
      >
        <View
          style={{
            backgroundColor: theme.color.surface.default,
            borderWidth: 1,
            borderColor: theme.color.border.default,
            borderRadius: theme.radius.xl, // 24px
            overflow: "hidden",
            paddingVertical: theme.spacing[1], // 4px
            // Elevation
            shadowColor: theme.color.content.default,
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.05,
            shadowRadius: 0,
            elevation: 1,
          }}
        >
          {React.Children.toArray(children).flatMap((child, index, arr) =>
            index < arr.length - 1
              ? [child, <View key={`divider-${index}`} style={{ paddingHorizontal: 20 }}><Divider /></View>]
              : [child]
          )}
        </View>
      </View>
    </View>
  );
};
