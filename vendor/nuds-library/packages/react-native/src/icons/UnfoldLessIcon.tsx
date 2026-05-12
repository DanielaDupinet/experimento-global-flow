import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const UnfoldLessIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(5.661, 3.161)">
      <Path
        d="M7.5 0L4.33926 3.16074L1.17851 0L0 1.17851L3.75 4.92851C4.07544 5.25395 4.60307 5.25395 4.92851 4.92851L8.67851 1.17851L7.5 0Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M1.17851 13.6785L4.33926 10.5178L7.5 13.6785L8.67851 12.5L4.92851 8.75C4.60307 8.42456 4.07544 8.42456 3.75 8.75L0 12.5L1.17851 13.6785Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
