import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const TaxiCarIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(2.5, 2.083)">
      <Path
        d="M0 5L7.5 0L15 5V15.8333H0V5ZM8.33333 9.16667V14.1667H13.3333V5.89197L7.5 2.00308L1.66667 5.89197V14.1667H6.66667V9.16667H8.33333Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
