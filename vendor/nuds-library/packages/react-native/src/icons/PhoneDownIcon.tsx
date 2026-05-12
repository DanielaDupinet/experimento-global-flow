import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const PhoneDownIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(0.833, 4.167)">
      <Path
        d="M13.3333 5H5V10H1.66667V8.312C1.66667 5.55851 3.42861 3.11395 6.04079 2.24322L6.44591 2.10818C7.32321 1.81575 8.24191 1.66667 9.16667 1.66667C10.0914 1.66667 11.0101 1.81575 11.8874 2.10818L12.2925 2.24322C14.9047 3.11395 16.6667 5.55851 16.6667 8.312V10H13.3333V5ZM11.6667 10C11.6667 10.9205 12.4129 11.6667 13.3333 11.6667H16.7543C17.6264 11.6667 18.3333 10.9597 18.3333 10.0876V8.312C18.3333 4.84113 16.1123 1.75967 12.8196 0.662085L12.4145 0.527046C11.3672 0.177965 10.2706 0 9.16667 0C8.06278 0 6.9661 0.177965 5.91886 0.527046L5.51374 0.662085C2.22099 1.75967 0 4.84113 0 8.312V10.0876C0 10.9597 0.706979 11.6667 1.57908 11.6667H5C5.92047 11.6667 6.66667 10.9205 6.66667 10V6.66667H11.6667V10Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
