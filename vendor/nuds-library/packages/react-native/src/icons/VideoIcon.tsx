import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const VideoIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(1.25, 3.333)">
      <Path
        d="M13.1757 2.31757C12.7461 0.973349 11.4867 0 10 0H3.33333C1.49238 0 0 1.49238 0 3.33333V10C0 11.8409 1.49238 13.3333 3.33333 13.3333H10C11.4867 13.3333 12.7461 12.36 13.1757 11.0158C13.2781 10.6955 13.3333 10.3542 13.3333 10V9.16667L17.5 11.6667V1.66667L13.3333 4.16667V3.33333C13.3333 2.97913 13.2781 2.63782 13.1757 2.31757ZM15.8333 4.61032V8.72302L12.4061 6.66667L15.8333 4.61032ZM11.6667 3.33333V10C11.6667 10.9205 10.9205 11.6667 10 11.6667H3.33333C2.41286 11.6667 1.66667 10.9205 1.66667 10V3.33333C1.66667 2.41286 2.41286 1.66667 3.33333 1.66667H10C10.9205 1.66667 11.6667 2.41286 11.6667 3.33333Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
