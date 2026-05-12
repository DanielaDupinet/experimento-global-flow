import React from "react";
import Svg, { Path } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const AddToWalletIcon = ({ size = 24, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const iconColor = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path
            d="M14.0527 1.88989C19.5623 7.4086 19.5628 16.3505 14.0518 21.8616L12.6377 20.4465C17.3669 15.7172 17.3682 8.04153 12.6377 3.30298L12.748 3.19263L13.9424 2.00024L14.0527 1.88989ZM10.6787 5.26392C14.3235 8.91814 14.3247 14.8395 10.6777 18.4866L9.26367 17.0725C12.1285 14.2075 12.1298 9.55161 9.2627 6.677L9.37402 6.56665L10.5684 5.37524L10.6787 5.26392ZM7.30371 8.63794C9.09317 10.4275 9.09653 13.3315 7.30176 15.1155L5.8916 13.6965C6.89725 12.6969 6.90042 11.0629 5.88965 10.052L6 9.94067L7.19336 8.74829L7.30371 8.63794Z"
            fill={iconColor}
          />
        </Svg>
  );
};
