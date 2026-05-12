import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const TrashIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(2.5, 1.667)">
      <Path
        d="M5 1.66667L5 0H10V1.66667L15 1.66667V3.33333L0 3.33333V1.66667H5Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M2.5 13.3333C2.5 14.2538 3.24619 15 4.16667 15H10.8333C11.7538 15 12.5 14.2538 12.5 13.3333V5H14.1667V13.3333C14.1667 15.1743 12.6743 16.6667 10.8333 16.6667H4.16667C2.32572 16.6667 0.833333 15.1743 0.833333 13.3333V5H2.5V13.3333Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
