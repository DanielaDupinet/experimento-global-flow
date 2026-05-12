import React from "react";
import Svg, { Path } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const TotalInvestedIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const iconColor = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
          <Path 
            d="M13.3335 8.33337C13.3335 9.25385 12.5873 10 11.6668 10C10.7464 10 10.0002 9.25385 10.0002 8.33337C10.0002 7.4129 10.7464 6.66671 11.6668 6.66671C12.5873 6.66671 13.3335 7.4129 13.3335 8.33337Z" 
            fill={iconColor}
          />
          <Path 
            d="M19.1668 3.33337H4.16683L4.16683 13.3334L19.1668 13.3334V3.33337ZM17.5002 11.6667L5.8335 11.6667L5.8335 5.00004L17.5002 5.00004V11.6667Z" 
            fill={iconColor}
          />
          <Path 
            d="M0.833496 5.83337V16.6667H16.6668V15H2.50016V5.83337H0.833496Z" 
            fill={iconColor}
          />
        </Svg>
  );
};
