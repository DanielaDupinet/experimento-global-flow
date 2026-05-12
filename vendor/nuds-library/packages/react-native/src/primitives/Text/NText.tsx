import React from "react";
import { Text } from "react-native";
import type { TextProps, TextStyle } from "react-native";
import type { TypographyVariant } from "@nu-design-org/nuds-vibecode-tokens";
import { useNuDSTheme } from "../../theme";

type TextTone = "primary" | "secondary" | "inverse";
type ExtendedTextTone = TextTone | "positive" | "warning" | "negative";

export type NTextProps = TextProps & {
  variant?: TypographyVariant;
  tone?: ExtendedTextTone;
  color?: string;
  tabularNumbers?: boolean;
  style?: TextStyle | TextStyle[];
};

export const NText = ({
  variant = "paragraphMediumDefault",
  tone = "primary",
  color,
  tabularNumbers = false,
  style,
  ...rest
}: NTextProps) => {
  const theme = useNuDSTheme();

  const colorMap: Record<ExtendedTextTone, string> = {
    inverse: theme.color.content.onColor,
    secondary: theme.color.content.subtle,
    primary: theme.color.content.default,
    positive: theme.color.content.feedback.success,
    warning: theme.color.content.feedback.attention,
    negative: theme.color.content.feedback.critical
  };
  const isLabelVariant = variant.startsWith("label");
  const shouldUseTabular = tabularNumbers || isLabelVariant;

  return (
    <Text
      style={[
        theme.typography[variant],
        {
          color: color ?? colorMap[tone],
          fontVariant: shouldUseTabular ? ["tabular-nums", "lining-nums"] : undefined
        },
        style
      ]}
      {...rest}
    />
  );
};
