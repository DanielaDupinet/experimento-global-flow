import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const ShieldIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(3.333, 1.458)">
      <Path
        d="M6.66667 17.0833C6.47575 16.9688 6.28834 16.8567 6.1045 16.7468C2.27615 14.4576 0 13.0965 0 9.58333V3.33333L6.66667 0L13.3333 3.33333V9.58333C13.3333 13.0965 11.0572 14.4576 7.22883 16.7468C7.045 16.8567 6.85758 16.9688 6.66667 17.0833ZM10.407 12.5754C11.2479 11.7666 11.6667 10.9419 11.6667 9.58333V4.36339L6.66667 1.86339L1.66667 4.36339V9.58333C1.66667 10.9419 2.08547 11.7666 2.92629 12.5754C3.76571 13.3829 4.95954 14.117 6.66667 15.1404C8.37379 14.117 9.56762 13.3829 10.407 12.5754Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
