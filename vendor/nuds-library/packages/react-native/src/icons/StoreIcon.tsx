import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const StoreIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(2.5, 2.5)">
      <Path
        d="M4.16667 10H6.66667V8.33333H4.16667V10Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M3.33333 0C1.49238 0 0 1.49238 0 3.33333V15L15 15V3.33333C15 1.49239 13.5076 0 11.6667 0H3.33333ZM1.66667 5V3.33333C1.66667 2.41286 2.41286 1.66667 3.33333 1.66667H4.16667V5H1.66667ZM9.16667 1.66667V5H5.83333V1.66667L9.16667 1.66667ZM1.66667 6.66667L13.3333 6.66667V13.3333H10.8333V8.33333H9.16667V13.3333H1.66667L1.66667 6.66667ZM10.8333 5V1.66667H11.6667C12.5871 1.66667 13.3333 2.41286 13.3333 3.33333V5H10.8333Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
