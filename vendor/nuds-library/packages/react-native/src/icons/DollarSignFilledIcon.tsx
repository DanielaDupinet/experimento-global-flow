import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const DollarSignFilledIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(4.047, 0.833)">
      <Path
        d="M6.91699 1.7627C9.24647 1.9333 11.0838 3.87701 11.084 6.25H8.75C8.74982 5.05364 7.78034 4.08416 6.58398 4.08398H4.5752C3.72663 4.08398 3.01969 4.73444 2.94922 5.58008C2.88165 6.39287 3.4246 7.13045 4.2207 7.30762L8.73926 8.31152C11.6043 8.94844 12.8554 12.3315 11.0947 14.6797C10.1961 15.8778 8.78576 16.5838 7.28809 16.584H6.91699V18.334H4.58398V16.5723C2.024 16.4009 0 14.2704 0 11.667H2.33398C2.33398 13.0937 3.49026 14.25 4.91699 14.25H7.28809C8.05122 14.2499 8.76958 13.8907 9.22754 13.2803C9.97162 12.2882 9.44302 10.8589 8.23242 10.5898L3.71484 9.58594C1.77937 9.15579 0.459368 7.3616 0.624023 5.38574C0.795388 3.33088 2.51317 1.75 4.5752 1.75H4.58398V0H6.91699V1.7627Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
