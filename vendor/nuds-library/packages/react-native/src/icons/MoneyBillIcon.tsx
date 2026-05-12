import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const MoneyBillIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(0.833, 4.167)">
      <Path
        d="M11.6667 5.83333C11.6667 4.45262 10.5474 3.33333 9.16667 3.33333C7.78596 3.33333 6.66667 4.45262 6.66667 5.83333C6.66667 7.21405 7.78596 8.33333 9.16667 8.33333C10.5474 8.33333 11.6667 7.21405 11.6667 5.83333ZM8.33333 5H10V6.66667H8.33333V5Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M18.3333 0V11.6667L0 11.6667V0H18.3333ZM16.6667 1.66667L1.66667 1.66667L1.66667 10L16.6667 10V1.66667Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
