import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const HorizontalCardCollateralIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(1.667, 2.917)">
      <Path
        d="M13.333 0.833008C15.174 0.833008 16.666 2.32604 16.666 4.16699V10.833C16.666 12.674 15.174 14.167 13.333 14.167H3.33301C1.49206 14.167 0 12.674 0 10.833V10H1.66602V10.833C1.66602 11.7535 2.41253 12.5 3.33301 12.5H13.333C14.2535 12.5 15 11.7535 15 10.833V4.16699C15 3.24652 14.2535 2.5 13.333 2.5H6.66602V0.833008H13.333ZM12.5 7.5V9.16699H10V7.5H12.5ZM3.54199 0.833008H5V2.5H1.98926C1.8355 2.50019 1.70301 2.60896 1.67285 2.75977C1.63759 2.93666 1.7542 3.10823 1.93164 3.14062L4.2002 3.55273C5.29443 3.75189 6.01292 4.80973 5.79492 5.90039C5.60893 6.83036 4.79214 7.5 3.84375 7.5H3.54199V8.33301H1.875V7.5H0V5.83301H3.84375C3.9975 5.83301 4.12977 5.72488 4.16016 5.57422C4.19556 5.39717 4.07901 5.22468 3.90137 5.19238L1.63379 4.78027C0.539268 4.58127 -0.17911 3.52348 0.0390625 2.43262C0.217571 1.54046 0.976198 0.888384 1.875 0.836914V0H3.54199V0.833008Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
