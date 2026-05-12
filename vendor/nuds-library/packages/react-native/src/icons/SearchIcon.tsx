import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const SearchIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(2.622, 2.622)">
      <Path
        d="M9.32681 10.5053C8.35299 11.2347 7.14361 11.6667 5.83333 11.6667C2.61167 11.6667 0 9.055 0 5.83333C0 2.61167 2.61167 0 5.83333 0C9.055 0 11.6667 2.61167 11.6667 5.83333C11.6667 7.14361 11.2347 8.35299 10.5053 9.32681L14.7559 13.5774L13.5774 14.7559L9.32681 10.5053ZM10 5.83333C10 3.53215 8.13452 1.66667 5.83333 1.66667C3.53215 1.66667 1.66667 3.53215 1.66667 5.83333C1.66667 8.13452 3.53215 10 5.83333 10C8.13452 10 10 8.13452 10 5.83333Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
