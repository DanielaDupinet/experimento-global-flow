import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const DivideIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(1.667, 1.667)">
      <Path
        d="M12.5 6.66667V4.16667H10V2.5H12.5V0H14.1667V2.5H16.6667V4.16667H14.1667V6.66667H12.5Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M0 1.66667V16.6667H15V8.33333H13.3333V15H1.66667V3.33333H8.33333V1.66667H0Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M11.6667 13.3332H3.33354L6.85991 9.10152C7.19307 8.70173 7.80711 8.70173 8.14028 9.10152L11.6667 13.3332Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M3.33333 6.25C3.33333 5.55964 3.89298 5 4.58333 5C5.27369 5 5.83333 5.55964 5.83333 6.25C5.83333 6.94036 5.27369 7.5 4.58333 7.5C3.89298 7.5 3.33333 6.94036 3.33333 6.25Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
