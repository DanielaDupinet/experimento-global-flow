import React from "react";
import Svg, { Path } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const CheckmarkIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        d="M7.5 13.475L3.525 9.5L2.15833 10.8583L7.5 16.2L17.5 6.2L16.1417 4.84167L7.5 13.475Z"
        fill={fill}
        fillOpacity={opacity}
      />
    </Svg>
  );
};
