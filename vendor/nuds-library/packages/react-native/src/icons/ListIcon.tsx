import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const ListIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(2.5, 5.833)">
      <Path
        d="M1.66667 0H0V1.66667H1.66667V0Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M1.66667 3.33333H0V5H1.66667V3.33333Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M0 6.66667H1.66667V8.33333H0V6.66667Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M15 3.33333H3.33333V5H15V3.33333Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M3.33333 0H15V1.66667H3.33333V0Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M15 6.66667H3.33333V8.33333H15V6.66667Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
