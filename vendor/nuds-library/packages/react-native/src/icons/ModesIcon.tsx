import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const ModesIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(1.666, 1.667)">
      <Path
        d="M8.33398 0C12.9362 0.000176032 16.667 3.73074 16.667 8.33301C16.667 12.9353 12.9362 16.6658 8.33398 16.666C3.73161 16.666 1.12741e-07 12.9354 0 8.33301C0 3.73063 3.73161 0 8.33398 0ZM8.33398 1.66602C4.65209 1.66602 1.66699 4.65111 1.66699 8.33301C1.66699 12.0149 4.65209 15 8.33398 15C12.0157 14.9998 15 12.0148 15 8.33301C15 4.65122 12.0157 1.66619 8.33398 1.66602ZM6.88086 3.54688C6.74165 4.00633 6.66701 4.49412 6.66699 4.99902C6.66699 7.76045 8.90557 9.99902 11.667 9.99902C12.172 9.99902 12.6596 9.92441 13.1191 9.78516C12.4969 11.8382 10.5902 13.3329 8.33398 13.333C5.57257 13.333 3.33401 11.0944 3.33398 8.33301C3.33398 6.07682 4.82791 4.16922 6.88086 3.54688Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
