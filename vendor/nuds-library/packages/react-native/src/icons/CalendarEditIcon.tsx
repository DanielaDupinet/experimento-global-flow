import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const CalendarEditIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(1.25, 0.834)">
      <Path
        d="M13.9619 9.77344C14.7712 8.96419 16.0833 8.9643 16.8926 9.77344C17.7019 10.5827 17.7019 11.8948 16.8926 12.7041L11.2637 18.333H8.33301V15.4023L13.9619 9.77344ZM4.16699 1.66602H10.833V0H12.5V1.66602H15V8.33301H13.333V6.66602H1.66699V15H6.66699V16.666H0V1.66602H2.5V0H4.16699V1.66602ZM10 16.0928V16.666H10.5732L14.0371 13.2031L13.4629 12.6299L10 16.0928ZM15.7148 10.9521C15.5564 10.7937 15.2991 10.7937 15.1406 10.9521L14.6416 11.4512L15.2158 12.0244L15.7148 11.5254C15.8729 11.367 15.8729 11.1105 15.7148 10.9521ZM1.66699 5H13.333V3.33301H1.66699V5Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
