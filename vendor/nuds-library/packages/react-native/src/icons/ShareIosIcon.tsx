import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const ShareIosIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(2.5, 1.667)">
      <Path
        d="M8.33333 2.84518V11.6667H6.66667V2.84518L3.50592 6.00592L2.32741 4.82741L6.91074 0.244078C7.23618 -0.0813593 7.76382 -0.0813593 8.08926 0.244078L12.6726 4.82741L11.4941 6.00592L8.33333 2.84518Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M1.66667 8.33333V15H13.3333V8.33333H15V16.6667H0V8.33333H1.66667Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
