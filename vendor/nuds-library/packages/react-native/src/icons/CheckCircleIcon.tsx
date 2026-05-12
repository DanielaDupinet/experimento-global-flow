import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const CheckCircleIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(1.667, 1.667)">
      <Path
        d="M6.76751 10.9937C7.09295 11.3191 7.62059 11.3191 7.94603 10.9937L13.2493 5.69036L12.0708 4.51185L7.35677 9.2259L4.99975 6.86888L3.82124 8.04739L6.76751 10.9937Z"
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
