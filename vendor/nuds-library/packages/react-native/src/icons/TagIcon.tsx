import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const TagIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(2.5, 2.5)">
      <Path
        d="M11.6666 11.6669H3.33354L6.85991 7.43526C7.19307 7.03547 7.80711 7.03547 8.14028 7.43526L11.6666 11.6669Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M4.58333 3.33333C3.89298 3.33333 3.33333 3.89298 3.33333 4.58333C3.33333 5.27369 3.89298 5.83333 4.58333 5.83333C5.27369 5.83333 5.83333 5.27369 5.83333 4.58333C5.83333 3.89298 5.27369 3.33333 4.58333 3.33333Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M0 0V15H15V0H0ZM1.66667 13.3333V1.66667H13.3333V13.3333H1.66667Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
