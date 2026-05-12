import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const BellIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(2.5, 1.667)">
      <Path
        d="M1.66667 10.8333V5.83333C1.66667 2.61167 4.27834 0 7.5 0C10.7217 0 13.3333 2.61167 13.3333 5.83333V10.8333H15V12.5H0V10.8333H1.66667ZM11.6667 5.83333C11.6667 3.53215 9.80119 1.66667 7.5 1.66667C5.19881 1.66667 3.33333 3.53215 3.33333 5.83333V10.8333H11.6667V5.83333Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M5 14.1667C5 15.5474 6.11929 16.6667 7.5 16.6667C8.88071 16.6667 10 15.5474 10 14.1667H5Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
