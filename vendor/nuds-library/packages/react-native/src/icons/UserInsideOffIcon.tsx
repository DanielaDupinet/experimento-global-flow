import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const UserInsideOffIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(0.488, 1.667)">
      <Path
        d="M19.0234 16.666H16.666L15.833 15.833H2.01172V5L3.80469 3.80469L0 0H2.35645L19.0234 16.666ZM3.67871 5.8916V14.166H4.7959C5.48236 12.2241 7.33477 10.833 9.51172 10.833C10.0617 10.833 10.591 10.9219 11.0859 11.0859L9.96484 9.96484C9.81721 9.98788 9.66582 9.99999 9.51172 10C7.90089 10 6.59473 8.69384 6.59473 7.08301C6.59473 6.92888 6.60685 6.77755 6.62988 6.62988L5.00586 5.00586L3.67871 5.8916ZM9.51172 12.5C8.27798 12.5 7.2004 13.1698 6.62402 14.166H12.3994C11.8231 13.1697 10.7454 12.5 9.51172 12.5ZM17.0117 5V12.3984L15.3447 10.7314V5.8916L9.51172 2.00293L7.77441 3.16113L6.57227 1.95898L9.51172 0L17.0117 5ZM9.51172 4.16602C11.1225 4.16609 12.4287 5.47222 12.4287 7.08301C12.4287 7.3092 12.4022 7.52982 12.3535 7.74121L8.85352 4.24121C9.06491 4.19248 9.28552 4.16602 9.51172 4.16602Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
