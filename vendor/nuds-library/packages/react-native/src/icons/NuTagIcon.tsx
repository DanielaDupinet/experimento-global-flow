import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const NuTagIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(1.666, 5.833)">
      <Path
        d="M15 0C15.9205 0 16.667 0.746518 16.667 1.66699V6.66699C16.667 7.58747 15.9205 8.33398 15 8.33398H1.66699C0.746518 8.33398 0 7.58747 0 6.66699V1.66699C2.57653e-07 0.746518 0.746518 0 1.66699 0H15ZM1.66699 1.66699V6.66699H15V1.66699H1.66699ZM13.334 3.33398V5H11.667V3.33398H13.334Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
