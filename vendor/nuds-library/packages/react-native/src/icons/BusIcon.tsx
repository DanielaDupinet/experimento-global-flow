import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const BusIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(0.834, 1.667)">
      <Path
        d="M13.333 0C15.174 0 16.667 1.49206 16.667 3.33301V5H18.333V8.33301H16.667V15H15V16.666H13.333V15H5V16.666H3.33301V15H1.66699V8.33301H0V5H1.66699V3.33301C1.66699 1.49206 3.15905 1.28864e-07 5 0H13.333ZM3.33301 13.333H15V10H3.33301V13.333ZM6.66699 12.5H4.16699V10.833H6.66699V12.5ZM14.167 12.5H11.667V10.833H14.167V12.5ZM5 1.66602C4.07953 1.66602 3.33301 2.41253 3.33301 3.33301V8.33301H15V3.33301C15 2.41253 14.2535 1.66602 13.333 1.66602H5Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
