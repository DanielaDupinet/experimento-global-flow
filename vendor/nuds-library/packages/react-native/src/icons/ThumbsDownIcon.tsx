import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const ThumbsDownIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(2.259, 2.083)">
      <Path
        d="M12.9815 0V9.16602L9.4454 14.8252C9.05349 15.4523 8.36552 15.833 7.62606 15.833C6.44179 15.8328 5.4816 14.8728 5.48153 13.6885V10.833H3.37509C2.11254 10.833 0.958268 10.1195 0.393641 8.99023L0.351648 8.90625C-0.0935354 8.01555 -0.117131 6.97248 0.287195 6.0625L2.10165 1.97949C2.6366 0.775859 3.83041 0.00016275 5.14755 0H12.9815ZM5.14755 1.66602C4.48906 1.66618 3.89253 2.0545 3.62509 2.65625L1.81063 6.73926C1.60839 7.19433 1.62017 7.71571 1.84286 8.16113L1.88485 8.24512C2.1672 8.8096 2.74392 9.16599 3.37509 9.16602H7.14852V13.6885C7.14859 13.9523 7.36226 14.1658 7.62606 14.166C7.79087 14.166 7.94399 14.0812 8.03134 13.9414L11.3155 8.68848V1.66602H5.14755ZM15.4815 0V9.16602H13.8155V0H15.4815Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
