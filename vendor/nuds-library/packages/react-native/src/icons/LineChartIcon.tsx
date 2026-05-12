import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const LineChartIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(1.53, 4.655)">
      <Path
        d="M16.9404 1.17773L11.1074 7.01172H7.77344L4.09473 10.6904L0 6.59473L1.17871 5.41602L4.09473 8.33301L7.08301 5.34473H10.417L15.7617 0L16.9404 1.17773Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
