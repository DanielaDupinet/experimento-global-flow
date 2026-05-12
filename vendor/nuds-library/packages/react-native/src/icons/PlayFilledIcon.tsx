import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const PlayFilledIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(1.667, 2.5)">
      <Path
        d="M8.33333 0C6.95262 0 5.83333 1.11929 5.83333 2.5C5.83333 3.88071 6.95262 5 8.33333 5C9.71405 5 10.8333 3.88071 10.8333 2.5C10.8333 1.11929 9.71404 0 8.33333 0ZM7.5 3.33333V1.66667H9.16667V3.33333H7.5Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M16.6667 6.66667V8.33333H0V6.66667H16.6667Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M5.83333 12.5C5.83333 13.8807 6.95262 15 8.33333 15C9.71405 15 10.8333 13.8807 10.8333 12.5C10.8333 11.1193 9.71404 10 8.33333 10C6.95262 10 5.83333 11.1193 5.83333 12.5ZM7.5 13.3333V11.6667H9.16667V13.3333H7.5Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
