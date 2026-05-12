import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const PrivateBankerFilledIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(1.667, 1.911)">
      <Path
        d="M3.03094 6.81743C3.03094 5.4403 3.44141 4.15936 4.14331 3.08746C1.70785 4.12769 0 6.54362 0 9.35955C0 13.1255 3.05189 16.1773 6.81782 16.1773C9.20519 16.1773 11.3054 14.949 12.523 13.0895C11.7021 13.4398 10.7985 13.6352 9.84852 13.6352C6.08259 13.6352 3.03094 10.5833 3.03094 6.81743Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M16.6667 6.8178C16.6667 3.05188 13.6148 0 9.84883 0C7.46147 0 5.36092 1.22796 4.14331 3.08746C4.96426 2.73723 5.86814 2.54212 6.81814 2.54212C10.5841 2.54212 13.636 5.594 13.636 9.35992C13.636 10.737 13.2252 12.0174 12.523 13.0895C14.9585 12.0493 16.6667 9.63372 16.6667 6.8178Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
