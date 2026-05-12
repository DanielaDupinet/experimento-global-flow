import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const FlagIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(2.917, 2.5)">
      <Path
        d="M5.48828 0C6.24275 3.33888e-05 6.96647 0.299565 7.5 0.833008C8.03354 1.36655 8.75718 1.66696 9.51172 1.66699H14.167V10.833H9.51172C8.85167 10.833 8.21517 10.6041 7.70898 10.1895L7.29102 9.81055C6.78482 9.39595 6.14833 9.16702 5.48828 9.16699H1.66699V15H0V0H5.48828ZM1.66699 1.66699V7.5H5.48828C6.68485 7.50003 7.83261 7.97518 8.67871 8.82129C8.8997 9.04227 9.1992 9.16696 9.51172 9.16699H12.5V3.33301H9.51172C8.31515 3.33297 7.16739 2.85782 6.32129 2.01172C6.10032 1.79084 5.80072 1.66703 5.48828 1.66699H1.66699Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
