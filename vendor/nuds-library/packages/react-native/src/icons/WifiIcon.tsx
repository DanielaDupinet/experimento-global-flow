import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const WifiIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(1.77, 4.339)">
      <Path
        d="M16.4605 3.09124C11.758 -1.03041 4.70246 -1.03041 0 3.09124L1.18151 4.27275C5.22847 0.797973 11.232 0.797973 15.279 4.27275L16.4605 3.09124Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M13.5045 6.04727C10.4442 3.53977 6.01633 3.53977 2.95603 6.04727L4.14192 7.23316C6.54017 5.3667 9.92032 5.3667 12.3186 7.23316L13.5045 6.04727Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M10.5283 9.02341L8.23025 11.3215L5.93217 9.02341C7.32093 8.10332 9.13957 8.10332 10.5283 9.02341Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
