import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const CalendarScheduledIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(2.5, 1.667)">
      <Path
        d="M4.16667 1.66667H10.8333V0H12.5V1.66667H13.3333H15V3.33333V5V6.66667V15V16.6667H13.3333H1.66667H0V15V6.66667V5V3.33333V1.66667H1.66667H2.5V0H4.16667V1.66667ZM13.3333 15V6.66667H7.5H1.66667V15H13.3333ZM13.3333 3.33333H1.66667V5H7.5H13.3333V3.33333ZM11.6667 10H8.33333V13.3333H11.6667V10Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
