import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const WalletIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(1.666, 2.917)">
      <Path
        d="M15 0V3.33301H16.667V14.167H3.33398C1.49304 14.167 0 12.674 0 10.833V2.5C6.44123e-08 1.1194 1.11944 0.000175881 2.5 0H15ZM1.66699 5V10.833C1.66699 11.7535 2.41351 12.5 3.33398 12.5H15V5H1.66699ZM12.5 6.66699V8.33301H10V6.66699H12.5ZM2.5 1.66699C2.03991 1.66717 1.66699 2.03987 1.66699 2.5C1.66699 2.96013 2.03991 3.33283 2.5 3.33301H13.334V1.66699H2.5Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
