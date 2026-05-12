import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const CameraIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(1.667, 2.5)">
      <Path
        d="M11.6667 8.33333C11.6667 10.1743 10.1743 11.6667 8.33333 11.6667C6.49238 11.6667 5 10.1743 5 8.33333C5 6.49238 6.49238 5 8.33333 5C10.1743 5 11.6667 6.49238 11.6667 8.33333ZM10 8.33333C10 7.41286 9.25381 6.66667 8.33333 6.66667C7.41286 6.66667 6.66667 7.41286 6.66667 8.33333C6.66667 9.25381 7.41286 10 8.33333 10C9.25381 10 10 9.25381 10 8.33333Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M2.5 0H4.16667V1.66667H16.6667V15H0V1.66667H2.5V0ZM15 3.33333H1.66667V13.3333H15V3.33333Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
