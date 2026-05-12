import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const PortfolioIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(1.687, 1.318)">
      <Path
        d="M8.29219 0.73856C3.97106 0.73856 0.418104 4.02746 0 8.23856H1.6771C2.08718 4.94997 4.89251 2.40523 8.29219 2.40523V0.73856Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M14.9589 9.07189C14.9589 12.4716 12.4141 15.2769 9.12552 15.687V17.3641C13.3366 16.946 16.6255 13.393 16.6255 9.07189H14.9589Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M1.6771 9.90523H0C0.390891 13.8422 3.52184 16.9732 7.45885 17.3641V15.687C4.44326 15.3109 2.05314 12.9208 1.6771 9.90523Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M12.3676 2.25C12.2291 2.25 12.1098 2.34778 12.0826 2.48362C12.0508 2.64296 12.1557 2.79747 12.3156 2.82654L14.3567 3.19765C15.3418 3.37675 15.9886 4.32878 15.7922 5.31055C15.6248 6.14753 14.8899 6.75 14.0364 6.75H13.7643V7.5H12.2643V6.75H10.5766V5.25H14.0364C14.1749 5.25 14.2942 5.15222 14.3214 5.01638C14.3532 4.85704 14.2483 4.70253 14.0884 4.67346L12.0473 4.30235C11.0622 4.12324 10.4154 3.17122 10.6118 2.18945C10.7724 1.38643 11.4553 0.799277 12.2643 0.752951V0H13.7643V0.75H15.0766V2.25H12.3676Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
