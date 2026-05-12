import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const CloseMiniIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(5, 5)">
      <Path
        d="M5 5.91747L9.08253 10L10 9.08253L5.91747 5L10 0.917474L9.08253 0L5 4.08253L0.917474 0L0 0.917474L4.08253 5L0 9.08253L0.917474 10L5 5.91747Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
