import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const SmartphoneIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(4.167, 0.833)">
      <Path
        d="M7.5 13.3333H4.16667V15H7.5V13.3333Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M0 3.33333V15C0 16.8409 1.49238 18.3333 3.33333 18.3333H8.33333C10.1743 18.3333 11.6667 16.8409 11.6667 15V3.33333C11.6667 1.49238 10.1743 0 8.33333 0H3.33333C1.49238 0 0 1.49238 0 3.33333ZM3.33333 1.66667H8.33333C9.25381 1.66667 10 2.41286 10 3.33333V15C10 15.9205 9.25381 16.6667 8.33333 16.6667H3.33333C2.41286 16.6667 1.66667 15.9205 1.66667 15V3.33333C1.66667 2.41286 2.41286 1.66667 3.33333 1.66667Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
