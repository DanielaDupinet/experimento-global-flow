import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const WarningIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(1.34, 2.5)">
      <Path
        d="M9.49359 5.83333V10H7.82692V5.83333H9.49359Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M7.82692 12.5V10.8333H9.49359V12.5H7.82692Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M8.66025 0L17.3205 15H0L8.66025 0ZM2.88675 13.3333H14.4338L8.66025 3.33333L2.88675 13.3333Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
