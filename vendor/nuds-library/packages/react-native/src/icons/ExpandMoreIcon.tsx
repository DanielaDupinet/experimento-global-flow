import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const ExpandMoreIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(4.827, 6.997)">
      <Path
        d="M5.17259 3.99408L1.17851 0L0 1.17851L4.58333 5.76184C4.90877 6.08728 5.43641 6.08728 5.76184 5.76184L10.3452 1.17851L9.16667 0L5.17259 3.99408Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
