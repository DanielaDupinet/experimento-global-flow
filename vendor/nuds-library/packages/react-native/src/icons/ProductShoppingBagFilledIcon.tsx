import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const ProductShoppingBagFilledIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(2.339, 1.334)">
      <Path
        d="M2.27584 5.33203C3.15559 7.43 5.23504 8.94336 7.6606 8.94336C10.0862 8.94336 12.1656 7.43 13.0454 5.33203H14.7749L15.3139 13.4209C15.455 15.5371 13.7765 17.3318 11.6557 17.332H3.66646C1.54558 17.332 -0.132557 15.538 0.00825744 13.4219L0.54732 5.33203H2.27584ZM7.6606 0C9.69324 0 11.3276 1.67467 11.3276 3.66699V5.33301H8.99459V3.66699C8.99459 2.9481 8.38939 2.33301 7.6606 2.33301C6.93192 2.33314 6.32759 2.94818 6.32759 3.66699V5.33301H3.99459V3.66699C3.99459 1.67475 5.62808 0.000133984 7.6606 0Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
