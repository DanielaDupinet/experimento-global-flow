import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const HealthIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(2.5, 2.5)">
      <Path
        d="M9.16667 5.83333V1.66667H5.83333V5.83333H1.66667V9.16667H5.83333V13.3333H9.16667V9.16667H13.3333V5.83333H9.16667ZM15 4.16667V10.8333H10.8333V15H4.16667V10.8333H0V4.16667H4.16667V0H10.8333V4.16667H15Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
