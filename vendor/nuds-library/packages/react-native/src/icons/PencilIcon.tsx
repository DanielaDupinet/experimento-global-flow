import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const PencilIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(2.149, 2.149)">
      <Path
        d="M11.5656 6.78003L4.30964 14.036H1.66667V11.393L8.92259 4.13706L11.5656 6.78003ZM12.7441 5.60152L10.1011 2.95854L10.9048 2.15482C11.5557 1.50395 12.611 1.50395 13.2618 2.15482L13.5478 2.44078C14.1987 3.09165 14.1987 4.14693 13.5478 4.7978L12.7441 5.60152ZM14.7263 5.97631C16.0281 4.67456 16.0281 2.56401 14.7263 1.26226L14.4404 0.976311C13.1386 -0.325436 11.0281 -0.325437 9.72631 0.97631L0 10.7026V15.7026H5L14.7263 5.97631Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
