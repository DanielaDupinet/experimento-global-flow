import React from "react";
import Svg, { Path } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const SupportIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const iconColor = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
          <Path 
            d="M4.69756 8.48393C4.69756 7.1068 5.10804 5.82586 5.80994 4.75397C3.37447 5.7942 1.66663 8.21013 1.66663 11.0261C1.66663 14.792 4.71851 17.8439 8.48445 17.8439C10.8718 17.8439 12.972 16.6155 14.1897 14.756C13.3687 15.1063 12.4651 15.3017 11.5151 15.3017C7.74921 15.3017 4.69756 12.2499 4.69756 8.48393Z" 
            fill={iconColor}
          />
          <Path 
            d="M18.3333 8.4843C18.3333 4.71838 15.2814 1.6665 11.5155 1.6665C9.12809 1.6665 7.02755 2.89446 5.80994 4.75397C6.63088 4.40373 7.53477 4.20862 8.48476 4.20862C12.2507 4.20862 15.3026 7.2605 15.3026 11.0264C15.3026 12.4036 14.8918 13.6839 14.1897 14.756C16.6251 13.7158 18.3333 11.3002 18.3333 8.4843Z" 
            fill={iconColor}
          />
        </Svg>
  );
};
