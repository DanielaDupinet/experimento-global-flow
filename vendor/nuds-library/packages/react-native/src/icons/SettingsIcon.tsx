import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const SettingsIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(1.667, 2.75)">
      <Path
        d="M11.6667 7.25C11.6667 9.09095 10.1743 10.5833 8.33333 10.5833C6.49238 10.5833 5 9.09095 5 7.25C5 5.40905 6.49238 3.91667 8.33333 3.91667C10.1743 3.91667 11.6667 5.40905 11.6667 7.25ZM10 7.25C10 6.32953 9.25381 5.58333 8.33333 5.58333C7.41286 5.58333 6.66667 6.32953 6.66667 7.25C6.66667 8.17047 7.41286 8.91667 8.33333 8.91667C9.25381 8.91667 10 8.17047 10 7.25Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M16.6667 7.25L14.612 10.875L12.5 14.4669L8.33333 14.5L4.16667 14.4669L2.05465 10.875L0 7.25L2.05465 3.625L4.16667 0.033121L8.33333 0L12.5 0.0331213L14.612 3.625L16.6667 7.25ZM13.1686 4.45836L11.5421 1.69223L8.33333 1.66672L5.12455 1.69223L3.49806 4.45838L1.91577 7.25L3.49805 10.0416L5.12455 12.8078L8.33333 12.8333L11.5421 12.8078L13.1686 10.0416L14.7509 7.25L13.1686 4.45836Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
