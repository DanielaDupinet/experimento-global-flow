import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const MoneyAddIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(0.833, 2.917)">
      <Path
        d="M15.834 10H18.334V11.666H15.834V14.166H14.167V11.666H11.667V10H14.167V7.5H15.834V10ZM18.334 7.5H16.667V1.66602H1.66699V10H10V11.666H0V0H18.334V7.5ZM9.16699 3.33301C10.5476 3.33301 11.6668 4.45244 11.667 5.83301C11.667 7.21372 10.5477 8.33301 9.16699 8.33301C7.78628 8.33301 6.66699 7.21372 6.66699 5.83301C6.66716 4.45244 7.78638 3.33301 9.16699 3.33301ZM8.33301 6.66602H9.14453C9.152 6.66621 9.15948 6.66699 9.16699 6.66699C9.17451 6.66699 9.18199 6.66621 9.18945 6.66602H10V5H8.33301V6.66602Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
