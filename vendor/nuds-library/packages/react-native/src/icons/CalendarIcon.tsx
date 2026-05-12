import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const CalendarIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(2.5, 1.667)">
      <Path
        d="M4.16667 0H2.5V1.66667H0V16.6667H15V1.66667H12.5V0H10.8333V1.66667H4.16667V0ZM13.3333 6.66667V15H1.66667V6.66667H13.3333ZM13.3333 5H1.66667V3.33333H13.3333V5Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
