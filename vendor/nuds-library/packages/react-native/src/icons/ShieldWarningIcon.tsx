import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const ShieldWarningIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(3.333, 1.459)">
      <Path
        d="M13.333 3.33301V9.58301C13.333 13.0962 11.0569 14.4569 7.22852 16.7461C7.04478 16.856 6.8578 16.9685 6.66699 17.083C6.47608 16.9685 6.28833 16.856 6.10449 16.7461C2.27628 14.457 0 13.0961 0 9.58301V3.33301L6.66699 0L13.333 3.33301ZM1.66699 4.36328V9.58301C1.66699 10.9416 2.08594 11.7663 2.92676 12.5752C3.76616 13.3826 4.96005 14.1163 6.66699 15.1396C8.37392 14.1163 9.56787 13.3826 10.4072 12.5752C11.248 11.7663 11.667 10.9416 11.667 9.58301V4.36328L6.66699 1.86328L1.66699 4.36328ZM7.5 12.5H5.83301V10.833H7.5V12.5ZM7.5 9.16602H5.83301V4.16602H7.5V9.16602Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
