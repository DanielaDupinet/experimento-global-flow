import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const AnticipateInstallmentsIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(0.833, 2.917)">
      <Path
        d="M3.33333 0V2.40112C4.84138 0.87414 6.88859 0 9.16667 0C12.337 0 15.1217 1.87227 16.57 4.61038L15.0967 5.38962C13.9072 3.14072 11.6578 1.66667 9.16667 1.66667C7.07007 1.66667 5.23063 2.57959 3.99838 4.16667H7.08333V5.83333H2.5C2.03976 5.83333 1.66667 5.46024 1.66667 5V0H3.33333Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M11.6667 11.6667C11.6667 13.0474 10.5474 14.1667 9.16667 14.1667C7.78595 14.1667 6.66667 13.0474 6.66667 11.6667C6.66667 10.286 7.78595 9.16667 9.16667 9.16667C10.5474 9.16667 11.6667 10.286 11.6667 11.6667ZM8.33333 10.8333V12.5H10V10.8333H8.33333Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M15.8333 14.1667C17.214 14.1667 18.3333 13.0474 18.3333 11.6667C18.3333 10.286 17.214 9.16667 15.8333 9.16667C14.4526 9.16667 13.3333 10.286 13.3333 11.6667C13.3333 13.0474 14.4526 14.1667 15.8333 14.1667ZM16.6667 10.8333V12.5H15V10.8333H16.6667Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M5 11.6667C5 13.0474 3.88071 14.1667 2.5 14.1667C1.11929 14.1667 0 13.0474 0 11.6667C0 10.286 1.11929 9.16667 2.5 9.16667C3.88071 9.16667 5 10.286 5 11.6667ZM1.66667 10.8333V12.5H3.33333V10.8333H1.66667Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
