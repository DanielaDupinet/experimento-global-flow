import React from "react";
import Svg, { Path } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const UnrealizedProfitLossIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const iconColor = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
          <Path 
            d="M17.5002 11.6666V5.83329L2.50016 5.83329L2.50016 14.1666L10.8335 14.1666V15.8333H0.833496V4.16663H19.1668L19.1668 11.6666H17.5002Z" 
            fill={iconColor}
          />
          <Path 
            d="M12.5002 10.0003C12.5002 11.381 11.3809 12.5003 10.0002 12.5003C8.61945 12.5003 7.50016 11.381 7.50016 10.0003C7.50016 8.61955 8.61945 7.50026 10.0002 7.50026C11.3809 7.50026 12.5002 8.61955 12.5002 10.0003ZM10.0229 10.8333H10.8333V10.0189L10.8335 10.0003L10.8333 9.98167V9.16663H9.16663V10.8333H9.97739C9.98496 10.8335 9.99255 10.8336 10.0002 10.8336C10.0078 10.8336 10.0154 10.8335 10.0229 10.8333Z" 
            fill={iconColor}
          />
          <Path 
            d="M15.0003 15.1451V19.1666H16.667V15.1451L19.1668 17.2878V15.0927L16.376 12.7006C16.2217 12.5683 16.0312 12.5014 15.8402 12.5H15.8271C15.6362 12.5014 15.4456 12.5683 15.2913 12.7006L12.5002 15.093V17.2881L15.0003 15.1451Z" 
            fill={iconColor}
          />
        </Svg>
  );
};
