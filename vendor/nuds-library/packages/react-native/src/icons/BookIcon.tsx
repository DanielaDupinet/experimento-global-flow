import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const BookIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(3.333, 1.667)">
      <Path
        d="M2.5 11.6667H11.6667V1.66667H3.33333C2.41286 1.66667 1.66667 2.41286 1.66667 3.33333V11.6667H2.5ZM0 14.1667V13.3333V11.6667V3.33333C0 1.49238 1.49239 0 3.33333 0H11.6667H13.3333V1.66667V11.6667V12.9167V13.3333V15V15.8333V16.6667H12.5H2.5C1.11929 16.6667 0 15.5474 0 14.1667ZM1.66667 14.1667C1.66667 14.6269 2.03976 15 2.5 15H11.6667V13.3333H2.5C2.03976 13.3333 1.66667 13.7064 1.66667 14.1667ZM4.16667 3.33333H3.33333V4.16667V7.5V8.33333H4.16667H9.16667H10V7.5V4.16667V3.33333H9.16667H4.16667ZM5 6.66667V5H8.33333V6.66667H5Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
