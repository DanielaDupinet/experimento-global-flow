import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const EmailIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(0.963, 5)">
      <Path
        d="M1.40702 7.11334L1.49613 6.97291C3.0886 4.46246 4.86208 1.66667 9.03684 1.66667C13.2116 1.66667 14.9851 4.46246 16.5776 6.97292L16.6667 7.11334L18.0737 6.21999C18.0237 6.14133 17.9731 6.06131 17.9218 5.98012C16.3706 3.52792 14.1389 0 9.03684 0C3.93475 0 1.7031 3.52793 0.151916 5.98013C0.100606 6.06124 0.0499002 6.1414 0 6.21999L1.40702 7.11334Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M12.3702 6.66667C12.3702 8.50762 10.8778 10 9.03684 10C7.19589 10 5.70351 8.50762 5.70351 6.66667C5.70351 4.82572 7.19589 3.33333 9.03684 3.33333C10.8778 3.33333 12.3702 4.82572 12.3702 6.66667ZM10.7035 6.66667C10.7035 5.74619 9.95732 5 9.03684 5C8.11637 5 7.37018 5.74619 7.37018 6.66667C7.37018 7.58714 8.11637 8.33333 9.03684 8.33333C9.95732 8.33333 10.7035 7.58714 10.7035 6.66667Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
