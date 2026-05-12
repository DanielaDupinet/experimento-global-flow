import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const CardTransferLimitsIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(1.25, 1.163)">
      <Path
        d="M11.8389 11.8398L9.51367 14.1602L11.8379 16.499L10.6562 17.6738L7.74512 14.7451C7.42142 14.4193 7.42214 13.893 7.74707 13.5684L10.6611 10.6602L11.8389 11.8398ZM17.2559 13.5684C17.581 13.8929 17.5824 14.4191 17.2588 14.7451L14.3477 17.6738L13.166 16.499L15.4902 14.1602L13.165 11.8398L14.3418 10.6602L17.2559 13.5684ZM10 0C11.8409 0 13.3329 1.49213 13.333 3.33301V9.16895H11.667V3.33301C11.6669 2.41261 10.9204 1.66699 10 1.66699H3.33301C2.41277 1.66721 1.66708 2.41274 1.66699 3.33301V13.333C1.66699 14.2533 2.41272 14.9998 3.33301 15H5.84961V16.666H3.33301C1.49225 16.6658 0 15.1738 0 13.333V3.33301C8.78219e-05 1.49227 1.4923 0.000220298 3.33301 0H10ZM8.33301 6.66602H6.66699V4.16602H8.33301V6.66602Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
