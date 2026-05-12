import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const LocationIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(3.333, 1.458)">
      <Path
        d="M5 5H8.33333V8.33333H5V5Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M8.15658 15.4413C8.03541 15.5734 7.91356 15.7063 7.79117 15.84C7.41954 16.2461 7.0431 16.6598 6.66667 17.0833C6.29023 16.6598 5.91379 16.2461 5.54216 15.84C5.41978 15.7063 5.29792 15.5734 5.17675 15.4413C2.40766 12.4215 0 9.79584 0 6.66667C0 2.98477 2.98477 0 6.66667 0C10.3486 0 13.3333 2.98477 13.3333 6.66667C13.3333 9.79584 10.9257 12.4215 8.15658 15.4413ZM11.6667 6.66667C11.6667 3.90524 9.42809 1.66667 6.66667 1.66667C3.90524 1.66667 1.66667 3.90524 1.66667 6.66667C1.66667 7.98024 2.255 9.29265 3.41911 10.8527C4.24154 11.9549 5.23003 13.0326 6.33907 14.2418C6.44714 14.3596 6.55635 14.4787 6.66667 14.5991C6.77698 14.4787 6.88619 14.3596 6.99426 14.2418C8.1033 13.0326 9.09179 11.9549 9.91423 10.8527C11.0783 9.29265 11.6667 7.98024 11.6667 6.66667Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
