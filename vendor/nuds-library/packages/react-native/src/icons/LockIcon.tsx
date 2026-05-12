import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const LockIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(3.333, 1.667)">
      <Path
        d="M5.83333 12.5L5.83333 10.8333H7.5V12.5H5.83333Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M10.8333 6.66667H13.3333V13.3333C13.3333 15.1743 11.8409 16.6667 10 16.6667H3.33333C1.49238 16.6667 0 15.1743 0 13.3333V6.66667H2.5V4.16667C2.5 1.90439 4.36006 0 6.66667 0C8.97327 0 10.8333 1.90439 10.8333 4.16667V6.66667ZM4.16667 4.16667V6.66667H9.16667V4.16667C9.16667 2.81399 8.04196 1.66667 6.66667 1.66667C5.29138 1.66667 4.16667 2.81399 4.16667 4.16667ZM10 15C10.9205 15 11.6667 14.2538 11.6667 13.3333V8.33333H1.66667V13.3333C1.66667 14.2538 2.41286 15 3.33333 15H10Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
