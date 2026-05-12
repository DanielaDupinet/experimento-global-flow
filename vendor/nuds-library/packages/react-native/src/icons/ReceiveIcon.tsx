import React from "react";
import Svg, { Path } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const ReceiveIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const iconColor = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
          <Path 
            d="M3.33334 9.9999L4.50834 8.8249L9.16668 13.4749L9.16668 3.33324L10.8333 3.33324L10.8333 13.4749L15.4917 8.8249L16.6667 9.9999L10.5893 16.0773C10.2638 16.4028 9.73619 16.4028 9.41075 16.0773L3.33334 9.9999Z" 
            fill={iconColor}
          />
        </Svg>
  );
};
