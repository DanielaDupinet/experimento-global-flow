import type { NuDSTheme } from "@nu-design-org/nuds-vibecode-theme";

export type DecorativeIndex = "01" | "02" | "03" | "04" | "05" | "06";

/**
 * Returns a decorative color from the current theme.
 *
 * Avoids noisy bracket notation like `theme.color.content.decorative["03"]`.
 */
export function decorativeColor(
  theme: NuDSTheme,
  layer: "content" | "surface",
  index: DecorativeIndex,
): string {
  return theme.color[layer].decorative[index];
}
