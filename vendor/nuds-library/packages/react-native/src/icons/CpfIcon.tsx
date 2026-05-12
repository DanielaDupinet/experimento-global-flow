import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const CpfIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(1.667, 3.333)">
      <Path
        d="M11.6667 5.83333H3.33333V4.16667H11.6667V5.83333Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M3.33333 9.16667H8.33333V7.5H3.33333V9.16667Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M3.33333 0C1.49238 0 0 1.49238 0 3.33333V10C0 11.8409 1.49238 13.3333 3.33333 13.3333H13.3333C15.1743 13.3333 16.6667 11.8409 16.6667 10V3.33333C16.6667 1.49238 15.1743 0 13.3333 0H3.33333ZM13.3333 1.66667C14.2538 1.66667 15 2.41286 15 3.33333V10C15 10.9205 14.2538 11.6667 13.3333 11.6667H3.33333C2.41286 11.6667 1.66667 10.9205 1.66667 10V3.33333C1.66667 2.41286 2.41286 1.66667 3.33333 1.66667H13.3333Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
