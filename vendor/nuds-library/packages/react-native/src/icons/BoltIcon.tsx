import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const BoltIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(2.875, 0.091)">
      <Path
        d="M8.03115 0.181534C8.26291 -0.155583 8.79167 0.00788316 8.79189 0.416886V7.40907H13.8329C14.1683 7.40915 14.3657 7.78498 14.1757 8.06142L6.21865 19.6366C5.98683 19.9738 5.4579 19.8095 5.4579 19.4003V12.4091H0.416888C0.0814639 12.409 -0.11593 12.0322 0.0741148 11.7558L8.03115 0.181534ZM2.79286 10.7421H7.1249V15.3759L11.4569 9.07607H7.1249V4.4413L2.79286 10.7421Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
