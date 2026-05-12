import type {
  SemanticColor,
  SegmentKey,
  ThemeKey,
  spacing,
  radius,
  motion,
  typography,
  elevation,
  zIndex
} from "@nu-design-org/nuds-vibecode-tokens";

export type NuDSTheme = {
  mode: ThemeKey;
  segment: SegmentKey;
  color: SemanticColor;
  spacing: typeof spacing;
  radius: typeof radius;
  motion: typeof motion;
  typography: typeof typography;
  elevation: typeof elevation;
  zIndex: typeof zIndex;
};
