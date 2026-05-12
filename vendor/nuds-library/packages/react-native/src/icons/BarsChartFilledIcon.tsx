import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const BarsChartFilledIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(3.75, 2.917)">
      <Path
        d="M2.5 14.166H0V7.5H2.5V14.166ZM5.83301 14.166H3.33301V0H5.83301V14.166ZM9.16699 14.166H6.66699V4.58301H9.16699V14.166ZM12.5 2.91602V14.166H10V2.91602H12.5Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
