import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const RemoveIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(3.333, 3.333)">
      <Path
        d="M5.8334 7.49998V13.3333H7.50007V7.49998L13.3333 7.50001L13.3333 5.83334L7.50006 5.83331L7.5 0L5.83333 1.68881e-05L5.83339 5.83331H0V7.49998H5.8334Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
