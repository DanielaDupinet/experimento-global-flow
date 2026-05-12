import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const BankIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(2.5, 2.083)">
      <Path
        d="M0 5V6.66667H1.66667L1.66667 12.5H3.33333L3.33333 6.66667H6.66667L6.66667 12.5H8.33333V6.66667H11.6667V12.5H13.3333V6.66667H15V5L7.5 0L0 5ZM11.9954 5H3.00463L7.5 2.00308L11.9954 5Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M0 15.8333V14.1667H15V15.8333H0Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
