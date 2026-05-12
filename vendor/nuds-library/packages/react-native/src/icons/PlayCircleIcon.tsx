import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const PlayCircleIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(6.25, 3.333)">
      <Path
        d="M5.16574e-06 0.833333C5.31475e-06 0.373096 0.373101 0 0.833339 0L7.4998 6.45717e-07L7.4998 1.66667L1.66667 1.66667L1.66667 13.3333L0 13.3333L5.16574e-06 0.833333Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
