import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const BarCodeSearchIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(1.064, 2.682)">
      <Path
        d="M12.5518 5.83301C14.421 5.83301 15.9363 7.34857 15.9365 9.21777C15.9365 9.88566 15.7431 10.5086 15.4092 11.0332L17.8711 13.4473L16.7041 14.6367L14.1963 12.1777C13.7095 12.4487 13.1484 12.6025 12.5518 12.6025C10.6825 12.6024 9.16699 11.0871 9.16699 9.21777C9.16718 7.34863 10.6826 5.83311 12.5518 5.83301ZM12.5518 7.5C11.6031 7.5001 10.8342 8.2691 10.834 9.21777C10.834 10.1666 11.603 10.9364 12.5518 10.9365C13.5006 10.9365 14.2705 10.1667 14.2705 9.21777C14.2703 8.26904 13.5005 7.5 12.5518 7.5ZM1.66699 8.33301H0V0H1.66699V8.33301ZM6.66699 8.33301H3.33398V0H6.66699V8.33301ZM10 4.83594C9.33139 5.22282 8.76054 5.75996 8.33398 6.40137V0H10V4.83594ZM15 4.83594C14.2646 4.41059 13.4106 4.16699 12.5 4.16699C12.2162 4.16702 11.9378 4.18991 11.667 4.23535V0H15V4.83594Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
