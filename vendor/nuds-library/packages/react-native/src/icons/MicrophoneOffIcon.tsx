import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const MicrophoneOffIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(0.488, 1.667)">
      <Path
        d="M19.0237 16.6667H16.6667L13.5999 13.5999C12.6778 14.3167 11.5624 14.7966 10.3452 14.9484V16.6667H8.67851V14.9484C5.38992 14.5383 2.84518 11.733 2.84518 8.33333H4.51185C4.51185 11.0948 6.75042 13.3333 9.51185 13.3333C10.5917 13.3333 11.5916 12.991 12.409 12.409L11.2052 11.2052C10.7089 11.4984 10.13 11.6667 9.51185 11.6667C7.6709 11.6667 6.17851 10.1743 6.17851 8.33333V6.17851L0 0H2.35702L19.0237 16.6667ZM7.84518 7.84518V8.33333C7.84518 9.25381 8.59137 10 9.51185 10C9.66114 10 9.80586 9.98037 9.94355 9.94355L7.84518 7.84518Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M6.50524 1.8923L7.84803 3.23508C7.89888 2.36034 8.62435 1.66667 9.51185 1.66667C10.4323 1.66667 11.1785 2.41286 11.1785 3.33333V6.56557L12.8452 8.23223V3.33333C12.8452 1.49238 11.3528 0 9.51185 0C8.18705 0 7.04275 0.772855 6.50524 1.8923Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M15.6205 11.0075L14.3206 9.70765C14.4452 9.271 14.5118 8.80996 14.5118 8.33333H16.1785C16.1785 9.28439 15.9794 10.1889 15.6205 11.0075Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
