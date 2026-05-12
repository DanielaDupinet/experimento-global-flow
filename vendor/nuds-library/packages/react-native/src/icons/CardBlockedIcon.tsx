import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const CardBlockedIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(3.333, 1.667)">
      <Path
        d="M1.66667 3.33333L1.66667 13.3333C1.66667 14.2538 2.41286 15 3.33333 15H5V16.6667H3.33333C1.49238 16.6667 0 15.1743 0 13.3333V3.33333C0 1.49238 1.49238 0 3.33333 0H10C11.8409 0 13.3333 1.49238 13.3333 3.33333V7.5H11.6667V3.33333C11.6667 2.41286 10.9205 1.66667 10 1.66667L3.33333 1.66667C2.41286 1.66667 1.66667 2.41286 1.66667 3.33333Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M6.66667 6.66667V4.16667H8.33333V6.66667H6.66667Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M6.66667 11.6667H7.5V10.8333C7.5 9.45262 8.61929 8.33333 10 8.33333C11.3807 8.33333 12.5 9.45262 12.5 10.8333V11.6667H13.3333V15C13.3333 15.9205 12.5871 16.6667 11.6667 16.6667H8.33333C7.41286 16.6667 6.66667 15.9205 6.66667 15V11.6667ZM9.16667 10.8333V11.6667H10.8333V10.8333C10.8333 10.3731 10.4602 10 10 10C9.53976 10 9.16667 10.3731 9.16667 10.8333ZM11.6667 15V13.3333H8.33333V15H11.6667Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
