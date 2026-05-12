import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const ParkingSignIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(1.666, 1.667)">
      <Path
        d="M8.33398 0C12.9338 0.000176235 16.667 3.73312 16.667 8.33301C16.667 12.9329 12.9338 16.6658 8.33398 16.666C3.73398 16.666 1.1287e-07 12.933 0 8.33301C0 3.73301 3.73398 0 8.33398 0ZM8.33398 1.66602C4.65898 1.66602 1.66699 4.65801 1.66699 8.33301C1.66699 12.008 4.65898 15 8.33398 15C12.0088 14.9998 15 12.0079 15 8.33301C15 4.65812 12.0088 1.66619 8.33398 1.66602ZM11.667 5.83301H6.66699V7.5H10.834V9.16602H6.66699V10.833H11.667V12.5H5V4.16602H11.667V5.83301Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
