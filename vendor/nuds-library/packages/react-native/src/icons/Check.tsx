import React from "react";
import Svg, { Path } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const Check = ({ size = 18, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const iconColor = color ?? theme.color.content.default;

  const width = size;
  const height = size * (13 / 18);

  return (
    <Svg width={width} height={height} viewBox="0 0 18 13" fill="none">
          <Path 
            d="M7.07087 12.0214C6.68035 12.4119 6.04718 12.4119 5.65666 12.0214L-1.87455e-05 6.36473L1.4142 4.95051L6.36377 9.90008L16.2633 0.000592947L17.6775 1.41481L7.07087 12.0214Z" 
            fill={iconColor}
          />
        </Svg>
  );
};
