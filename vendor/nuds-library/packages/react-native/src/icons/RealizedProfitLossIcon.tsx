import React from "react";
import Svg, { Path } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const RealizedProfitLossIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const iconColor = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
          <Path 
            d="M5.83301 16.667H4.16699V10.833H5.83301V16.667ZM9.16699 16.667H7.5V3.33301H9.16699V16.667ZM12.5 16.667H10.833V8.33301H12.5V16.667ZM15.833 16.667H14.167V6.66699H15.833V16.667Z" 
            fill={iconColor}
          />
        </Svg>
  );
};
