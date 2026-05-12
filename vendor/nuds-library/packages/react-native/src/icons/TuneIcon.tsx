import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const TuneIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(2.5, 4.167)">
      <Path
        d="M5 5V3.33333H15V1.66667H5V0H3.33333V1.66667H0V3.33333H3.33333V5H5Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M11.6667 8.33333H15V10H11.6667V11.6667H10V10H0V8.33333H10V6.66667H11.6667V8.33333Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
