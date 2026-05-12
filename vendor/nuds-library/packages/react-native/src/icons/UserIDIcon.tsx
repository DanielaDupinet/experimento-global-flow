import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const UserIdIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(3.333, 1.667)">
      <Path
        d="M8.33333 7.5C8.33333 8.42047 7.58714 9.16667 6.66667 9.16667C5.74619 9.16667 5 8.42047 5 7.5C5 6.57953 5.74619 5.83333 6.66667 5.83333C7.58714 5.83333 8.33333 6.57953 8.33333 7.5Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M3.33333 12.5C3.33333 11.1193 4.45262 10 5.83333 10H7.5C8.88071 10 10 11.1193 10 12.5H3.33333Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M3.33333 0C1.49238 0 0 1.49238 0 3.33333V13.3333C0 15.1743 1.49238 16.6667 3.33333 16.6667H10C11.8409 16.6667 13.3333 15.1743 13.3333 13.3333V5.434C13.3333 4.61762 13.0337 3.82962 12.4914 3.21945L10.6241 1.11879C9.99155 0.407159 9.08487 0 8.13274 0H3.33333ZM11.6667 13.3333C11.6667 14.2538 10.9205 15 10 15H3.33333C2.41286 15 1.66667 14.2538 1.66667 13.3333V3.33333C1.66667 2.41286 2.41286 1.66667 3.33333 1.66667H8.13274C8.22168 1.66667 8.30982 1.67377 8.39643 1.68765C8.35607 1.78491 8.33333 1.89368 8.33333 2.01184V4.16667C8.33333 4.6269 8.70643 5 9.16667 5H11.3215C11.4201 5 11.5122 4.98416 11.5965 4.95546C11.6427 5.10951 11.6667 5.27061 11.6667 5.434V13.3333Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
