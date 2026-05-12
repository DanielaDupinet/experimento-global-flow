import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { useNuDSTheme } from "../theme";
import type { IconProps } from "./types";

export const ThumbsUpIcon = ({ size = 20, color, opacity = 1 }: IconProps) => {
  const theme = useNuDSTheme();
  const fill = color ?? theme.color.content.default;

  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G transform="translate(2.259, 2.083)">
      <Path
        d="M1.66602 6.66602V15.833H0V6.66602H1.66602ZM7.85547 0C9.03972 0.000245951 10 0.96022 10 2.14453V5H12.1064C13.3689 5.00008 14.5233 5.71356 15.0879 6.84277L15.1299 6.92578C15.5753 7.81665 15.5988 8.86033 15.1943 9.77051L13.3799 13.8535C12.8449 15.0573 11.6503 15.833 10.333 15.833H2.5V6.66602L6.03613 1.00781C6.42804 0.380754 7.11601 0 7.85547 0ZM7.85547 1.66602C7.69069 1.66602 7.53657 1.75091 7.44922 1.89062L4.16602 7.14453V14.166H10.333C10.9916 14.166 11.5889 13.7785 11.8564 13.1768L13.6709 9.09375C13.8732 8.63865 13.8614 8.11634 13.6387 7.6709L13.5967 7.58789C13.3144 7.02332 12.7376 6.6661 12.1064 6.66602H8.33301V2.14453C8.33301 1.88069 8.11925 1.66626 7.85547 1.66602Z"
        fill={fill}
        fillOpacity={opacity}
      />
      </G>
    </Svg>
  );
};
