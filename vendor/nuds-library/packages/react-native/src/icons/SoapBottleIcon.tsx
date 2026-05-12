import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const SoapBottleIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(3.333, 1.667)">
      <Path
        d="M10.833 0V1.66602H7.5V3.33301H10V5.83301C11.8408 5.83301 13.3328 7.32522 13.333 9.16602V15.833C13.333 16.2932 12.9602 16.666 12.5 16.666H0.833008C0.37292 16.6658 0 16.2931 0 15.833V9.16602C0.000176117 7.32532 1.49232 5.83318 3.33301 5.83301V3.33301H5.83301V1.66602H3.33301C2.41268 1.66619 1.66699 2.41264 1.66699 3.33301H0C0 1.49217 1.49221 0.000176015 3.33301 0H10.833ZM3.33301 7.5C2.41279 7.50018 1.66717 8.2458 1.66699 9.16602V15H11.667V9.16602C11.6668 8.24569 10.9204 7.5 10 7.5H3.33301ZM5 5V5.83301H8.33301V5H5Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
