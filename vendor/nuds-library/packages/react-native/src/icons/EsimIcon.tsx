import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const EsimIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(1.667, 1.667)">
      <Path
        d="M13.333 0C15.174 1.7719e-07 16.666 1.49206 16.666 3.33301V13.333C16.666 15.174 15.174 16.666 13.333 16.666H3.33301C1.49206 16.666 1.77187e-07 15.174 0 13.333V3.33301C0 1.49206 1.49206 0 3.33301 0H13.333ZM3.33301 1.66602C2.41253 1.66602 1.66602 2.41253 1.66602 3.33301V5H3.33301V6.66602H1.66602V10H3.33301V11.666H1.66602V13.333C1.66602 14.2535 2.41253 15 3.33301 15H13.333C14.2535 15 15 14.2535 15 13.333V11.666H13.333V10H15V6.66602H13.333V5H15V3.33301C15 2.41253 14.2535 1.66602 13.333 1.66602H3.33301ZM11.666 11.666H5V5H11.666V11.666ZM6.66602 10H10V6.66602H6.66602V10Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
