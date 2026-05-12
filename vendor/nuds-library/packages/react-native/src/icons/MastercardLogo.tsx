import React from "react";
import Svg, { Path } from "react-native-svg";
import type { IconProps } from "./types";

export const MastercardLogo = ({ size = 41 }: Pick<IconProps, "size">) => {
  const width = size;
  const height = size * (25 / 41);

  return (
    <Svg width={width} height={height} viewBox="0 0 41 25" fill="none">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.6899 22.13H25.5787V2.64795H14.6899V22.13Z"
            fill="#F16522"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.381 12.3901C15.381 8.43805 17.24 4.91735 20.1342 2.64903C18.0177 0.990442 15.3462 0.000488281 12.4433 0.000488281C5.57093 0.000488281 0 5.547 0 12.3901C0 19.2331 5.57093 24.7805 12.4433 24.7805C15.3462 24.7805 18.0177 23.7906 20.1342 22.1311C17.24 19.8628 15.381 16.3421 15.381 12.3901"
            fill="#E41B24"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M39.881 20.067V19.5859H39.7548L39.6096 19.917L39.4643 19.5859H39.339V20.067H39.4277V19.7038L39.5634 20.0167H39.6557L39.7922 19.703V20.067H39.881ZM39.0805 20.0699V19.6703H39.2423V19.5897H38.8308V19.6703H38.9917V20.0699H39.0805Z"
            fill="white"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M40.2682 12.3896C40.2682 19.2326 34.6973 24.78 27.8249 24.78C24.922 24.78 22.2505 23.7901 20.134 22.1306C23.0282 19.8623 24.8872 16.3416 24.8872 12.3896C24.8872 8.43756 23.0282 4.91686 20.134 2.64854C22.2505 0.989954 24.922 0 27.8249 0C34.6973 0 40.2682 5.54651 40.2682 12.3896"
            fill="#F89E1B"
          />
        </Svg>
  );
};
