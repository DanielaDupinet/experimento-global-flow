import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const DownloadIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(3.333, 1.667)">
      <Path
        d="M12.1583 5.49167L13.3333 6.66667L7.25592 12.7441C6.93048 13.0695 6.40285 13.0695 6.07741 12.7441L0 6.66667L1.175 5.49167L5.83333 10.1417L5.83333 0H7.5L7.5 10.1417L12.1583 5.49167Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M0 16.6667H13.3333V15H0V16.6667Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
