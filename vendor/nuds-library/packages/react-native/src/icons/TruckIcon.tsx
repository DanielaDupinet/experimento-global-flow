import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const TruckIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(0.833, 3.333)">
      <Path
        d="M11.667 0C12.1272 0 12.5 0.373747 12.5 0.833984V2.5H15C16.8409 2.5 18.334 3.99304 18.334 5.83398V10.834H15.834C15.8338 12.2144 14.7144 13.3338 13.334 13.334C11.9534 13.334 10.8342 12.2145 10.834 10.834H6.66699C6.66682 12.2145 5.5476 13.334 4.16699 13.334C2.78639 13.334 1.66717 12.2145 1.66699 10.834H0V0.833984C0 0.373747 0.373747 0 0.833984 0H11.667ZM3.33398 10V11.667H5V10H3.33398ZM12.5 10V11.667H14.167V10H12.5ZM1.66699 1.66699V9.16699H2.30371C2.76148 8.65557 3.42661 8.33398 4.16699 8.33398C4.90737 8.33398 5.57251 8.65557 6.03027 9.16699H10.834V1.66699H1.66699ZM12.5 4.16699V8.47559C12.7606 8.38346 13.0418 8.33398 13.334 8.33398C14.0743 8.33408 14.7396 8.65561 15.1973 9.16699H16.667V7.5H15V5.83398H16.667C16.667 4.91351 15.9205 4.16699 15 4.16699H12.5Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
