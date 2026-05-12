import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const BarCodeShareIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(1.667, 2.917)">
      <Path
        d="M12.5 9.9873C14.801 9.98748 16.666 11.8493 16.666 14.1455V14.166L15 14.1455C15 12.7678 13.8806 11.6506 12.5 11.6504C11.1193 11.6504 10 12.7677 10 14.1455H8.33301C8.33301 11.8492 10.1988 9.9873 12.5 9.9873ZM12.5 4.16602C13.8806 4.16619 15 5.28345 15 6.66113C15 8.03877 13.8805 9.1551 12.5 9.15527C11.1193 9.15527 10 8.03888 10 6.66113C10 5.28335 11.1193 4.16602 12.5 4.16602ZM1.66602 0V8.33301H0V0H1.66602ZM6.66602 0V8.33301H3.33301V0H6.66602ZM11.666 7.49219H13.333V5.8291H11.666V7.49219ZM10 0V3.33301C8.98804 4.09312 8.33311 5.30297 8.33301 6.66602V0H10ZM15 3.33301C14.3037 2.80999 13.4379 2.50007 12.5 2.5C12.2146 2.5 11.9353 2.52835 11.666 2.58301V0H15V3.33301Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
