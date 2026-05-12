import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const CarPlateIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(1.666, 4.167)">
      <Path
        d="M11.667 0V1.66602H13.334V0C15.1748 0.000132126 16.667 1.49214 16.667 3.33301V8.33301C16.667 10.1739 15.1748 11.6659 13.334 11.666H3.33398C1.49304 11.666 0 10.174 0 8.33301V3.33301C0 1.49206 1.49304 0 3.33398 0V1.66602H5V0H11.667ZM1.66699 3.33301V8.33301C1.66699 9.25348 2.41351 10 3.33398 10H13.334C14.2543 9.99987 15 9.2534 15 8.33301V3.33301H1.66699ZM5 8.33301H3.33398V5H5V8.33301ZM7.5 8.33301H5.83398V5H7.5V8.33301ZM10.834 8.33301H9.16699V5H10.834V8.33301ZM13.334 8.33301H11.667V5H13.334V8.33301Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
