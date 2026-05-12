import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const SmartphoneLockIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(2.917, 0.833)">
      <Path
        d="M3.33333 0H5.83333V1.66667H3.33333C2.41286 1.66667 1.66667 2.41286 1.66667 3.33333V15C1.66667 15.9205 2.41286 16.6667 3.33333 16.6667H8.33333C9.25381 16.6667 10 15.9205 10 15V10H11.6667V15C11.6667 16.8409 10.1743 18.3333 8.33333 18.3333H3.33333C1.49238 18.3333 0 16.8409 0 15V3.33333C0 1.49238 1.49238 0 3.33333 0Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M7.5 15V13.3333H4.16667V15H7.5Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M8.33333 3.33333H7.5V6.66667C7.5 7.58714 8.24619 8.33333 9.16667 8.33333H12.5C13.4205 8.33333 14.1667 7.58714 14.1667 6.66667V3.33333H13.3333V2.5C13.3333 1.11929 12.214 0 10.8333 0C9.45262 0 8.33333 1.11929 8.33333 2.5V3.33333ZM12.5 6.66667H9.16667V5H12.5V6.66667ZM10 3.33333V2.5C10 2.03976 10.3731 1.66667 10.8333 1.66667C11.2936 1.66667 11.6667 2.03976 11.6667 2.5V3.33333H10Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
