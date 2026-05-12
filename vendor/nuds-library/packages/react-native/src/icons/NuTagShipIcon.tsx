import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const NuTagShipIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(0.056, 5.85)">
      <Path
        d="M6.63965 8.2998H0L0.332031 6.63965H6.97168L6.63965 8.2998ZM18.2275 0C19.2748 0.000222894 20.0597 0.959485 19.8545 1.98633L18.8594 6.96582C18.7042 7.74144 18.0226 8.2997 17.2314 8.2998H8.2998L8.63184 6.63965H17.2314L18.2275 1.66016H3.32031L3.38477 1.33398C3.54002 0.558394 4.22149 6.21448e-05 5.0127 0H18.2275ZM8.63184 3.32031L8.2998 4.98047H1.66016L1.99219 3.32031H8.63184ZM15.7695 4.98047H14.1104L14.4424 3.32031H16.1016L15.7695 4.98047Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
