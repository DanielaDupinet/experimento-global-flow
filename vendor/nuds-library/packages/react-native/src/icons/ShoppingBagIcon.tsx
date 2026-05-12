import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const ShoppingBagIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(2.5, 1.667)">
      <Path
        d="M11.6667 5H15V13.3333C15 15.1743 13.5076 16.6667 11.6667 16.6667H3.33333C1.49238 16.6667 0 15.1743 0 13.3333V5H3.33333V4.16667C3.33333 1.90439 5.19339 0 7.5 0C9.80661 0 11.6667 1.90439 11.6667 4.16667V5ZM5 6.66667V8.33333H3.33333V6.66667H1.66667V13.3333C1.66667 14.2538 2.41286 15 3.33333 15H11.6667C12.5871 15 13.3333 14.2538 13.3333 13.3333V6.66667H11.6667V8.33333H10V6.66667H5ZM5 5H10V4.16667C10 2.81399 8.87529 1.66667 7.5 1.66667C6.12471 1.66667 5 2.81399 5 4.16667V5Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
