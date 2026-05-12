import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const LinkIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(2.298, 2.298)">
      <Path
        d="M5.93443 13.0055L8.29146 10.6485L9.46997 11.827L7.11294 14.184C5.48576 15.8112 2.84757 15.8112 1.22039 14.184C-0.406796 12.5568 -0.406796 9.91864 1.22039 8.29146L3.57741 5.93443L4.75592 7.11294L2.3989 9.46997C1.42259 10.4463 1.42259 12.0292 2.3989 13.0055C3.37521 13.9818 4.95812 13.9818 5.93443 13.0055Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M11.827 9.46997L10.6485 8.29146L13.0055 5.93443C13.9818 4.95812 13.9818 3.37521 13.0055 2.3989C12.0292 1.42259 10.4463 1.42259 9.46997 2.3989L7.11294 4.75592L5.93443 3.57741L8.29146 1.22039C9.91864 -0.406796 12.5568 -0.406796 14.184 1.22039C15.8112 2.84757 15.8112 5.48576 14.184 7.11294L11.827 9.46997Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M10.6485 3.57741L3.57741 10.6485L4.75592 11.827L11.827 4.75592L10.6485 3.57741Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
