import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const ShieldPhoneIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(1, -0)">
      <Path
        d="M10.2305 11.2461C10.5586 10.918 11.0908 10.9181 11.4189 11.2461L12.8135 12.6406C13.2108 13.038 13.1714 13.6929 12.7295 14.04L11.6455 14.8916C11.894 16.1339 12.8651 17.106 14.1074 17.3545L14.96 16.2705C15.3072 15.8287 15.962 15.7892 16.3594 16.1865L17.7539 17.5811C18.0819 17.9092 18.082 18.4414 17.7539 18.7695C16.4751 20.0483 14.5209 20.3654 12.9033 19.5566L12.374 19.291C11.8011 19.0045 11.2781 18.6277 10.8252 18.1748C10.3723 17.7219 9.99547 17.1989 9.70898 16.626L9.44336 16.0967C8.63457 14.4791 8.95173 12.5249 10.2305 11.2461ZM16 4V10H14V5.23633L8 2.23633L2 5.23633V11.5C2 13.1303 2.50274 14.1202 3.51172 15.0908C4.34635 15.8937 5.47303 16.6359 7 17.5654V19.9014C2.60273 17.2696 0 15.6153 0 11.5V4L8 0L16 4Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
