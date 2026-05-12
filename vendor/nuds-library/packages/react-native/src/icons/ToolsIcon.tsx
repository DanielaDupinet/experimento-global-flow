import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const ToolsIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(1.58, 1.789)">
      <Path
        d="M9.51184 6.42259L14.7559 1.17851L13.5774 0L7.15482 6.42259H0C0 6.99337 0.0573838 7.55074 0.166697 8.08926C0.648118 10.4609 2.13675 12.4668 4.16667 13.6411V16.4226H12.5V13.6411C14.5299 12.4668 16.0185 10.4609 16.5 8.08926C16.6093 7.55074 16.6667 6.99337 16.6667 6.42259H13.6785L16.8393 3.26184L15.6607 2.08333L11.3215 6.42259H9.51184ZM10.8333 14.7559H5.83333V12.6798L5.00121 12.1984C3.47024 11.3128 2.32687 9.83952 1.87659 8.08926H14.7901C14.3398 9.83952 13.1964 11.3128 11.6655 12.1984L10.8333 12.6798V14.7559Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
