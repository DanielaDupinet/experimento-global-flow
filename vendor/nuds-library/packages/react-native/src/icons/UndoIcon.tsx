import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const UndoIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(2.5, 1.997)">
      <Path
        d="M9.16667 11.6667C12.3883 11.6667 15 9.05499 15 5.83333C15 2.61167 12.3883 0 9.16667 0V1.66667C11.4679 1.66667 13.3333 3.53215 13.3333 5.83333C13.3333 8.13452 11.4679 10 9.16667 10H2.84518L6.00592 6.83926L4.82741 5.66074L0.244078 10.2441C-0.0813594 10.5695 -0.0813593 11.0972 0.244078 11.4226L4.82741 16.0059L6.00592 14.8274L2.84518 11.6667H9.16667Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
