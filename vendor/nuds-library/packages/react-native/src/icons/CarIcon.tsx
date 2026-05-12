import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const CarIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(1.666, 3.333)">
      <Path
        d="M11.2734 0C12.5359 0 13.6902 0.713613 14.2549 1.84277L15 3.33398H16.667V5H15.834V13.334H14.167V11.667H2.5V13.334H0.833984V5H0V3.33398H1.66699L2.41211 1.84277C2.97671 0.713588 4.1311 0.000112509 5.39355 0H11.2734ZM2.5 6.66699V10H14.167V6.66699H2.5ZM5.83398 9.16699H3.33398V7.5H5.83398V9.16699ZM13.334 9.16699H10.834V7.5H13.334V9.16699ZM5.39355 1.66699C4.76253 1.6671 4.18567 2.02357 3.90332 2.58789L2.69727 5H13.9707L12.7646 2.58789C12.4823 2.02337 11.9046 1.66699 11.2734 1.66699H5.39355Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
