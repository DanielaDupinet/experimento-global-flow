import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const YieldIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(4.167, 3.333)">
      <Path
        d="M10 13.3333H11.6667L11.6667 0H10L10 13.3333Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M8.33333 3.33333V13.3333H6.66667V3.33333H8.33333Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M3.33333 13.3333H5V6.66667H3.33333V13.3333Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M1.66667 13.3333V10H0V13.3333H1.66667Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
