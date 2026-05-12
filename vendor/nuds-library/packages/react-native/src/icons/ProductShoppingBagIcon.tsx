import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const ProductShoppingBagIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(2.672, 1.666)">
      <Path
        d="M1.67059 13.2227C1.60647 14.1845 2.36969 14.9999 3.33368 15H11.3229C12.287 14.9999 13.0502 14.1846 12.986 13.2227L12.4372 5H14.1081L14.6491 13.1123C14.7771 15.036 13.251 16.6669 11.3229 16.667H3.33368C1.40572 16.6668 -0.120512 15.036 0.00750419 13.1123L0.54852 5H2.21942L1.67059 13.2227ZM7.32879 0C9.1749 0.000219147 10.6617 1.52284 10.6618 3.33301V5H8.99481V3.33301C8.99467 2.43243 8.24358 1.66721 7.32879 1.66699C6.41382 1.66699 5.66194 2.4323 5.6618 3.33301V5H3.99481V3.33301C3.99494 1.52271 5.48251 0 7.32879 0Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
