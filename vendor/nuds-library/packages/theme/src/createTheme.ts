import {
  semanticColorTokens,
  elevation,
  motion,
  radius,
  spacing,
  typography,
  zIndex,
} from "@nu-design-org/nuds-vibecode-tokens";
import type { SegmentKey, ThemeKey } from "@nu-design-org/nuds-vibecode-tokens";
import type { NuDSTheme } from "./types";

export function createTheme(segment: SegmentKey, mode: ThemeKey): NuDSTheme {
  return {
    mode,
    segment,
    color: semanticColorTokens[segment][mode],
    spacing,
    radius,
    motion,
    typography,
    elevation,
    zIndex,
  };
}
