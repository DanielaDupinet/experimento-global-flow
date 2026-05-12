import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const MoneyStackIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(0.833, 3.333)">
      <Path
        d="M12.5 5C12.5 5.92047 11.7538 6.66667 10.8333 6.66667C9.91286 6.66667 9.16667 5.92047 9.16667 5C9.16667 4.07953 9.91286 3.33333 10.8333 3.33333C11.7538 3.33333 12.5 4.07953 12.5 5Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M18.3333 0H3.33333L3.33333 10L18.3333 10V0ZM16.6667 8.33333L5 8.33333L5 1.66667L16.6667 1.66667V8.33333Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M0 2.5V13.3333H15.8333V11.6667H1.66667V2.5H0Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
