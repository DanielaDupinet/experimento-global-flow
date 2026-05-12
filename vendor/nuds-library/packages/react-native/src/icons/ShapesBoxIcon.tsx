import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const ShapesBoxIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(1.666, 1.667)">
      <Path
        d="M16.667 9.16602H15.834V16.666H0.833984V9.16602H0V7.5H16.667V9.16602ZM2.5 15H14.167V9.16602H2.5V15ZM7.5 6.66602H5.83398V5H4.16699V6.66602H2.5V3.33301H7.5V6.66602ZM11.835 3.33301C12.1135 3.33301 12.3738 3.47233 12.5283 3.7041L14.5029 6.66602H12.5L11.835 5.66895L11.1699 6.66602H9.16699L11.1416 3.7041C11.2961 3.47233 11.5564 3.33309 11.835 3.33301ZM8.33398 0C9.71455 0.000176033 10.834 1.1194 10.834 2.5C10.8339 2.79208 10.7835 3.07246 10.6914 3.33301H9.16699V2.5C9.16699 2.03987 8.79407 1.66619 8.33398 1.66602C7.87375 1.66602 7.5 2.03976 7.5 2.5H5.83398C5.83398 1.11929 6.95327 0 8.33398 0Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
