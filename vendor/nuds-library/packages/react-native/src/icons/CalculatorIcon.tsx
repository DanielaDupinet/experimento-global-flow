import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const CalculatorIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(3.333, 1.667)">
      <Path
        d="M10 0C11.8409 0 13.334 1.49206 13.334 3.33301V13.333C13.334 15.174 11.8409 16.666 10 16.666H3.33398C1.49304 16.666 1.77156e-07 15.174 0 13.333V3.33301C0 1.49206 1.49304 0 3.33398 0H10ZM3.33398 1.66602C2.41351 1.66602 1.66699 2.41253 1.66699 3.33301V13.333C1.66699 14.2535 2.41351 15 3.33398 15H10C10.9205 15 11.667 14.2535 11.667 13.333V3.33301C11.667 2.41253 10.9205 1.66602 10 1.66602H3.33398ZM5 13.333H3.33398V11.666H5V13.333ZM7.5 13.333H5.83398V11.666H7.5V13.333ZM10 13.333H8.33398V11.666H10V13.333ZM5 10.833H3.33398V9.16602H5V10.833ZM7.5 10.833H5.83398V9.16602H7.5V10.833ZM10 10.833H8.33398V9.16602H10V10.833ZM5 8.33301H3.33398V6.66602H5V8.33301ZM7.5 8.33301H5.83398V6.66602H7.5V8.33301ZM10 8.33301H8.33398V6.66602H10V8.33301ZM10 5H3.33398V3.33301H10V5Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
