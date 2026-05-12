import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const QrcodeIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(2.182, 1.667)">
      <Path
        d="M15.176 9.07869L0 16.6667V0L15.176 7.58798C15.7902 7.89508 15.7902 8.77159 15.176 9.07869ZM11.2732 7.5L1.66667 2.69672V7.5H11.2732ZM1.66667 9.16667V13.9699L11.2732 9.16667H1.66667Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
