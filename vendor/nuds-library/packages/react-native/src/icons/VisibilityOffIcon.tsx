import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const VisibilityOffIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(1.666, 1.667)">
      <Path
        d="M9.16699 1.66602H13.334L16.667 6.66602L13.334 11.666H9.16699V16.666H7.5V11.666H0L1.66699 6.66602L0 1.66602H7.5V0H9.16699V1.66602ZM3.42383 6.66602L2.3125 10H12.4414L14.6641 6.66602L12.4414 3.33301H2.3125L3.42383 6.66602ZM6.66699 7.5H5V5.83301H6.66699V7.5Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
