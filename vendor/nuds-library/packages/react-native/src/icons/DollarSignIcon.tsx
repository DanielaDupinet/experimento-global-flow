import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const DollarSignIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(4.381, 0.833)">
      <Path
        d="M6.25 2.08398C8.55108 2.08398 10.4168 3.94896 10.417 6.25H8.75C8.74982 4.86944 7.6306 3.75 6.25 3.75H4.24121C3.21948 3.75011 2.36821 4.53357 2.2832 5.55176C2.2016 6.53096 2.85623 7.42063 3.81543 7.63379L8.33301 8.6377C10.9619 9.22205 12.11 12.326 10.4941 14.4805C9.6584 15.5946 8.34687 16.25 6.9541 16.25H6.25V18.334H4.58301V16.25C2.05185 16.2498 0 14.1982 0 11.667H1.66699C1.66699 13.2777 2.97233 14.5838 4.58301 14.584H6.9541C7.82234 14.5839 8.64016 14.175 9.16113 13.4805C10.0504 12.2947 9.41838 10.5864 7.97168 10.2646L3.4541 9.26074C1.68144 8.86682 0.471483 7.22367 0.62207 5.41406C0.778916 3.53191 2.35256 2.0841 4.24121 2.08398H4.58301V0H6.25V2.08398Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
