import React from "react";
import Svg, { Path } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const FreezeIcon = ({ size = 24, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const iconColor = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path
            d="M13.1538 2V6.08594L16.4468 2.79297L17.8608 4.20703L13.1538 8.91406V11H15.2397L19.9468 6.29297L21.3608 7.70703L18.0679 11H22.1538V13H18.0679L21.3608 16.293L19.9468 17.707L15.2397 13H13.1538V15.0859L17.8608 19.793L16.4468 21.207L13.1538 17.9141V22H11.1538V17.9141L7.86084 21.207L6.44678 19.793L11.1538 15.0859V13H9.06787L4.36084 17.707L2.94678 16.293L6.23975 13H2.15381V11H6.23975L2.94678 7.70703L4.36084 6.29297L9.06787 11H11.1538V8.91406L6.44678 4.20703L7.86084 2.79297L11.1538 6.08594V2H13.1538Z"
            fill={iconColor}
          />
        </Svg>
  );
};
