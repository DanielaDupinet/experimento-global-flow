import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const UnfoldMoreIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(5.661, 2.917)">
      <Path
        d="M7.5 5.17259L4.33926 2.01184L1.17851 5.17259L0 3.99408L3.75 0.244078C4.07544 -0.0813593 4.60307 -0.0813593 4.92851 0.244078L8.67851 3.99408L7.5 5.17259Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M1.17851 8.99408L4.33926 12.1548L7.5 8.99408L8.67851 10.1726L4.92851 13.9226C4.60307 14.248 4.07544 14.248 3.75 13.9226L0 10.1726L1.17851 8.99408Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
