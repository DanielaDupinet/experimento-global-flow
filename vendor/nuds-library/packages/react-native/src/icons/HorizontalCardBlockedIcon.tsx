import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const HorizontalCardBlockedIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(1.25, 2.917)">
      <Path
        d="M14.166 0.833008C16.007 0.833008 17.5 2.32604 17.5 4.16699V10.833C17.5 12.674 16.007 14.167 14.166 14.167H4.16602C2.32522 14.1668 0.833008 12.6738 0.833008 10.833V10H2.5V10.833C2.5 11.7534 3.24569 12.4998 4.16602 12.5H14.166C15.0865 12.5 15.833 11.7535 15.833 10.833V4.16699C15.833 3.24652 15.0865 2.5 14.166 2.5H7.5V0.833008H14.166ZM13.333 9.16699H10.833V7.5H13.333V9.16699ZM3.33301 0C4.71372 -6.03528e-08 5.83301 1.11929 5.83301 2.5V3.33301H6.66602V6.66699C6.66584 7.58721 5.92022 8.33283 5 8.33301H1.66602C0.745799 8.33283 0.000175524 7.58721 0 6.66699V3.33301H0.833008V2.5C0.833008 1.11929 1.9523 7.69034e-07 3.33301 0ZM1.66602 6.66699H5V5H1.66602V6.66699ZM3.33301 1.66699C2.87277 1.66699 2.5 2.03976 2.5 2.5V3.33301H4.16602V2.5C4.16602 2.03976 3.79324 1.66699 3.33301 1.66699Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
