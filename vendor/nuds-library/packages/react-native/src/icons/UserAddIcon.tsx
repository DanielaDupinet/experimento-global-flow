import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const UserAddIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(2.083, 1.25)">
      <Path
        d="M6.66667 8.33333C8.96785 8.33333 10.8333 6.46785 10.8333 4.16667C10.8333 1.86548 8.96785 0 6.66667 0C4.36548 0 2.5 1.86548 2.5 4.16667C2.5 6.46785 4.36548 8.33333 6.66667 8.33333ZM6.66667 6.66667C5.28595 6.66667 4.16667 5.54738 4.16667 4.16667C4.16667 2.78595 5.28595 1.66667 6.66667 1.66667C8.04738 1.66667 9.16667 2.78595 9.16667 4.16667C9.16667 5.54738 8.04738 6.66667 6.66667 6.66667Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M5.74694 11.752C6.81583 11.552 7.92079 11.7058 8.89434 12.1903L9.6369 10.6982C8.71211 10.238 7.69839 10.0015 6.67649 10H6.65674C6.25081 10.0006 5.84366 10.0383 5.44036 10.1138C4.01518 10.3805 2.7158 11.1045 1.73918 12.1762C0.762553 13.2479 0.161934 14.6087 0.0283581 16.0525C0.00940561 16.2573 2.1855e-06 16.4623 0 16.6667H1.66667C1.66667 16.5134 1.67372 16.3597 1.68794 16.206C1.78812 15.1232 2.23858 14.1026 2.97105 13.2988C3.70352 12.4951 4.67805 11.952 5.74694 11.752Z"
        fill={fill}
        fillOpacity={opacity}
      />
      <Path
        d="M11.6667 17.5V15H9.16667V13.3333H11.6667V10.8333H13.3333V13.3333H15.8333V15H13.3333V17.5H11.6667Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
