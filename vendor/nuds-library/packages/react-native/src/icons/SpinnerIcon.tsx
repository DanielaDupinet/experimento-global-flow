import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const SpinnerIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(4.583, 4.583)">
      <Path
        d="M0 0.833333C0 0.373096 0.373096 0 0.833333 0C2.14655 0 3.44691 0.258658 4.66017 0.761205C5.87342 1.26375 6.97582 2.00035 7.9044 2.92893C8.83299 3.85752 9.56958 4.95991 10.0721 6.17317C10.5747 7.38642 10.8333 8.68678 10.8333 10C10.8333 10.4602 10.4602 10.8333 10 10.8333C9.53976 10.8333 9.16667 10.4602 9.16667 10C9.16667 8.90565 8.95112 7.82202 8.53233 6.81097C8.11354 5.79992 7.49971 4.88126 6.72589 4.10744C5.95207 3.33362 5.03341 2.71979 4.02236 2.301C3.01132 1.88221 1.92768 1.66667 0.833334 1.66667C0.373096 1.66667 7.94729e-07 1.29357 0 0.833333Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
