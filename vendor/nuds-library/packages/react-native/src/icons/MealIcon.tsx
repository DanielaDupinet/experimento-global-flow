import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const MealIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(3.333, 1.667)">
      <Path
        d="M1.66699 6.80957C1.66706 7.03049 1.75491 7.24222 1.91113 7.39844L2.5 7.98828V0.416016H4.16699V7.98828L4.75586 7.39844C4.91206 7.24222 4.99993 7.03047 5 6.80957V0.416016H6.66699V6.80957C6.66693 7.4725 6.40333 8.10837 5.93457 8.57715L4.16699 10.3447V16.666H2.5V10.3447L0.732422 8.57715C0.263641 8.10837 6.66345e-05 7.47252 0 6.80957V0.416016H1.66699V6.80957ZM13.333 0V16.666H11.667V10.833H9.16699C8.70686 10.833 8.33318 10.4601 8.33301 10V4.16602C8.33318 1.86498 10.1989 3.22142e-07 12.5 0H13.333ZM11.667 1.80859C10.6961 2.15176 10.0001 3.07764 10 4.16602V9.16602H11.667V1.80859Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
