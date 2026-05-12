import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const SendIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(0.963, 5.496)">
      <Path
        d="M1.49613 0.140426L1.40702 0L0 0.893347C0.0499002 0.97194 0.100466 1.05188 0.151776 1.13299C0.582185 1.81341 1.06512 2.57687 1.6471 3.32458L0.114255 4.85742L1.29277 6.03593L2.75329 4.57541C3.50944 5.31749 4.40809 5.97829 5.50556 6.43946L4.90224 8.55107L6.50478 9.00894L7.09954 6.92727C7.69539 7.0474 8.33929 7.11334 9.03684 7.11334C9.7344 7.11334 10.3783 7.0474 10.9741 6.92727L11.5689 9.00894L13.1714 8.55107L12.5681 6.43946C13.6656 5.97829 14.5643 5.31749 15.3204 4.57541L16.7809 6.03593L17.9594 4.85742L16.4266 3.32458C17.0086 2.57687 17.4914 1.81363 17.9218 1.13322C17.9731 1.05203 18.0237 0.972013 18.0737 0.893347L16.6667 0L16.5776 0.140423C14.9851 2.65088 13.2116 5.44667 9.03684 5.44667C4.86208 5.44667 3.0886 2.65088 1.49613 0.140426Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
