import React from "react";
import { View } from "react-native";
import type { ViewProps, ViewStyle } from "react-native";
import { useNuDSTheme } from "../../theme";

type BoxSurface = "screen" | "primary" | "secondary";

export type BoxProps = ViewProps & {
  surface?: BoxSurface;
  style?: ViewStyle | ViewStyle[];
};

export const Box = ({ surface = "primary", style, ...rest }: BoxProps) => {
  const theme = useNuDSTheme();

  const backgroundColor =
    surface === "screen"
      ? theme.color.background.default
      : surface === "secondary"
        ? theme.color.surface.subtle
        : theme.color.surface.default;

  return <View style={[{ backgroundColor }, style]} {...rest} />;
};
