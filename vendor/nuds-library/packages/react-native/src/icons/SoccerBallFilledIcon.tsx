import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const SoccerBallFilledIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(1.084, 1.084)">
      <Path
        d="M8.91602 0C13.8406 0 17.833 3.99245 17.833 8.91699C17.8328 13.8413 13.8404 17.833 8.91602 17.833C3.9918 17.8328 0.000220109 13.8412 0 8.91699C0 3.99259 3.99166 0.000219704 8.91602 0ZM8.91602 3.92188L6.74902 2.34668C5.4574 2.77261 4.33331 3.56858 3.50391 4.60938L4.35742 7.23438L2 8.94629C2.0057 10.2862 2.39265 11.5364 3.05762 12.5938H6.09863L7.07031 15.584C7.65789 15.7463 8.27681 15.833 8.91602 15.833C9.5554 15.833 10.175 15.7464 10.7627 15.584L11.7344 12.5938H14.7754C15.4404 11.5364 15.8273 10.2862 15.833 8.94629L13.4756 7.23438L14.3281 4.60938C13.4987 3.56868 12.3755 2.77258 11.084 2.34668L8.91602 3.92188ZM12.4697 7.5957L11.1123 11.7725H6.7207L5.36328 7.5957L8.91602 5.01367L12.4697 7.5957Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
