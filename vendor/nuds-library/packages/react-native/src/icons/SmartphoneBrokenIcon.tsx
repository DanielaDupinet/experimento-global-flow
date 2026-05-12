import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const SmartphoneBrokenIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(4.167, 0.833)">
      <Path
        d="M8.33301 0C10.174 0 11.666 1.49304 11.666 3.33398V15C11.666 16.8409 10.174 18.334 8.33301 18.334H3.33301C1.49206 18.334 0 16.8409 0 15V3.33398C0 1.49304 1.49206 9.66307e-08 3.33301 0H8.33301ZM6.48438 4.4707L8.49805 6.48438C8.82055 6.80693 8.82335 7.32872 8.50488 7.65527L6.43652 9.77637L5.24316 8.61328L6.7373 7.08105L1.99512 2.33887C1.78836 2.61648 1.66602 2.96123 1.66602 3.33398V15C1.66602 15.9205 2.41253 16.667 3.33301 16.667H8.33301C9.25348 16.667 10 15.9205 10 15V3.33398C10 2.69072 9.63521 2.13234 9.10156 1.85449L6.48438 4.4707ZM7.5 15.0234H4.16602V13.3564H7.5V15.0234ZM5.30664 3.29297L6.93164 1.66699H3.68066L5.30664 3.29297Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
