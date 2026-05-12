import React from "react";
import { View } from "react-native";
import type { ViewProps, ViewStyle } from "react-native";
import { useNuDSTheme } from "../../theme";

export type DividerSize = "default" | "medium";

export type DividerProps = ViewProps & {
  /** Thickness of the divider line (default = 1px, medium = 2px) */
  size?: DividerSize;
  /** Left inset / margin */
  inset?: number;
  style?: ViewStyle | ViewStyle[];
};

const HEIGHT: Record<DividerSize, number> = {
  default: 1,
  medium: 2,
};

export const Divider = ({
  size = "default",
  inset = 0,
  style,
  ...rest
}: DividerProps) => {
  const theme = useNuDSTheme();

  return (
    <View
      style={[
        {
          height: HEIGHT[size],
          backgroundColor: theme.color.border.default,
          marginLeft: inset,
        },
        style,
      ]}
      {...rest}
    />
  );
};
