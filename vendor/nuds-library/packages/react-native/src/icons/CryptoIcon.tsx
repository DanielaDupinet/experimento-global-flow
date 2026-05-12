import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const CryptoIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(1.667, 1.667)">
      <Path
        d="M8.33301 0C12.9354 1.12753e-07 16.666 3.73063 16.666 8.33301C16.666 12.9354 12.9354 16.666 8.33301 16.666C3.73063 16.666 1.12749e-07 12.9354 0 8.33301C0 3.73063 3.73063 0 8.33301 0ZM8.33301 1.66602C4.65111 1.66602 1.66602 4.65111 1.66602 8.33301C1.66602 12.0149 4.65111 15 8.33301 15C12.0149 15 15 12.0149 15 8.33301C15 4.65111 12.0149 1.66602 8.33301 1.66602ZM7.80469 5.75098L9.24805 4.91797L10.0811 6.36133L7.22363 8.01074C6.79527 8.25824 6.66766 8.78121 6.88965 9.16602C7.11187 9.55092 7.62896 9.70159 8.05762 9.4541L10.915 7.80469L11.748 9.24805L10.3047 10.0811L11.1377 11.5244L9.69434 12.3584L8.86133 10.915L8.89062 10.8975C7.69252 11.5892 6.14461 11.2092 5.44629 10C4.74804 8.7906 5.19245 7.25916 6.39062 6.56738L6.36133 6.58496L5.52832 5.1416L6.97168 4.30762L7.80469 5.75098Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
