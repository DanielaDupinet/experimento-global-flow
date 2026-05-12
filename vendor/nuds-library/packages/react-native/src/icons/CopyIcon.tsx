import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const CopyIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(2.5, 2.5)">
      <Path
        d="M3.33333 0H15V11.6667H3.33333V0ZM5 1.66667V10H13.3333V1.66667H5Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M0 3.33333H1.66667V13.3333H11.6667V15H0V3.33333Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
