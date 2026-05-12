import React from 'react';
import Svg, { Circle } from 'react-native-svg';
import { useNuDSTheme } from '../theme';

interface RadioButtonProps {
  selected?: boolean;
  size?: number;
}

// Constants
const STROKE_WIDTH = 2;

export function RadioButton({ selected = false, size = 24 }: RadioButtonProps) {
  const theme = useNuDSTheme();
  const outerRadius = size / 2;
  const innerRadius = size / 4;

  const selectedColor = theme.color.content.accent.primary;
  const unselectedColor = theme.color.border.disabledStrong;

  return (
    <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
      <Circle
        cx={outerRadius}
        cy={outerRadius}
        r={outerRadius - STROKE_WIDTH / 2}
        stroke={selected ? selectedColor : unselectedColor}
        strokeWidth={STROKE_WIDTH}
        fill="none"
      />
      {selected && (
        <Circle
          cx={outerRadius}
          cy={outerRadius}
          r={innerRadius}
          fill={selectedColor}
        />
      )}
    </Svg>
  );
}
