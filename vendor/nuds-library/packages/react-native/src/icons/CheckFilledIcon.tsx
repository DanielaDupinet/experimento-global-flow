import React from "react";
import Svg, { Path } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const CheckFilledIcon = ({ size = 24, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const iconColor = color ?? theme.color.content.default;

  const width = size;
  const height = size * (17 / 24);

  return (
    <Svg width={width} height={height} viewBox="0 0 24 17" fill="none">
          <Path 
            d="M9.42718 16.0278C8.90648 16.5485 8.06226 16.5485 7.54156 16.0278L-0.00067553 8.48553L1.88494 6.59991L8.48437 13.1993L21.6837 1.84956e-05L23.5693 1.88564L9.42718 16.0278Z" 
            fill={iconColor}
          />
        </Svg>
  );
};
