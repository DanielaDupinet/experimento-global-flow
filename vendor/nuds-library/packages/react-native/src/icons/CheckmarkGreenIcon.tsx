import React from "react";
import Svg, { Path } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const CheckmarkGreenIcon = ({ size = 16, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const iconColor = color ?? theme.color.content.default;

  const width = size;
  const height = size * (13 / 18);

  return (
    <Svg width={width} height={height} viewBox="0 0 18 13" fill="none">
          <Path 
            d="M7.07087 12.0209C6.68035 12.4114 6.04718 12.4114 5.65666 12.0209L-1.87455e-05 6.36424L1.4142 4.95003L6.36377 9.8996L16.2633 0.000104666L17.6775 1.41432L7.07087 12.0209Z" 
            fill={iconColor}
          />
        </Svg>
  );
};
