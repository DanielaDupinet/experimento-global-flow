import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const CarGlassSparkIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(1.666, 2.083)">
      <Path
        d="M15 1.66602C15.9204 1.66602 16.6669 2.41261 16.667 3.33301V8.28027C16.6681 8.2976 16.6689 8.31541 16.6689 8.33301C16.6689 8.35066 16.6681 8.36836 16.667 8.38574V15.833H1.66699V8.71094C1.6671 8.23047 1.87473 7.77343 2.23633 7.45703L7.67578 2.69727C8.43532 2.03271 9.4107 1.66602 10.4199 1.66602H15ZM3.33398 14.166H15V9.16602H3.33398V14.166ZM13.334 12.5H10V10.833H13.334V12.5ZM10.4199 3.33301C9.81436 3.33301 9.22917 3.55339 8.77344 3.95215L4.71875 7.5H15V3.33301H10.4199ZM3.14258 1.57129L4.71387 2.35645L3.14258 3.14258L2.35742 4.71387L1.57129 3.14258L0 2.35645L1.57129 1.57129L2.35742 0L3.14258 1.57129Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
