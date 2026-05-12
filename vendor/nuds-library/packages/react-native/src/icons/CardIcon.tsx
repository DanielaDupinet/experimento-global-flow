import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const CardIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(3.333, 1.667)">
      <Path
        d="M8.33333 6.66667L8.33333 4.16667L6.66667 4.16667L6.66667 6.66667H8.33333Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M10 2.91409e-07L3.33333 0C1.49238 -8.04704e-08 5.17584e-07 1.49238 4.37114e-07 3.33333L0 13.3333C-8.04704e-08 15.1743 1.49238 16.6667 3.33333 16.6667H10C11.8409 16.6667 13.3333 15.1743 13.3333 13.3333V3.33333C13.3333 1.49238 11.8409 3.7188e-07 10 2.91409e-07ZM11.6667 3.33333L11.6667 13.3333C11.6667 14.2538 10.9205 15 10 15H3.33333C2.41286 15 1.66667 14.2538 1.66667 13.3333L1.66667 3.33333C1.66667 2.41286 2.41286 1.66667 3.33333 1.66667L10 1.66667C10.9205 1.66667 11.6667 2.41286 11.6667 3.33333Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
