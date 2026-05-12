import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const BuildingsIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(1.666, 1.667)">
      <Path
        d="M12.5 0V7.5H16.667V16.666H0V5H4.16699V0H12.5ZM1.66699 6.66602V15H4.16699V6.66602H1.66699ZM5.83398 1.66602V15H7.5V11.666H9.16699V15H10.834V1.66602H5.83398ZM12.5 9.16602V15H15V9.16602H12.5ZM9.16699 8.33301H7.5V6.66602H9.16699V8.33301ZM9.16699 5H7.5V3.33301H9.16699V5Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
