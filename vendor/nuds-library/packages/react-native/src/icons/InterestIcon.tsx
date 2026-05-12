import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const InterestIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(2.129, 2.5)">
      <Path
        d="M15.7423 0L2.24227 15H0L13.5 0H15.7423Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M3.70443 6.66667C5.54538 6.66667 7.03776 5.17428 7.03776 3.33333C7.03776 1.49238 5.54538 0 3.70443 0C1.86348 0 0.371094 1.49238 0.371094 3.33333C0.371094 5.17428 1.86348 6.66667 3.70443 6.66667ZM3.70443 5C2.78395 5 2.03776 4.25381 2.03776 3.33333C2.03776 2.41286 2.78395 1.66667 3.70443 1.66667C4.6249 1.66667 5.37109 2.41286 5.37109 3.33333C5.37109 4.25381 4.6249 5 3.70443 5Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M15.3711 11.6667C15.3711 13.5076 13.8787 15 12.0378 15C10.1968 15 8.70443 13.5076 8.70443 11.6667C8.70443 9.82572 10.1968 8.33333 12.0378 8.33333C13.8787 8.33333 15.3711 9.82572 15.3711 11.6667ZM13.7044 11.6667C13.7044 10.7462 12.9582 10 12.0378 10C11.1173 10 10.3711 10.7462 10.3711 11.6667C10.3711 12.5871 11.1173 13.3333 12.0378 13.3333C12.9582 13.3333 13.7044 12.5871 13.7044 11.6667Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
