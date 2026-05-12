import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const UmbrellaIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(1.667, 1.25)">
      <Path
        d="M9.16667 0H7.5V1.70781C3.84514 2.07069 0.88495 4.79495 0.166697 8.33333C0.0573838 8.87185 0 9.42922 0 10H7.49997L7.4999 14.3786C7.4999 16.1025 8.8974 17.5 10.6213 17.5C11.6833 17.5 12.6211 16.9689 13.1836 16.1616L11.8162 15.2087C11.5519 15.588 11.1152 15.8333 10.6213 15.8333C9.81788 15.8333 9.16658 15.182 9.16657 14.3786L9.16664 10H16.6667C16.6667 9.42922 16.6093 8.87185 16.5 8.33333C15.7817 4.79495 12.8215 2.07069 9.16667 1.70781V0ZM8.33333 3.33333C11.4397 3.33333 14.0499 5.45795 14.79 8.33333H1.8767C2.61677 5.45795 5.22693 3.33333 8.33333 3.33333Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
