import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const LightbulbIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(4.167, 1.667)">
      <Path
        d="M9.16667 11.4906C9.16667 10.9458 9.44451 10.4469 9.84039 10.0726C10.965 9.00924 11.6667 7.50323 11.6667 5.83333C11.6667 2.61167 9.05499 0 5.83333 0C2.61167 0 0 2.61167 0 5.83333C0 7.50323 0.701677 9.00924 1.82628 10.0726C2.22216 10.4469 2.5 10.9458 2.5 11.4906V13.3333H9.16667V11.4906ZM10 5.83333C10 7.02626 9.50085 8.09991 8.69531 8.86159C8.06751 9.45521 7.5 10.365 7.5 11.4906V11.6667H4.16667V11.4906C4.16667 10.365 3.59916 9.45521 2.97136 8.86159C2.16582 8.09991 1.66667 7.02626 1.66667 5.83333C1.66667 3.53215 3.53215 1.66667 5.83333 1.66667C8.13452 1.66667 10 3.53215 10 5.83333Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M3.33333 15V16.6667H8.33333V15H3.33333Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
