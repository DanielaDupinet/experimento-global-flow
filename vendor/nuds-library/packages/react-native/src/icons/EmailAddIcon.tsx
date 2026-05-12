import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const EmailAddIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(1.667, 3.333)">
      <Path
        d="M0 3.33333C0 1.49238 1.49238 0 3.33333 0H13.3333C15.1743 0 16.6667 1.49238 16.6667 3.33333V10C16.6667 11.8409 15.1743 13.3333 13.3333 13.3333H3.33333C1.49238 13.3333 0 11.8409 0 10V3.33333ZM3.26329 1.66811L8.33333 6.73816L13.4034 1.66811C13.3801 1.66715 13.3568 1.66667 13.3333 1.66667H3.33333C3.30987 1.66667 3.28652 1.66715 3.26329 1.66811ZM1.83688 2.59872C1.72788 2.82034 1.66667 3.06969 1.66667 3.33333V10C1.66667 10.9205 2.41286 11.6667 3.33333 11.6667H13.3333C14.2538 11.6667 15 10.9205 15 10V3.33333C15 3.06969 14.9388 2.82034 14.8298 2.59872L8.92259 8.50592C8.59715 8.83136 8.06951 8.83136 7.74408 8.50592L1.83688 2.59872Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
