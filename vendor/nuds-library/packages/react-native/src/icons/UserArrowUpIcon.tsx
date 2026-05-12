import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const UserArrowUpIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(2.083, 1.25)">
      <Path
        d="M12.5068 10.833C12.6975 10.8346 12.8879 10.9012 13.042 11.0332L15.833 13.4258V15.6211L13.333 13.4785V17.5H11.666V13.4785L9.16602 15.6211V13.4258L11.957 11.0332C12.1113 10.901 12.3022 10.8345 12.4932 10.833H12.5068ZM6.66602 10C7.24152 10 7.80031 10.0729 8.33301 10.21V11.9512C7.81171 11.7669 7.25041 11.666 6.66602 11.666C3.90485 11.6662 1.66619 13.9048 1.66602 16.666H0C0.000175701 12.9844 2.98438 10.0002 6.66602 10ZM6.66602 0C8.96709 0 10.8328 1.86498 10.833 4.16602C10.833 6.4672 8.9672 8.33301 6.66602 8.33301C4.36498 8.33283 2.5 6.46709 2.5 4.16602C2.50018 1.86509 4.36509 0.000175845 6.66602 0ZM6.66602 1.66602C5.28556 1.66619 4.16619 2.78556 4.16602 4.16602C4.16602 5.54662 5.28545 6.66584 6.66602 6.66602C8.04673 6.66602 9.16602 5.54673 9.16602 4.16602C9.16584 2.78545 8.04662 1.66602 6.66602 1.66602Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
