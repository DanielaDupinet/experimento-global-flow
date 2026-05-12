import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const ChatIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(1.667, 2.083)">
      <Path
        d="M5.83333 5.83333H4.16667V7.5H5.83333V5.83333Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M9.16667 5.83333H7.5V7.5H9.16667V5.83333Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M10.8333 5.83333H12.5V7.5H10.8333V5.83333Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M11.6667 13.3333L16.6667 15.8333V3.33333C16.6667 1.49238 15.1743 0 13.3333 0H3.33333C1.49238 0 0 1.49238 0 3.33333V10C0 11.8409 1.49238 13.3333 3.33333 13.3333H11.6667ZM15 13.1366L12.0601 11.6667H3.33333C2.41286 11.6667 1.66667 10.9205 1.66667 10V3.33333C1.66667 2.41286 2.41286 1.66667 3.33333 1.66667H13.3333C14.2538 1.66667 15 2.41286 15 3.33333V13.1366Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
