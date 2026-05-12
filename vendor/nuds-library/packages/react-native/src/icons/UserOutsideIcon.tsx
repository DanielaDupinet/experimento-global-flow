import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const UserOutsideIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(1.25, 2.083)">
      <Path
        d="M5 10.833C7.76142 10.833 10 13.0716 10 15.833H8.33301C8.33301 13.9921 6.84095 12.5 5 12.5C3.15909 12.5 1.66699 13.9921 1.66699 15.833H0C0 13.0716 2.23861 10.8331 5 10.833ZM17.5 4.47363V14.166H11.667V12.5H15.833V5.3623L10.833 2.00684L7.82812 4.02344C7.3735 3.60298 6.82521 3.28203 6.21777 3.09668L10.833 0L17.5 4.47363ZM5 4.16602C6.61083 4.16602 7.91699 5.47218 7.91699 7.08301C7.91699 8.69384 6.61083 10 5 10C3.38921 9.99996 2.08301 8.69381 2.08301 7.08301C2.08301 5.4722 3.38921 4.16606 5 4.16602ZM5 5.83301C4.30968 5.83305 3.75 6.39268 3.75 7.08301C3.75 7.77334 4.30968 8.33296 5 8.33301C5.69036 8.33301 6.25 7.77336 6.25 7.08301C6.25 6.39265 5.69036 5.83301 5 5.83301Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
