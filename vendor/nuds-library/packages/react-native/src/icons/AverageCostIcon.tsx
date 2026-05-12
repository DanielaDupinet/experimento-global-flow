import React from "react";
import Svg, { Path } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const AverageCostIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const iconColor = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
          <Path 
            d="M10.625 2.91699C12.9261 2.91699 14.7918 4.78197 14.792 7.08301H13.125C13.1248 5.70245 12.0056 4.58301 10.625 4.58301H8.61621C7.59448 4.58312 6.74321 5.36658 6.6582 6.38477C6.5766 7.36397 7.23123 8.25364 8.19043 8.4668L12.708 9.4707C15.3369 10.0551 16.485 13.159 14.8691 15.3135C14.0334 16.4276 12.7219 17.083 11.3291 17.083H10.625V19.167H8.95801V17.083C6.42685 17.0828 4.375 15.0312 4.375 12.5H6.04199C6.04199 14.1107 7.34733 15.4168 8.95801 15.417H11.3291C12.1973 15.417 13.0152 15.008 13.5361 14.3135C14.4254 13.1278 13.7934 11.4195 12.3467 11.0977L7.8291 10.0938C6.05644 9.69982 4.84648 8.05668 4.99707 6.24707C5.15392 4.36492 6.72756 2.9171 8.61621 2.91699H8.95801V0.833008H10.625V2.91699Z" 
            fill={iconColor}
          />
        </Svg>
  );
};
