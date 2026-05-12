import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const DocumentIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(3.333, 1.667)">
      <Path
        d="M10 10H3.33333V8.33333H10V10Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M3.33333 13.3333H10V11.6667H3.33333V13.3333Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M0 3.33333C0 1.49238 1.49238 0 3.33333 0H7.78595C8.67001 0 9.51786 0.351189 10.143 0.976311L12.357 3.19036C12.9821 3.81548 13.3333 4.66332 13.3333 5.54738V13.3333C13.3333 15.1743 11.8409 16.6667 10 16.6667H3.33333C1.49238 16.6667 0 15.1743 0 13.3333V3.33333ZM11.6667 5.54738C11.6667 5.34708 11.6306 5.15051 11.5621 4.96632C11.4873 4.98813 11.4069 5 11.3215 5H9.16667C8.70643 5 8.33333 4.6269 8.33333 4.16667V2.01184C8.33333 1.92647 8.3452 1.846 8.36701 1.77123C8.18283 1.70272 7.98625 1.66667 7.78595 1.66667H3.33333C2.41286 1.66667 1.66667 2.41286 1.66667 3.33333V13.3333C1.66667 14.2538 2.41286 15 3.33333 15H10C10.9205 15 11.6667 14.2538 11.6667 13.3333V5.54738Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
