import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const CardShieldIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(3.333, 1.667)">
      <Path
        d="M10 0C11.8409 0 13.334 1.49206 13.334 3.33301V7.5H11.667V3.33301C11.667 2.41253 10.9205 1.66602 10 1.66602H3.33398C2.41351 1.66602 1.66699 2.41253 1.66699 3.33301V13.333C1.66699 14.2535 2.41351 15 3.33398 15H5V16.666H3.33398C1.49304 16.666 0 15.174 0 13.333V3.33301C6.44195e-08 1.49206 1.49304 0 3.33398 0H10ZM13.334 10.833V12.916C13.334 14.6726 12.1954 15.3534 10.2812 16.498C10.1894 16.553 10.0954 16.6088 10 16.666C9.9048 16.6089 9.81141 16.5529 9.71973 16.498C7.80555 15.3534 6.66699 14.6726 6.66699 12.916V10.833L10 9.16602L13.334 10.833ZM8.33398 11.8633V12.916C8.33398 13.3541 8.44016 13.5538 8.70801 13.8115C8.9931 14.0858 9.38769 14.3475 10 14.7207C10.6126 14.3474 11.0078 14.0858 11.293 13.8115C11.5607 13.5539 11.667 13.354 11.667 12.916V11.8633L10 11.0293L8.33398 11.8633ZM8.33398 6.66602H6.66699V4.16602H8.33398V6.66602Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
