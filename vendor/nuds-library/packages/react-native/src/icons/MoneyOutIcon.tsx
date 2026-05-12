import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const MoneyOutIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(0.833, 2.5)">
      <Path
        d="M16.6667 7.5V1.66667L1.66667 1.66667L1.66667 10L10 10V11.6667H0V0H18.3333L18.3333 7.5H16.6667Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M11.6667 5.83364C11.6667 7.21435 10.5474 8.33364 9.16667 8.33364C7.78595 8.33364 6.66667 7.21435 6.66667 5.83364C6.66667 4.45293 7.78595 3.33364 9.16667 3.33364C10.5474 3.33364 11.6667 4.45293 11.6667 5.83364ZM9.18944 6.66667H9.9998V5.85224L10 5.83364L9.9998 5.81504V5H8.33313V6.66667H9.14389C9.15146 6.66687 9.15905 6.66697 9.16667 6.66697C9.17428 6.66697 9.18187 6.66687 9.18944 6.66667Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M14.1668 10.9785V15H15.8335V10.9785L18.3333 13.1212V10.9261L15.5425 8.53393C15.3882 8.40169 15.1977 8.33482 15.0067 8.33333H14.9936C14.8027 8.33482 14.6121 8.40169 14.4578 8.53393L11.6667 10.9264V13.1215L14.1668 10.9785Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
