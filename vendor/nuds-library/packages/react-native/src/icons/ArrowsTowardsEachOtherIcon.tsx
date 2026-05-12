import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const ArrowsTowardsEachOtherIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(1.667, 0.833)">
      <Path
        d="M7.84473 13.334H16.666V15.001H7.84473L11.1777 18.334H8.82129L5.24414 14.7559C4.9187 14.4304 4.9187 13.9036 5.24414 13.5781L8.82129 10H11.1777L7.84473 13.334ZM11.4229 3.57812C11.7479 3.90349 11.7479 4.43049 11.4229 4.75586L7.8457 8.33398H5.48828L8.82129 5H0V3.33301H8.82129L5.48828 0H7.8457L11.4229 3.57812Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
