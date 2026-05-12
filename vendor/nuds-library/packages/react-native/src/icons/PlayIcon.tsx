import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const PlayIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(1.646, 2.128)">
      <Path
        d="M7.69579 13.5885L2.16376 8.05636C1.85181 7.7444 1.67626 7.32149 1.67561 6.88032L1.6679 1.66791L6.88026 1.67564C7.32144 1.67629 7.74436 1.85184 8.05631 2.1638L9.26654 3.37404H11.6235L9.23483 0.985291C8.61092 0.361373 7.76508 0.0102795 6.88273 0.00897014L0.83457 9.33066e-07C0.373369 -0.000681774 -0.00067986 0.373365 9.27828e-07 0.834566L0.00894578 6.88278C0.010251 7.76512 0.361334 8.61095 0.985239 9.23486L6.51727 14.767C7.81902 16.0687 9.92958 16.0687 11.2313 14.767L12.6243 13.374H10.2672L10.0528 13.5885C9.40194 14.2393 8.34666 14.2393 7.69579 13.5885Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M5.04049 3.37399H3.37382L3.37382 5.04066H5.04049L5.04049 3.37399Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M12.5405 11.7074V9.20736H10.0405V7.54069H12.5405V5.04069H14.2072V7.54069H16.7072V9.20736H14.2072V11.7074H12.5405Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
