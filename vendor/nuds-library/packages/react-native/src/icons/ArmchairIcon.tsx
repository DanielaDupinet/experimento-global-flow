import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const ArmchairIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(1.667, 1.667)">
      <Path
        d="M3.33333 3.33333V5.14225C3.07268 5.05013 2.7922 5 2.5 5C1.11929 5 0 6.11929 0 7.5V10C0 11.8409 1.49238 13.3333 3.33333 13.3333H7.5V15H3.33333V16.6667H13.3333V15H9.16667V13.3333H13.3333C15.1743 13.3333 16.6667 11.8409 16.6667 10V7.5C16.6667 6.11929 15.5474 5 14.1667 5C13.8745 5 13.594 5.05013 13.3333 5.14225V3.33333C13.3333 1.49238 11.8409 0 10 0H6.66667C4.82572 0 3.33333 1.49238 3.33333 3.33333ZM10 1.66667C10.9205 1.66667 11.6667 2.41286 11.6667 3.33333V8.33333H5V3.33333C5 2.41286 5.74619 1.66667 6.66667 1.66667H10ZM2.5 6.66667C2.96024 6.66667 3.33333 7.03976 3.33333 7.5V10H13.3333V7.5C13.3333 7.03976 13.7064 6.66667 14.1667 6.66667C14.6269 6.66667 15 7.03976 15 7.5V10C15 10.9205 14.2538 11.6667 13.3333 11.6667H3.33333C2.41286 11.6667 1.66667 10.9205 1.66667 10V7.5C1.66667 7.03976 2.03976 6.66667 2.5 6.66667Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
