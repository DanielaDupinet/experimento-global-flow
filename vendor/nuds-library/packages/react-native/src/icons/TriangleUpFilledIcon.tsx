import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const TriangleUpFilledIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(2.917, 3.75)">
        <Path
          d="M7.08301 0L0 12.5H14.166L7.08301 0Z"
          fill={fill}
          fillOpacity={opacity}
        />
      </G>
    </Svg>
  );
};
