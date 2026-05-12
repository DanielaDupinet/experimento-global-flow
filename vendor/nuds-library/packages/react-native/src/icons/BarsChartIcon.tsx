import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const BarsChartIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(4.167, 3.333)">
      <Path
        d="M1.66602 13.334H0V7.5H1.66602V13.334ZM5 13.334H3.33301V0H5V13.334ZM8.33301 13.334H6.66602V5H8.33301V13.334ZM11.666 13.334H10V3.33398H11.666V13.334Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
