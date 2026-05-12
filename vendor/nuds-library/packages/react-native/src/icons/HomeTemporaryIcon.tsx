import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const HomeTemporaryIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(1.667, 1.666)">
      <Path
        d="M5.83301 3.94824L1.66602 6.72559V15H6.66602V10.834H8.33301V15H13.333V10.834H15V16.667H0V5.83398L5.83301 1.94434V3.94824ZM12.083 0C14.6143 0 16.666 2.05268 16.666 4.58398C16.6658 7.11514 14.6142 9.16699 12.083 9.16699C9.55185 9.16695 7.50018 7.11511 7.5 4.58398C7.5 2.05271 9.55174 4.38223e-05 12.083 0ZM12.083 1.66699C10.4722 1.66704 9.16602 2.97318 9.16602 4.58398C9.16619 6.19464 10.4723 7.49996 12.083 7.5C13.6937 7.5 14.9998 6.19467 15 4.58398C15 2.97315 13.6938 1.66699 12.083 1.66699ZM12.5 4.16699H14.166V5.83398H10.833V2.5H12.5V4.16699Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
