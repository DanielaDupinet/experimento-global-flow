import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const MoreHorizontalIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(2.5, 8.333)">
      <Path
        d="M0 0H3.33333V3.33333H0V0Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M5.83333 0H9.16667V3.33333H5.83333V0Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M15 0H11.6667V3.33333H15V0Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
