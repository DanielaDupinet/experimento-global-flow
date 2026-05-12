import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const SnowflakeIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(1.666, 1.667)">
      <Path
        d="M9.16699 0V3.4043L11.9111 0.660156L13.0898 1.83887L9.16699 5.76172V7.5H10.9053L14.8281 3.57715L16.0059 4.75586L13.2617 7.5H16.667V9.16602H13.2617L16.0059 11.9102L14.8281 13.0889L10.9053 9.16602H9.16699V10.9043L13.0898 14.8271L11.9111 16.0059L9.16699 13.2617V16.666H7.5V13.2617L4.75586 16.0059L3.57812 14.8271L7.5 10.9043V9.16602H5.7627L1.83984 13.0889L0.661133 11.9102L3.40527 9.16602H0V7.5H3.40527L0.661133 4.75586L1.83984 3.57715L5.7627 7.5H7.5V5.76172L3.57812 1.83887L4.75684 0.660156L7.5 3.4043V0H9.16699Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
