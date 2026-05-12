import React from "react";
import Svg, { Path } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const LogoutIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const iconColor = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
          <Path 
            d="M11.7953 14.1667C15.017 14.1667 17.6287 11.555 17.6287 8.33333C17.6287 5.11167 15.017 2.5 11.7953 2.5V4.16667C14.0965 4.16667 15.962 6.03215 15.962 8.33333C15.962 10.6345 14.0965 12.5 11.7953 12.5H5.47384L8.63458 9.33926L7.45607 8.16074L2.87274 12.7441C2.5473 13.0695 2.5473 13.5972 2.87274 13.9226L7.45607 18.5059L8.63458 17.3274L5.47384 14.1667H11.7953Z" 
            fill={iconColor}
          />
        </Svg>
  );
};
