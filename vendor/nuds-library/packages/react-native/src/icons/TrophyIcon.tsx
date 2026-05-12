import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const TrophyIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(1.666, 1.667)">
      <Path
        d="M14.167 1.66602H16.667V5.83301C16.667 7.38621 15.6047 8.69149 14.167 9.06152C13.9872 9.1078 13.8015 9.13959 13.6113 9.15527C12.7908 10.8922 11.1375 12.1586 9.16699 12.4404V15H13.334V16.666H3.33398V15H7.5V12.4404C5.5297 12.1585 3.87721 10.892 3.05664 9.15527C2.86634 9.1396 2.6799 9.10783 2.5 9.06152C1.06244 8.6914 6.79339e-08 7.38611 0 5.83301V1.66602H2.5V0H14.167V1.66602ZM4.16699 6.66602C4.16699 8.9672 6.0328 10.833 8.33398 10.833C10.635 10.8328 12.5 8.96709 12.5 6.66602V1.66602H4.16699V6.66602ZM1.66699 5.83301C1.66699 6.44975 2.00205 6.98814 2.5 7.27637V3.33301H1.66699V5.83301ZM14.167 7.27637C14.6651 6.98817 15 6.44985 15 5.83301V3.33301H14.167V7.27637Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
