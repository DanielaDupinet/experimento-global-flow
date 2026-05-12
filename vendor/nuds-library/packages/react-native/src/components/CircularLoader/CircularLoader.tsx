import React from "react";
import { ActivityIndicator, View } from "react-native";
import type { ViewProps } from "react-native";
import { useNuDSTheme } from "../../theme";

export type CircularLoaderProps = ViewProps & {
  size?: "small" | "large" | number;
  tone?: "primary" | "secondary" | "inverse";
};

export const CircularLoader = ({ size = "small", tone = "primary", style, ...rest }: CircularLoaderProps) => {
  const theme = useNuDSTheme();

  const color =
    tone === "inverse"
      ? theme.color.content.onColor
      : tone === "secondary"
        ? theme.color.content.subtle
        : theme.color.content.accent.primary;

  return (
    <View style={style} {...rest}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};
