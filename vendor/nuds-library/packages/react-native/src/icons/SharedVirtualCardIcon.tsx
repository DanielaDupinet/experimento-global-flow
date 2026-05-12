import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const SharedVirtualCardIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(2.083, 1.24)">
      <Path
        d="M11.667 13.333C13.9682 13.333 15.834 15.1988 15.834 17.5V17.5205L14.167 17.5C14.167 16.1193 13.0477 15 11.667 15C10.2863 15 9.16699 16.1193 9.16699 17.5H7.5C7.5 15.1988 9.36581 13.333 11.667 13.333ZM5.83398 15V16.666H4.16699V15H5.83398ZM1.88965 14.166C2.03594 14.4189 2.24715 14.63 2.5 14.7764V16.5615C1.32878 16.26 0.406928 15.3373 0.105469 14.166H1.88965ZM1.66699 12.5H0V10.833H1.66699V12.5ZM11.667 7.5C13.0477 7.5 14.167 8.61929 14.167 10C14.1668 11.3806 13.0476 12.5 11.667 12.5C10.2864 12.5 9.16717 11.3806 9.16699 10C9.16699 8.61929 10.2863 7.5 11.667 7.5ZM10.834 10.833H12.5V9.16602H10.834V10.833ZM10 0C11.8409 0 13.334 1.49206 13.334 3.33301V5.83301H11.667V3.33301C11.667 2.41253 10.9205 1.66602 10 1.66602H3.33398C2.41351 1.66602 1.66699 2.41253 1.66699 3.33301V9.16602H0V3.33301C0 1.49206 1.49304 0 3.33398 0H10ZM8.33398 6.66602H6.66699V4.16602H8.33398V6.66602Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
