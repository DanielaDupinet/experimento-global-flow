import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const ShoppingCartIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(1.667, 2.083)">
      <Path
        d="M0.833333 0H0V1.66667H0.833333C1.29357 1.66667 1.66667 2.03976 1.66667 2.5L2.83569 8.92962C3.12386 10.5146 4.5043 11.6667 6.11525 11.6667H12.2181C13.829 11.6667 15.2095 10.5146 15.4976 8.92961L16.6667 2.5H3.33333C3.33333 1.11929 2.21405 0 0.833333 0ZM4.47547 8.63148L3.66369 4.16667H14.6696L13.8579 8.63147C13.7138 9.42396 13.0236 10 12.2181 10H6.11525C5.30978 10 4.61956 9.42396 4.47547 8.63148Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M5 15.8333C5.92047 15.8333 6.66667 15.0871 6.66667 14.1667C6.66667 13.2462 5.92047 12.5 5 12.5C4.07953 12.5 3.33333 13.2462 3.33333 14.1667C3.33333 15.0871 4.07953 15.8333 5 15.8333Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M15 14.1667C15 15.0871 14.2538 15.8333 13.3333 15.8333C12.4129 15.8333 11.6667 15.0871 11.6667 14.1667C11.6667 13.2462 12.4129 12.5 13.3333 12.5C14.2538 12.5 15 13.2462 15 14.1667Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
