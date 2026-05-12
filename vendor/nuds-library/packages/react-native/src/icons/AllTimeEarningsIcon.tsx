import React from "react";
import Svg, { Path } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const AllTimeEarningsIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const iconColor = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
          <Path 
            d="M16.667 14.167H19.167V15.833H16.667V18.333H15V15.833H12.5V14.167H15V11.667H16.667V14.167ZM19.167 11.667H17.5V5.83301H2.5V14.167H10.833V15.833H0.833008V4.16699H19.167V11.667ZM10 7.5C11.3806 7.5 12.4998 8.61943 12.5 10C12.5 11.3807 11.3807 12.5 10 12.5C8.61929 12.5 7.5 11.3807 7.5 10C7.50017 8.61943 8.61939 7.5 10 7.5ZM9.16602 10.833H9.97754C9.98501 10.8332 9.99249 10.834 10 10.834C10.0075 10.834 10.015 10.8332 10.0225 10.833H10.833V9.16699H9.16602V10.833Z" 
            fill={iconColor}
          />
        </Svg>
  );
};
