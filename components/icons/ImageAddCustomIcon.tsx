import React from "react";
import Svg, { Path } from "react-native-svg";

type Props = {
  size?: number;
  color?: string;
  opacity?: number;
};

/**
 * Icono "image_add" según el diseño Figma de NuDS:
 *  - Marco rectangular tipo "frame de foto"
 *  - Paisaje (montañas + sol) dentro
 *  - Insignia "+" en la esquina superior derecha
 *
 * Implementado a mano porque la librería local NuDS exporta un
 * `ImageAddIcon` distinto que no coincide con este diseño.
 *
 * Basado en el icono Material Design `add_photo_alternate`.
 */
export const ImageAddCustomIcon = ({
  size = 24,
  color = "#1F0230",
  opacity = 1,
}: Props) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M18 20H4V6h9V4H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-9h-2v9zm-7.79-3.17l-1.96-2.36L5.5 18h11l-3.54-4.71-2.75 3.54zM20 4V1h-2v3h-3c.01.01 0 2 0 2h3v2.99c.01.01 2 0 2 0V6h3V4h-3z"
        fill={color}
        fillOpacity={opacity}
      />
    </Svg>
  );
};
