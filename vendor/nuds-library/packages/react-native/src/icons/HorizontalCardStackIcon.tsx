import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const HorizontalCardStackIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(0.833, 2.5)">
      <Path
        d="M1.66699 10.833C1.66699 12.2137 2.78629 13.333 4.16699 13.333H14.4824C13.8663 14.333 12.7608 15 11.5 15H4.16699C1.86581 15 0 13.1342 0 10.833V6.97363C2.06973e-05 5.6906 0.664118 4.56237 1.66699 3.91406V10.833ZM15 0C16.8408 0 18.3338 1.49221 18.334 3.33301V8.33301C18.334 10.174 16.8409 11.667 15 11.667H6.66699C4.82604 11.667 3.33398 10.174 3.33398 8.33301V3.33301C3.33416 1.49221 4.82615 0 6.66699 0H15ZM6.66699 1.66699C5.74663 1.66699 5.00018 2.41269 5 3.33301V8.33301C5 9.25348 5.74652 10 6.66699 10H15C15.9205 10 16.667 9.25348 16.667 8.33301V3.33301C16.6668 2.41269 15.9204 1.66699 15 1.66699H6.66699ZM14.167 7.5H11.667V5.83301H14.167V7.5Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
