import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const BarCodeIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(2.5, 5.833)">
      <Path
        d="M0 0V8.33333H1.66667V0H0Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M8.33333 0V8.33333H10V0H8.33333Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M3.33333 0H6.66667V8.33333H3.33333V0Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M11.6667 0V8.33333H15V0H11.6667Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
