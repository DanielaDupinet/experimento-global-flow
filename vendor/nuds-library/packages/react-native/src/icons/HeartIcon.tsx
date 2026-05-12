import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const HeartIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(1.667, 2.813)">
      <Path
        d="M8.33281 4.64817L10.5512 2.42979C11.5936 1.38741 13.2924 1.41669 14.2982 2.49437C15.2562 3.52077 15.2286 5.12166 14.2358 6.11444L8.33281 12.0175L2.42979 6.11444C1.43701 5.12166 1.40942 3.52077 2.36739 2.49437C3.37322 1.4167 5.07206 1.38741 6.11443 2.42979L8.33281 4.64817ZM8.33281 14.3745L15.4143 7.29295C17.0422 5.66511 17.0874 3.04015 15.5167 1.35718C13.8674 -0.409883 11.0819 -0.457898 9.37268 1.25128L8.33281 2.29114L7.29294 1.25128C5.58377 -0.457892 2.79822 -0.40988 1.14896 1.35718C-0.421811 3.04015 -0.376566 5.66511 1.25127 7.29295L8.33281 14.3745Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
