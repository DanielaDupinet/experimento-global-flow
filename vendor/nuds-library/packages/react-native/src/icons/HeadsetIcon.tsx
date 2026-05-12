import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const HeadsetIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(2.5, 1.25)">
      <Path
        d="M7.5 0C3.35786 0 0 3.35786 0 7.5V14.1667H5V7.5H1.66667C1.66667 4.27834 4.27834 1.66667 7.5 1.66667C10.7217 1.66667 13.3333 4.27834 13.3333 7.5H10V14.1667H13.3333C13.3333 15.0871 12.5871 15.8333 11.6667 15.8333H7.5V17.5H11.6667C13.5076 17.5 15 16.0076 15 14.1667V7.5C15 3.35786 11.6421 0 7.5 0ZM13.3333 12.5H11.6667V9.16667H13.3333V12.5ZM1.66667 9.16667H3.33333V12.5H1.66667V9.16667Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
