import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const MoneyInIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(0.833, 2.396)">
      <Path
        d="M16.6667 7.5V1.66667L1.66667 1.66667L1.66667 10L10 10V11.6667H0V0H18.3333L18.3333 7.5H16.6667Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M11.6667 5.83364C11.6667 7.21435 10.5474 8.33364 9.16667 8.33364C7.78595 8.33364 6.66667 7.21435 6.66667 5.83364C6.66667 4.45293 7.78595 3.33364 9.16667 3.33364C10.5474 3.33364 11.6667 4.45293 11.6667 5.83364ZM9.18944 6.66667H9.9998V5.85224L10 5.83364L9.9998 5.81504V5H8.33313V6.66667H9.14389C9.15146 6.66687 9.15905 6.66697 9.16667 6.66697C9.17428 6.66697 9.18187 6.66687 9.18944 6.66667Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M18.3333 12.6157V10.4205L15.8334 12.5634V8.33333H14.1667L14.1667 12.5634L11.6667 10.4205V12.6156L14.4577 15.0079C14.7698 15.2754 15.2303 15.2754 15.5424 15.0079L18.3333 12.6157Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
