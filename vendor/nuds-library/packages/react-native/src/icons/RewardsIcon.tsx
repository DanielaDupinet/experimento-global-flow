import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const RewardsIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(1.667, 1.667)">
      <Path
        d="M8.33334 0.875426C7.80395 0.335196 7.06612 0 6.25 0C4.63917 0 3.33333 1.30584 3.33333 2.91667C3.33333 3.364 3.43404 3.78781 3.61401 4.16667H0V9.16667H0.833333V16.6667H15.8333V9.16667H16.6667V4.16667H13.0527C13.2326 3.78781 13.3333 3.364 13.3333 2.91667C13.3333 1.30584 12.0275 0 10.4167 0C9.60055 0 8.86272 0.335196 8.33334 0.875426ZM6.25 4.16667C5.55964 4.16667 5 3.60702 5 2.91667C5 2.22631 5.55964 1.66667 6.25 1.66667C6.94036 1.66667 7.5 2.22631 7.5 2.91667C7.5 3.60702 6.94036 4.16667 6.25 4.16667ZM9.16667 2.91667C9.16667 2.22631 9.72631 1.66667 10.4167 1.66667C11.107 1.66667 11.6667 2.22631 11.6667 2.91667C11.6667 3.60702 11.107 4.16667 10.4167 4.16667C9.72631 4.16667 9.16667 3.60702 9.16667 2.91667ZM1.66667 5.83333H15V7.5H1.66667V5.83333ZM14.1667 15H9.16667V9.16667H14.1667V15ZM7.5 15H2.5V9.16667H7.5V15Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
