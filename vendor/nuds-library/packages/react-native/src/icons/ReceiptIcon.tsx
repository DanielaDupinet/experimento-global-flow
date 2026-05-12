import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const ReceiptIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(2.5, 1.667)">
      <Path
        d="M0 0V16.6667H1.66667V1.66667H13.3333V16.6667H15V0H0Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M3.33333 6.66667H11.6667V5H3.33333V6.66667Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M5 15H3.33333V16.6667H5V15Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M8.33333 15H6.66667V16.6667H8.33333V15Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M10 15H11.6667V16.6667H10V15Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M8.33333 10H3.33333V8.33333H8.33333V10Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
