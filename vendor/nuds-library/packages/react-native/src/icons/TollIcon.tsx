import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const TollIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(1.666, 1.709)">
      <Path
        d="M2.35742 8.25H2.3584V16.583H0V8.25L1.17871 7.07129L2.35742 8.25ZM11.2734 3.25C12.536 3.25 13.6902 3.96349 14.2549 5.09277L15 6.58301H16.667V8.25H15.834V16.583H14.167V14.916H4.16699V13.25H14.167V9.91602H4.16699V8.25H13.9707L12.7646 5.83789C12.4823 5.27325 11.9047 4.91602 11.2734 4.91602H8.04395L9.71094 3.25H11.2734ZM6.25 12.416H4.16699V10.75H6.25V12.416ZM13.334 12.416H10.834V10.75H13.334V12.416ZM4.71484 5.89258L3.53613 7.07129L2.35742 5.89258L3.53613 4.71387L4.71484 5.89258ZM7.07129 3.53613L5.89258 4.71387L4.71484 3.53613L5.89258 2.35742L7.07129 3.53613ZM9.42871 1.17871L8.25 2.35742L7.07129 1.17871L8.25 0L9.42871 1.17871Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
