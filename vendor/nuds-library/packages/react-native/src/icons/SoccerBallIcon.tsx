import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const SoccerBallIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(1.334, 1.334)">
      <Path
        d="M8.66602 0C13.4525 0 17.333 3.88052 17.333 8.66699C17.3328 13.4533 13.4523 17.333 8.66602 17.333C3.87987 17.3328 0.000220191 13.4531 0 8.66699C0 3.88066 3.87973 0.000219621 8.66602 0ZM8.66602 3.3623L6.54297 1.81934C5.10901 2.26354 3.86792 3.14661 2.97559 4.31055L3.81348 6.88867L1.5 8.56836C1.49957 8.60089 1.5 8.63436 1.5 8.66699C1.50008 10.1168 1.93068 11.4659 2.6709 12.5938H5.66699L6.62305 15.5381C7.27034 15.7302 7.95636 15.833 8.66602 15.833C9.37568 15.833 10.0617 15.7302 10.709 15.5381L11.666 12.5938H14.6621C15.4023 11.4659 15.8329 10.1168 15.833 8.66699C15.833 8.63436 15.8325 8.60089 15.832 8.56836L13.5195 6.88867L14.3574 4.31055C13.4651 3.14664 12.2239 2.26355 10.79 1.81934L8.66602 3.3623ZM11.9258 7.44043L10.6807 11.2725H6.65234L5.40723 7.44043L8.66602 5.07324L11.9258 7.44043Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
