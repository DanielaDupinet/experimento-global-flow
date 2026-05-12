import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const AddIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(1.51, 1.795)">
      <Path
        d="M9.7897 7.36698L13.4977 7.36016L10.252 9.63501L11.5446 13.3477L8.49023 11.1424L5.43586 13.3477L6.72843 9.63501L3.48276 7.36016L7.19075 7.36698L8.49021 3.46856L9.7897 7.36698ZM5.99022 5.6981L0.836453 5.68862C0.0211637 5.68712 -0.311006 6.73643 0.356628 7.20436L4.74022 10.2768L2.99219 15.2978C2.72426 16.0674 3.60634 16.7244 4.26701 16.2474L8.49022 13.1981L12.7134 16.2474C13.3741 16.7244 14.2561 16.0674 13.9882 15.2978L12.2402 10.2768L16.6238 7.20436C17.2914 6.73642 16.9592 5.68712 16.144 5.68862L10.9902 5.6981L9.28077 0.569807C9.02752 -0.189939 7.95288 -0.189934 7.69963 0.569814L5.99022 5.6981Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
