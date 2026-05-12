import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const CardStackIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(2.5, 0.833)">
      <Path
        d="M10.7292 6.54167V4.16667H9.16667V6.54167H10.7292Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M11.6667 2.18557e-07C13.5076 2.99027e-07 15 1.49238 15 3.33333V11.6667C15 13.5076 13.5076 15 11.6667 15H6.66667C4.82572 15 3.33334 13.5076 3.33334 11.6667L3.33334 3.33333C3.33334 1.49238 4.82572 -8.04704e-08 6.66667 0L11.6667 2.18557e-07ZM13.3333 3.33333C13.3333 2.41286 12.5871 1.66667 11.6667 1.66667L6.66667 1.66667C5.74619 1.66667 5 2.41286 5 3.33333L5 11.6667C5 12.5871 5.74619 13.3333 6.66667 13.3333H11.6667C12.5871 13.3333 13.3333 12.5871 13.3333 11.6667V3.33333Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M11.0857 16.6667C10.4374 17.6695 9.30937 18.3333 8.02631 18.3333H4.16667C1.86548 18.3333 -1.00588e-07 16.4678 0 14.1667L3.2055e-07 6.83332C3.75661e-07 5.57253 0.666641 4.46744 1.66667 3.85132L1.66667 14.1667C1.66667 15.5474 2.78596 16.6667 4.16667 16.6667L11.0857 16.6667Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
