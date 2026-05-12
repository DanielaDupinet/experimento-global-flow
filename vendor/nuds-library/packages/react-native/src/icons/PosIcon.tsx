import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const PosIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(2.5, 0.833)">
      <Path
        d="M2.5 14.895C1.06231 14.525 0 13.2199 0 11.6667V3.33333C0 1.49238 1.49238 0 3.33333 0H11.6667C13.5076 0 15 1.49238 15 3.33333V11.6667C15 13.2199 13.9377 14.525 12.5 14.895V16.6667C12.5 17.5871 11.7538 18.3333 10.8333 18.3333H4.16667C3.24619 18.3333 2.5 17.5871 2.5 16.6667V14.895ZM3.33333 1.66667C2.41286 1.66667 1.66667 2.41286 1.66667 3.33333V11.6667C1.66667 12.5871 2.41286 13.3333 3.33333 13.3333H11.6667C12.5871 13.3333 13.3333 12.5871 13.3333 11.6667V3.33333C13.3333 2.41286 12.5871 1.66667 11.6667 1.66667H3.33333ZM4.16667 15V16.6667H10.8333V15H4.16667Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M3.33333 3.33333H11.6667V5H3.33333V3.33333Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M3.33333 10H5V11.6667H3.33333V10Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M6.66667 10H8.33333V11.6667H6.66667V10Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M10 10H11.6667V11.6667H10V10Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M10 6.66667H11.6667V8.33333H10V6.66667Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M3.33333 6.66667H5V8.33333H3.33333V6.66667Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M6.66667 6.66667H8.33333V8.33333H6.66667V6.66667Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
