import React from "react";
import Svg, { Path } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const KeyIcon = ({ size = 22, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const iconColor = color ?? theme.color.content.default;

  const width = size;
  const height = size * (12 / 22);

  return (
    <Svg width={width} height={height} viewBox="0 0 22 12" fill="none">
          <Path 
            d="M6 0C7.11659 0 8.12883 0.275276 9.03711 0.825195C9.94544 1.3752 10.6669 2.1 11.2002 3H19L22 6L17.5 10.5L15.5 9L13.5 10.5L11.2002 9C10.6669 9.9 9.94544 10.6248 9.03711 11.1748C8.12883 11.7247 7.11658 12 6 12C4.33333 12 2.91667 11.4167 1.75 10.25C0.583333 9.08333 0 7.66667 0 6C0 4.33333 0.583333 2.91667 1.75 1.75C2.91667 0.583333 4.33333 0 6 0ZM6 2C4.9 2 3.95814 2.39147 3.1748 3.1748C2.39147 3.95814 2 4.9 2 6C2 7.1 2.39147 8.04186 3.1748 8.8252C3.95814 9.60853 4.9 10 6 10C6.93333 10 7.75456 9.71706 8.46289 9.15039C9.1712 8.58373 9.64167 7.86665 9.875 7H12L13.4502 8.02539L15.5 6.5L17.2754 7.875L19.1504 6L18.1504 5H9.875C9.64167 4.13335 9.1712 3.41627 8.46289 2.84961C7.75456 2.28294 6.93333 2 6 2ZM7 5V7H5V5H7Z" 
            fill={iconColor} 
            fillOpacity={opacity}
          />
        </Svg>
  );
};
