import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const RequestMoneyIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(1.667, 1.25)">
      <Path
        d="M9.16627 3.33333H7.49961V4.16995C6.60075 4.22142 5.84188 4.87381 5.66343 5.76605C5.44526 6.85691 6.16394 7.91472 7.25846 8.11372L9.52635 8.52606C9.70399 8.55836 9.82063 8.73004 9.78522 8.90709C9.75504 9.05802 9.62251 9.16667 9.46859 9.16667H5.83335V10.8333H7.49961V11.6667H9.16627V10.8333H9.46859C10.417 10.8333 11.2335 10.1639 11.4195 9.23395C11.6377 8.14308 10.919 7.08528 9.82449 6.88628L7.5566 6.47394C7.37896 6.44164 7.26232 6.26996 7.29773 6.09291C7.32792 5.94198 7.46044 5.83333 7.61437 5.83333H10.8333V4.16667H9.16627V3.33333Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M11.6667 15L16.6667 17.5V3.33333C16.6667 1.49238 15.1743 0 13.3333 0H3.33333C1.49238 0 0 1.49238 0 3.33333V11.6667C0 13.5076 1.49238 15 3.33333 15H11.6667ZM15 14.8033L12.0601 13.3333H3.33333C2.41286 13.3333 1.66667 12.5871 1.66667 11.6667V3.33333C1.66667 2.41286 2.41286 1.66667 3.33333 1.66667H13.3333C14.2538 1.66667 15 2.41286 15 3.33333V14.8033Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
