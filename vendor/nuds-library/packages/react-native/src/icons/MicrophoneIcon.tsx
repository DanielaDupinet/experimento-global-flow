import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const MicrophoneIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(3.333, 1.667)">
      <Path
        d="M8.33333 8.33333C8.33333 9.25381 7.58714 10 6.66667 10C5.74619 10 5 9.25381 5 8.33333V3.33333C5 2.41286 5.74619 1.66667 6.66667 1.66667C7.58714 1.66667 8.33333 2.41286 8.33333 3.33333V8.33333ZM6.66667 0C4.82572 0 3.33333 1.49238 3.33333 3.33333V8.33333C3.33333 10.1743 4.82572 11.6667 6.66667 11.6667C8.50762 11.6667 10 10.1743 10 8.33333V3.33333C10 1.49238 8.50762 0 6.66667 0Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M5.83333 14.9484V16.6667H7.5V14.9484C10.7886 14.5383 13.3333 11.733 13.3333 8.33333H11.6667C11.6667 11.0948 9.42809 13.3333 6.66667 13.3333C3.90524 13.3333 1.66667 11.0948 1.66667 8.33333H0C0 11.733 2.54474 14.5383 5.83333 14.9484Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
