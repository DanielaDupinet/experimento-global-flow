import React from "react";
import Svg, { Path } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const UnfreezeIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const iconColor = color ?? theme.color.content.default;

  const width = size;
  const height = size * (21 / 16);

  return (
    <Svg width={width} height={height} viewBox="0 0 16 21" fill="none">
          <Path
            d="M8 0C7.54828 0.508189 7.09655 1.00467 6.65059 1.49196C6.50373 1.65243 6.3575 1.8119 6.2121 1.97047C2.88919 5.59422 0 8.74499 0 12.5C0 16.9183 3.58172 20.5 8 20.5C12.4183 20.5 16 16.9183 16 12.5C16 8.74499 13.1108 5.59422 9.7879 1.97047C9.6425 1.8119 9.49627 1.65243 9.34941 1.49196C8.90345 1.00467 8.45172 0.508189 8 0ZM8 2.98102C8.13238 3.12558 8.26344 3.26847 8.39312 3.40986C9.72396 4.86084 10.9102 6.15412 11.8971 7.47673C13.294 9.34882 14 10.9237 14 12.5C14 15.8137 11.3137 18.5 8 18.5C4.68629 18.5 2 15.8137 2 12.5C2 10.9237 2.706 9.34882 4.10293 7.47673C5.08984 6.15412 6.27604 4.86085 7.60688 3.40986C7.73656 3.26847 7.86762 3.12558 8 2.98102Z"
            fill={iconColor}
          />
        </Svg>
  );
};
