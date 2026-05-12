import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const CarShieldIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(1.666, 1.25)">
      <Path
        d="M8.33398 4.16699V5.83301H5.39355C4.76238 5.83312 4.1856 6.19033 3.90332 6.75488L2.69727 9.16699H15.834V17.5H14.167V15.833H2.5V17.5H0.833984V9.16699H0V7.5H1.66699L2.41211 6.00977C2.9767 4.88057 4.1311 4.1671 5.39355 4.16699H8.33398ZM2.5 10.833V14.167H14.167V10.833H2.5ZM5.83398 13.333H3.33398V11.667H5.83398V13.333ZM13.334 11.667V13.333H10.834V11.667H13.334ZM16.667 1.66699V3.75C16.667 5.50655 15.5293 6.18749 13.6152 7.33203C13.5234 7.38696 13.4294 7.44276 13.334 7.5C13.2386 7.44277 13.1446 7.38696 13.0527 7.33203C11.1386 6.18743 10 5.5066 10 3.75V1.66699L13.334 0L16.667 1.66699ZM11.667 2.69629V3.75C11.667 4.18803 11.7732 4.38785 12.041 4.64551C12.3262 4.91982 12.7214 5.18139 13.334 5.55469C13.9463 5.18152 14.3409 4.91974 14.626 4.64551C14.8939 4.38779 15 4.1881 15 3.75V2.69629L13.334 1.86328L11.667 2.69629Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
