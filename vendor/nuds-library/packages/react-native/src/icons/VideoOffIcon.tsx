import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const VideoOffIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(0.488, 1.667)">
      <Path
        d="M19.0237 16.6667H16.6667L13.767 13.767C13.1558 14.5193 12.2233 15 11.1785 15H4.51185C2.6709 15 1.17851 13.5076 1.17851 11.6667V5C1.17851 3.9552 1.6592 3.02266 2.4115 2.4115L0 0H2.35702L19.0237 16.6667ZM3.60282 3.60282C3.14669 3.9002 2.84518 4.41489 2.84518 5V11.6667C2.84518 12.5871 3.59137 13.3333 4.51185 13.3333H11.1785C11.7636 13.3333 12.2783 13.0318 12.5757 12.5757L3.60282 3.60282Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M18.6785 13.3333L16.8479 12.235L12.8452 8.23223V5C12.8452 4.07953 12.099 3.33333 11.1785 3.33333H7.94628L6.27961 1.66667H11.1785C12.6653 1.66667 13.9247 2.64002 14.3543 3.98424C14.4566 4.30449 14.5118 4.64579 14.5118 5V5.83333L18.6785 3.33333V13.3333ZM13.5846 8.33333L17.0118 10.3897V6.27698L13.5846 8.33333Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
