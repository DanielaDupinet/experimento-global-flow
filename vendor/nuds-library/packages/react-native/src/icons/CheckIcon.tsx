import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const CheckIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(3.333, 0.833)">
      <Path
        d="M1.66667 0H11.6667V1.66667H1.66667V0Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M8.33333 9.16667C8.33333 10.0871 7.58714 10.8333 6.66667 10.8333C5.74619 10.8333 5 10.0871 5 9.16667C5 8.24619 5.74619 7.5 6.66667 7.5C7.58714 7.5 8.33333 8.24619 8.33333 9.16667Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M3.33333 14.1667C3.33333 12.786 4.45262 11.6667 5.83333 11.6667H7.5C8.88071 11.6667 10 12.786 10 14.1667H3.33333Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M0 3.33333V18.3333H13.3333V3.33333H0ZM1.66667 16.6667V5H11.6667V16.6667H1.66667Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
