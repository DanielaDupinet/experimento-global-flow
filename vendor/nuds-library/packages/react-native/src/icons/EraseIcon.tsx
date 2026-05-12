import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const EraseIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(2.083, 1.667)">
      <Path
        d="M1.52369 6.99257C0.221941 8.29432 0.221942 10.4049 1.52369 11.7066L4.12672 14.3096C4.42534 14.6083 4.76652 14.8384 5.13075 15H0V16.6667L15 16.6667V15H7.83674C8.20095 14.8384 8.54214 14.6083 8.84076 14.3096L15.8333 7.31707L8.51626 0L1.52369 6.99257ZM10.0612 10.7322L5.1011 5.77218L8.51626 2.35702L13.4763 7.31707L10.0612 10.7322ZM7.66225 13.1311C7.01138 13.782 5.9561 13.782 5.30523 13.1311L2.7022 10.5281C2.05133 9.87723 2.05133 8.82196 2.7022 8.17108L3.92259 6.95069L8.88264 11.9107L7.66225 13.1311Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
