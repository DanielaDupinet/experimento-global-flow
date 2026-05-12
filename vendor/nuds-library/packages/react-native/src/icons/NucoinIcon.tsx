import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const NucoinIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(1.667, 1.667)">
      <Path
        d="M8.33301 0C12.9354 1.12749e-07 16.666 3.73063 16.666 8.33301C16.666 12.9354 12.9354 16.666 8.33301 16.666C3.73063 16.666 1.12753e-07 12.9354 0 8.33301C0 3.73063 3.73063 0 8.33301 0ZM8.33301 1.66602C4.65111 1.66602 1.66602 4.65111 1.66602 8.33301C1.66602 12.0149 4.65111 15 8.33301 15C12.0149 15 15 12.0149 15 8.33301C15 4.65111 12.0149 1.66602 8.33301 1.66602ZM9.09082 4.66699C10.5271 4.66707 11.583 5.71796 11.583 7.32715V11.7852L9.89844 11.75V7.67383C9.89842 6.56587 9.32153 5.90627 8.42383 5.90625C7.48789 5.90641 6.88488 6.60567 6.88477 7.7793V11.75H5.33301V4.85059H6.84668L6.88477 6.09082H6.89844C7.28317 5.27326 7.94978 4.66711 9.09082 4.66699Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
