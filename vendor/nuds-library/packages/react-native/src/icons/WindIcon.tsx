import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const WindIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(1.667, 3.334)">
      <Path
        d="M10.833 13.332H3.33301V11.666H10.833V13.332ZM11.666 0C14.4272 0 16.666 2.23877 16.666 5C16.6658 7.76102 14.4271 9.99902 11.666 9.99902H1.66699V8.33301H11.666C13.5067 8.33301 14.9988 6.84062 14.999 5C14.999 3.15918 13.5068 1.66602 11.666 1.66602C9.82524 1.66606 8.33301 3.15921 8.33301 5H6.66602C6.66602 2.2388 8.90483 4.76267e-05 11.666 0ZM5 6.66602H0V5H5V6.66602Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
