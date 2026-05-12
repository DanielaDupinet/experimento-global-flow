import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const PigAutoIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(0.833, 1.458)">
      <Path
        d="M1.37634 4.58333H3.45968V7.5L6.37634 2.91667H4.29301V0L1.37634 4.58333Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M8.87634 2.08313H15.8333V4.9998L14.7549 5.67382L15.7555 7.17468C16.0644 7.63803 16.584 7.91608 17.1408 7.91646H18.3333V12.0831C17.6599 12.4872 17.0736 12.9348 16.5039 13.3696C15.3113 14.28 14.1919 15.1345 12.5 15.4165V17.0831H10.8333V15.4165H5V17.0831H3.33333V15.4165C0.416667 12.9165 0 11.2174 0 8.7498C0 8.46758 0.0175365 8.18946 0.0515779 7.91646H1.7358C1.69033 8.18747 1.66667 8.46587 1.66667 8.7498C1.66667 9.89458 1.76686 10.6599 2.09378 11.3892C2.38592 12.041 2.9163 12.7873 3.96505 13.7498H12.3523C13.5179 13.5251 14.3223 12.9382 15.4926 12.0448L15.5178 12.0256C15.8637 11.7615 16.2458 11.4699 16.6667 11.1783V9.54913C15.7372 9.41537 14.8982 8.89344 14.3687 8.09918L12.4161 5.17018L14.1667 4.07605V3.7498H8.87634V2.08313Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M13.3333 7.91646H11.6667V9.58313H13.3333V7.91646Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
