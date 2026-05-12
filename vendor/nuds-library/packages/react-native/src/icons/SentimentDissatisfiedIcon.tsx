import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const SentimentDissatisfiedIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(1.667, 1.667)">
      <Path
        d="M6.66667 5H5V6.66667H6.66667V5Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M10 5H11.6667V6.66667H10V5Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M8.33333 10C6.95262 10 5.83333 11.1193 5.83333 12.5H4.16667C4.16667 10.1988 6.03215 8.33333 8.33333 8.33333C10.6345 8.33333 12.5 10.1988 12.5 12.5H10.8333C10.8333 11.1193 9.71405 10 8.33333 10Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M16.6667 8.33333C16.6667 12.9357 12.9357 16.6667 8.33333 16.6667C3.73096 16.6667 0 12.9357 0 8.33333C0 3.73096 3.73096 0 8.33333 0C12.9357 0 16.6667 3.73096 16.6667 8.33333ZM15 8.33333C15 4.65144 12.0152 1.66667 8.33333 1.66667C4.65144 1.66667 1.66667 4.65144 1.66667 8.33333C1.66667 12.0152 4.65144 15 8.33333 15C12.0152 15 15 12.0152 15 8.33333Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
