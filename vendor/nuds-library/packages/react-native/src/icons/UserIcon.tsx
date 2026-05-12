import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const UserIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(3.333, 1.667)">
      <Path
        d="M10.8333 4.16667C10.8333 6.46785 8.96785 8.33333 6.66667 8.33333C4.36548 8.33333 2.5 6.46785 2.5 4.16667C2.5 1.86548 4.36548 0 6.66667 0C8.96785 0 10.8333 1.86548 10.8333 4.16667ZM9.16667 4.16667C9.16667 2.78595 8.04738 1.66667 6.66667 1.66667C5.28595 1.66667 4.16667 2.78595 4.16667 4.16667C4.16667 5.54738 5.28595 6.66667 6.66667 6.66667C8.04738 6.66667 9.16667 5.54738 9.16667 4.16667Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M13.3333 16.6667C13.3333 12.9848 10.3486 10 6.66667 10C2.98477 10 0 12.9848 0 16.6667H1.66667C1.66667 13.9052 3.90524 11.6667 6.66667 11.6667C9.42809 11.6667 11.6667 13.9052 11.6667 16.6667H13.3333Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
