import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const TicketIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(1.667, 3.333)">
      <Path
        d="M16.666 0V13.334H0V9.16699C1.38056 9.16682 2.5 8.0476 2.5 6.66699C2.5 5.28639 1.38056 4.16717 0 4.16699V0H16.666ZM1.66602 1.66699V2.84668C3.1376 3.48964 4.16602 4.95839 4.16602 6.66699C4.16602 8.37559 3.1376 9.84434 1.66602 10.4873V11.667H15V1.66699H1.66602ZM11.666 10.834H10V9.16699H11.666V10.834ZM11.666 7.5H10V5.83398H11.666V7.5ZM11.666 4.16699H10V2.5H11.666V4.16699Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
