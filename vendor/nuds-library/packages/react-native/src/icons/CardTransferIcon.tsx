import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const CardTransferIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(2.083, 1.25)">
      <Path
        d="M12.5068 10.833C12.6978 10.8345 12.8887 10.901 13.043 11.0332L15.834 13.4258V15.6211L13.334 13.4785V17.5H11.667V13.4785L9.16699 15.6211V13.4258L11.958 11.0332C12.1123 10.901 12.3032 10.8345 12.4941 10.833H12.5068ZM10 0C11.8409 0 13.334 1.49206 13.334 3.33301V9.16602H11.667V3.33301C11.667 2.41253 10.9205 1.66602 10 1.66602H3.33398C2.41351 1.66602 1.66699 2.41253 1.66699 3.33301V13.333C1.66699 14.2535 2.41351 15 3.33398 15H7.5V16.666H3.33398C1.49304 16.666 1.93261e-07 15.174 0 13.333V3.33301C0 1.49206 1.49304 0 3.33398 0H10ZM8.33398 6.66602H6.66699V4.16602H8.33398V6.66602Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
