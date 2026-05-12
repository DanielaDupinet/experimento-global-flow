import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const ArrowUpRightIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(4.289, 4.289)">
      <Path
        d="M1.42259 0H10.5893C10.8103 0 11.0222 0.0877973 11.1785 0.244078C11.3348 0.400358 11.4226 0.61232 11.4226 0.833333V10H9.75592V2.84518L1.17851 11.4226L0 10.2441L8.57741 1.66667H1.42259V0Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
