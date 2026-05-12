import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const BellFilledIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(2.5, 1.667)">
      <Path
        d="M10 14.166C10 15.5466 8.88056 16.6658 7.5 16.666C6.11929 16.666 5 15.5467 5 14.166H10ZM7.5 0C10.7215 0.000176013 13.333 2.61146 13.333 5.83301V10.833H15V12.5H0V10.833H1.66602V5.83301C1.66602 2.61135 4.27834 0 7.5 0Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
