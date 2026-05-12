import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const HeartFilledIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(1.667, 2.813)">
      <Path
        d="M9.37326 1.25101C11.0825 -0.457835 13.8677 -0.409494 15.5168 1.35745C17.0874 3.04043 17.042 5.66524 15.4143 7.293L8.33323 14.3741L1.25119 7.293C-0.376512 5.66529 -0.421731 3.04044 1.14865 1.35745C2.79791 -0.409601 5.58402 -0.458158 7.29319 1.25101L8.33323 2.29105L9.37326 1.25101Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
