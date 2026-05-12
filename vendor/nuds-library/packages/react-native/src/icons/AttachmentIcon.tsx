import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const AttachmentIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(4.167, 0.833)">
      <Path
        d="M5.1259 1.27844C5.78432 0.482588 6.74951 0 7.91667 0C9.08383 0 10.049 0.482588 10.7074 1.27844C11.3527 2.05835 11.6667 3.09089 11.6667 4.16667V12.5C11.6667 15.7217 9.055 18.3333 5.83333 18.3333C2.61167 18.3333 0 15.7217 0 12.5V4.16667H1.66667V12.5C1.66667 14.8012 3.53215 16.6667 5.83333 16.6667C8.13452 16.6667 10 14.8012 10 12.5V4.16667C10 3.4015 9.77614 2.76737 9.42328 2.34085C9.0836 1.93027 8.59045 1.66667 7.91667 1.66667C7.24288 1.66667 6.74973 1.93027 6.41006 2.34085C6.05719 2.76737 5.83333 3.4015 5.83333 4.16667V12.5H4.16667V4.16667C4.16667 3.09089 4.48067 2.05835 5.1259 1.27844Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
