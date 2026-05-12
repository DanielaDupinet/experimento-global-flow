import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const MoneySelfTransferIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(0.833, 0.833)">
      <Path
        d="M14.3115 14.167H18.334V15.834H14.3115L16.4551 18.334H14.2598L11.8672 15.543C11.735 15.3887 11.6685 15.1978 11.667 15.0068V14.9941C11.6685 14.8033 11.7351 14.6122 11.8672 14.458L14.2598 11.667H16.4551L14.3115 14.167ZM1.66699 13.334H10V15H0V8.33398H1.66699V13.334ZM9.16699 6.66699C10.5476 6.66699 11.6668 7.78642 11.667 9.16699C11.667 10.5477 10.5477 11.667 9.16699 11.667C7.78628 11.667 6.66699 10.5477 6.66699 9.16699C6.66716 7.78642 7.78638 6.66699 9.16699 6.66699ZM8.33398 10H10V8.33398H8.33398V10ZM18.334 10H16.667V5H8.33398V3.33398H18.334V10ZM6.4668 2.79102C6.59898 2.94528 6.6655 3.13623 6.66699 3.32715V3.33984C6.66547 3.53064 6.59884 3.72179 6.4668 3.87598L4.07422 6.66699H1.87891L4.02246 4.16699H0V2.5H4.02246L1.87988 0H4.07422L6.4668 2.79102Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
