import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const SortIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(2.5, 5)">
      <Path
        d="M0 0H15V1.66667H0V0Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M2.5 4.16667H12.5V5.83333H2.5V4.16667Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M10 8.33333H5V10H10V8.33333Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
