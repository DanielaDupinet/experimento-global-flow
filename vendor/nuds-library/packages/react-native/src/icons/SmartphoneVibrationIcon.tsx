import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const SmartphoneVibrationIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(-0.012, 2.5)">
      <Path
        d="M11.6667 10.8333H8.33333V12.5H11.6667V10.8333Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M8.33333 0C6.49238 0 5 1.49238 5 3.33333V11.6667C5 13.5076 6.49238 15 8.33333 15H11.6667C13.5076 15 15 13.5076 15 11.6667V3.33333C15 1.49238 13.5076 0 11.6667 0H8.33333ZM11.6667 1.66667H8.33333C7.41286 1.66667 6.66667 2.41286 6.66667 3.33333V11.6667C6.66667 12.5871 7.41286 13.3333 8.33333 13.3333H11.6667C12.5871 13.3333 13.3333 12.5871 13.3333 11.6667V3.33333C13.3333 2.41286 12.5871 1.66667 11.6667 1.66667Z"
        fill={fill}
        fillOpacity={opacity} fillRule="evenodd" clipRule="evenodd"
      />
      <Path
        d="M2.5 11.6667L2.5 3.33333H4.16667L4.16667 11.6667H2.5Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M15.8333 3.33333V11.6667H17.5V3.33333H15.8333Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M18.3584 5V10H20.025V5H18.3584Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M0 5V10H1.66667V5H0Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
