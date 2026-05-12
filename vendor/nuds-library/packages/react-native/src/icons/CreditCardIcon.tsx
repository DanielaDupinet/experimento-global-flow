import React from "react";
import Svg, { Path } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const CreditCardIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const iconColor = color ?? theme.color.content.default;

  const width = size;
  const height = size * (16 / 20);

  return (
    <Svg width={width} height={height} viewBox="0 0 20 16" fill="none">
          <Path 
            d="M15 8L12 8V10L15 10V8Z" 
            fill={iconColor}
          />
          <Path 
            d="M0 4V12C0 14.2091 1.79086 16 4 16H16C18.2091 16 20 14.2091 20 12V4C20 1.79086 18.2091 -9.65645e-08 16 0L4 5.24537e-07C1.79086 6.21101e-07 0 1.79086 0 4ZM4 2L16 2C17.1046 2 18 2.89543 18 4V12C18 13.1046 17.1046 14 16 14L4 14C2.89543 14 2 13.1046 2 12L2 4C2 2.89543 2.89543 2 4 2Z" 
            fill={iconColor}
          />
        </Svg>
  );
};
