import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const CloseIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(3.577, 3.577)">
      <Path
        d="M6.42259 7.6011L11.6667 12.8452L12.8452 11.6667L7.6011 6.42259L12.8452 1.17851L11.6667 0L6.42259 5.24408L1.17851 0L0 1.17851L5.24408 6.42259L0 11.6667L1.17851 12.8452L6.42259 7.6011Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
