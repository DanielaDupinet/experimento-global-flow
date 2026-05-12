import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const ContactsIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(2.5, 2.5)">
      <Path
        d="M0 0H6.66667V6.66667H0V0ZM1.66667 1.66667V5H5V1.66667H1.66667Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M8.33333 0V6.66667H15V0H8.33333ZM10 1.66667H13.3333V5H10V1.66667Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M10 10V13.3333H13.3333V10H10Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M0 8.33333H6.66667V15H0V8.33333ZM1.66667 10V13.3333H5V10H1.66667Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
