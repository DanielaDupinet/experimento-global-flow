import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const HorizontalCardTransferLimitsIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(0.833, 3.333)">
      <Path
        d="M15 0C16.8409 0 18.334 1.49304 18.334 3.33398V10C18.334 11.8409 16.8409 13.334 15 13.334H5C3.15918 13.3338 1.66699 11.8409 1.66699 10V9.16699H3.33398V10C3.33398 10.9204 4.07965 11.6668 5 11.667H15C15.9205 11.667 16.667 10.9205 16.667 10V3.33398C16.667 2.41351 15.9205 1.66699 15 1.66699H8.33398V0H15ZM14.167 8.33398H11.667V6.66699H14.167V8.33398ZM2.79102 0.209961C3.10309 -0.057532 3.58511 -0.080909 3.87598 0.209961C4.16283 0.496943 4.17074 1.03632 4.1709 1.05078L4.16699 2.6543V7.71777H2.5V2.6543L0 4.79688V2.60254L2.79102 0.209961ZM6.6709 5.06348L9.1709 2.9209V5.11621L6.37988 7.50879C6.06787 7.77617 5.58579 7.79946 5.29492 7.50879C5.00405 7.21792 5 6.66699 5 6.66699L5.00391 5.06348V0H6.6709V5.06348Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
