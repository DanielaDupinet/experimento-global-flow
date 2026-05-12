import React from "react";
import Svg, { G, Path } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const InfoIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(1.794, 1.666)">
        <Path
          d="M9.16667 10.8333V12.5H7.5V10.8333H9.16667Z"
          fill={fill}
          fillOpacity={opacity}
        />
        <Path
          d="M9.16667 10V4.16667H7.5V10H9.16667Z"
          fill={fill}
          fillOpacity={opacity}
        />
        <Path
          d="M8.33333 16.6667C12.9357 16.6667 16.6667 12.9357 16.6667 8.33333C16.6667 3.73096 12.9357 0 8.33333 0C3.73096 0 0 3.73096 0 8.33333C0 12.9357 3.73096 16.6667 8.33333 16.6667ZM8.33333 15C4.65144 15 1.66667 12.0152 1.66667 8.33333C1.66667 4.65144 4.65144 1.66667 8.33333 1.66667C12.0152 1.66667 15 4.65144 15 8.33333C15 12.0152 12.0152 15 8.33333 15Z"
          fill={fill}
          fillOpacity={opacity}
        />
      </G>
    </Svg>
  );
};
