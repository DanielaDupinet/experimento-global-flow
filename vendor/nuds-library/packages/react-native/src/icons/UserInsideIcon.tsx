import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const UserInsideIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(2.5, 2.083)">
      <Path
        d="M15 5V15.833H0V5L7.5 0L15 5ZM1.66602 5.8916V14.166H2.78418C3.47065 12.2242 5.32307 10.833 7.5 10.833C9.67678 10.8331 11.5284 12.2243 12.2148 14.166H13.333V5.8916L7.5 2.00293L1.66602 5.8916ZM7.5 12.5C6.26628 12.5 5.18868 13.1698 4.6123 14.166H10.3867C9.81034 13.17 8.73353 12.5001 7.5 12.5ZM7.5 4.16602C9.11072 4.16615 10.416 5.47226 10.416 7.08301C10.416 8.69376 9.11072 9.99987 7.5 10C5.88917 10 4.58301 8.69384 4.58301 7.08301C4.58301 5.47218 5.88917 4.16602 7.5 4.16602ZM7.5 5.83301C6.80964 5.83301 6.25 6.39265 6.25 7.08301C6.25 7.77336 6.80964 8.33301 7.5 8.33301C8.19024 8.33288 8.75 7.77328 8.75 7.08301C8.75 6.39273 8.19024 5.83314 7.5 5.83301Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
