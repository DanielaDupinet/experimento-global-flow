import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const HorizontalCardIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(1.667, 3.333)">
      <Path
        d="M13.333 0C15.1739 2.30891e-05 16.666 1.49305 16.666 3.33398V10C16.666 11.8409 15.1739 13.334 13.333 13.334H3.33301C1.49206 13.334 0 11.8409 0 10V3.33398C0 1.49304 1.49206 8.04704e-08 3.33301 0H13.333ZM3.33301 1.66699C2.41253 1.66699 1.66602 2.41351 1.66602 3.33398V10C1.66602 10.9205 2.41253 11.667 3.33301 11.667H13.333C14.2535 11.667 15 10.9205 15 10V3.33398C15 2.41352 14.2535 1.66701 13.333 1.66699H3.33301ZM12.5 6.66699V8.33398H10V6.66699H12.5Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
