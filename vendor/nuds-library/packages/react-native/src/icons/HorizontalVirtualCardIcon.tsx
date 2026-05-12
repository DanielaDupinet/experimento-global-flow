import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const HorizontalVirtualCardIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(1.667, 3.333)">
      <Path
        d="M5.83301 11.667V13.334H4.16602V11.667H5.83301ZM13.333 0C15.174 6.28161e-07 16.666 1.49304 16.666 3.33398V10C16.666 11.8409 15.174 13.334 13.333 13.334H7.5V11.667H13.333C14.2535 11.667 15 10.9205 15 10V3.33398C15 2.41351 14.2535 1.66699 13.333 1.66699H7.5V0H13.333ZM1.88965 10.834C2.036 11.0868 2.24711 11.298 2.5 11.4443V13.2285C1.32875 12.9271 0.406043 12.0052 0.104492 10.834H1.88965ZM1.66602 9.16699H0V7.5H1.66602V9.16699ZM12.5 8.33398H10V6.66699H12.5V8.33398ZM1.66602 5.83398H0V4.16699H1.66602V5.83398ZM2.5 1.88965C2.24711 2.03594 2.036 2.24715 1.88965 2.5H0.104492C0.406041 1.32878 1.32874 0.406929 2.5 0.105469V1.88965ZM5.83301 1.66699H4.16602V0H5.83301V1.66699Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
