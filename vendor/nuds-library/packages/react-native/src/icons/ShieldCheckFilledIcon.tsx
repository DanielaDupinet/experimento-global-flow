import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const ShieldCheckFilledIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(3.333, 1.667)">
      <Path
        d="M12.4521 2.89258L6.52344 8.82129L4.02344 6.32129L2.84473 7.5L5.93457 10.5889C6.09078 10.7451 6.30254 10.8329 6.52344 10.833C6.74445 10.833 6.957 10.7451 7.11328 10.5889L13.333 4.36816V9.16602C13.333 12.6792 11.0569 14.0409 7.22852 16.3301C7.04492 16.4399 6.85765 16.5516 6.66699 16.666C6.4761 16.5515 6.28831 16.44 6.10449 16.3301C2.27614 14.0409 0 12.6792 0 9.16602V3.33301L6.66699 0L12.4521 2.89258Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
