import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const HourglassIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(3.333, 1.667)">
      <Path
        d="M11.6667 1.66667V4.04939C11.6667 5.1639 11.1097 6.20467 10.1823 6.82289L7.91667 8.33333L10.1823 9.84378C11.1097 10.462 11.6667 11.5028 11.6667 12.6173V15H13.3333V16.6667H0V15H1.66667V12.6173C1.66667 11.5028 2.22367 10.462 3.151 9.84378L5.41667 8.33333L3.151 6.82289C2.22367 6.20467 1.66667 5.1639 1.66667 4.04939V1.66667H0V0H13.3333V1.66667H11.6667ZM3.33333 4.04939C3.33333 4.60664 3.61183 5.12703 4.0755 5.43614L6.66667 7.16358L9.25783 5.43614C9.7215 5.12703 10 4.60664 10 4.04939V1.66667H3.33333V4.04939ZM10 12.6173C10 12.06 9.7215 11.5396 9.25783 11.2305L6.66667 9.50308L4.0755 11.2305C3.61183 11.5396 3.33333 12.06 3.33333 12.6173V15H10V12.6173Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
