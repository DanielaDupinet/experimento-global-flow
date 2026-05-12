import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const RestaurantIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(1.667, 2.5)">
      <Path
        d="M3.33333 9.16667H5.83333V10.8333H3.33333V9.16667Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M13.3333 9.16667H10.8333V10.8333H13.3333V9.16667Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M6.66667 0V1.66667H5.39345C4.13087 1.66667 2.97666 2.38001 2.41202 3.50929L1.66667 5H0V6.66667H0.833333V15H2.5V13.3333H14.1667V15H15.8333V6.66667H16.6667V5H15L14.2546 3.50929C13.69 2.38001 12.5358 1.66667 11.2732 1.66667H10V0H6.66667ZM13.9699 6.66667H2.69672L3.90274 4.25464C4.18505 3.69 4.76216 3.33333 5.39345 3.33333H11.2732C11.9045 3.33333 12.4816 3.69 12.7639 4.25464L13.9699 6.66667ZM2.5 8.33333H14.1667V11.6667H2.5V8.33333Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
