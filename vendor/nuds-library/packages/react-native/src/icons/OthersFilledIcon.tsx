import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const OthersFilledIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(2.5, 2.5)">
      <Path
        d="M3.33301 8.33301C5.17396 8.33301 6.66602 9.82604 6.66602 11.667C6.66584 13.5078 5.17385 15 3.33301 15C1.4922 15 0.000176073 13.5078 0 11.667C0 9.82607 1.4921 8.33305 3.33301 8.33301ZM11.666 8.33301C13.507 8.33301 15 9.82604 15 11.667C14.9998 13.5078 13.5069 15 11.666 15C9.82536 14.9998 8.33318 13.5077 8.33301 11.667C8.33301 9.82618 9.82525 8.33323 11.666 8.33301ZM3.33301 0C5.17385 0 6.66584 1.49221 6.66602 3.33301C6.66602 5.17396 5.17396 6.66699 3.33301 6.66699C1.4921 6.66695 0 5.17393 0 3.33301C0.000175879 1.49224 1.4922 4.39348e-05 3.33301 0ZM11.666 0C13.5069 0 14.9998 1.49221 15 3.33301C15 5.17396 13.507 6.66699 11.666 6.66699C9.82525 6.66677 8.33301 5.17382 8.33301 3.33301C8.33318 1.49234 9.82536 0.000219723 11.666 0Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
