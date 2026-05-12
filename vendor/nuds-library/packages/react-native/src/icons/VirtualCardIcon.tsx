import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const VirtualCardIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(3.333, 1.667)">
      <Path
        d="M3.33333 0L10 2.91409e-07C11.8409 3.7188e-07 13.3333 1.49238 13.3333 3.33333V9.16667L11.6667 9.16667L11.6667 3.33333C11.6667 2.41286 10.9205 1.66667 10 1.66667L3.33333 1.66667C2.41286 1.66667 1.66667 2.41286 1.66667 3.33333L1.66667 9.16667H1.45705e-07L4.00688e-07 3.33333C4.81158e-07 1.49238 1.49238 -8.04704e-08 3.33333 0Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M10.8333 16.5617V14.777C11.0864 14.6307 11.2973 14.4197 11.4437 14.1667H13.2283C12.9268 15.338 12.0047 16.2602 10.8333 16.5617Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M1.88964 14.1667C2.036 14.4197 2.24698 14.6307 2.5 14.777V16.5617C1.32866 16.2602 0.406496 15.338 0.105015 14.1667H1.88964Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M13.3333 12.5V10.8333L11.6667 10.8333V12.5L13.3333 12.5Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M9.16667 16.6667V15H7.5V16.6667H9.16667Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M8.33333 6.66667V4.16667L6.66667 4.16667V6.66667H8.33333Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M5.83333 15V16.6667H4.16667V15H5.83333Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M1.66667 10.8333V12.5H0L7.28528e-08 10.8333H1.66667Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
