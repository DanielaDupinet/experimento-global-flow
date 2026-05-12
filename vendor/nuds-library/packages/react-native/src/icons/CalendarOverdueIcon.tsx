import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const CalendarOverdueIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(2.5, 1.25)">
      <Path
        d="M4.16667 0V1.66667H10.8333V0H12.5V1.66667H15V9.16667H13.3333V6.66667H1.66667V15H9.16667V16.6667H0V1.66667H2.5V0H4.16667ZM13.3333 5V3.33333H1.66667V5H13.3333Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M14.1667 15V10.8333H12.5V15H14.1667Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M12.5 15.8333H14.1667V17.5H12.5V15.8333Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
