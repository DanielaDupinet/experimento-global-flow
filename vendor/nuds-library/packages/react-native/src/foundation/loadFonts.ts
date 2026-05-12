import * as Font from "expo-font";

export type NuDSFontMap = Record<string, number>;

/**
 * Default font map bundled with the design system.
 * Includes all Nu Sans Display, Nu Sans Text, and legacy Nu Sans variants
 * required by NuDS typography tokens.
 */
const defaultFontMap: NuDSFontMap = {
  // Nu Sans Display
  "NuSansDisplay-Regular": require("../../assets/fonts/NuSansDisplay-Regular.otf"),
  "NuSansDisplay-Medium": require("../../assets/fonts/NuSansDisplay-Medium.otf"),
  "NuSansDisplay-Semibold": require("../../assets/fonts/NuSansDisplay-Semibold.otf"),
  // Nu Sans Text
  "NuSansText-Regular": require("../../assets/fonts/NuSansText-Regular.otf"),
  "NuSansText-Medium": require("../../assets/fonts/NuSansText-Medium.otf"),
  "NuSansText-Semibold": require("../../assets/fonts/NuSansText-Semibold.otf"),
  "NuSansText-Bold": require("../../assets/fonts/NuSansText-Bold.otf"),
  // Legacy Nu Sans (backward compatibility)
  "Nu Sans": require("../../assets/fonts/Nu Sans-Regular.otf"),
  "Nu Sans Medium": require("../../assets/fonts/Nu Sans-Medium.otf"),
};

/**
 * Load NuDS fonts required by the design system.
 *
 * Call with no arguments to use the bundled Nu Sans fonts:
 * ```ts
 * await loadNuDSFonts();
 * ```
 *
 * Or pass a custom font map to override/extend the defaults:
 * ```ts
 * await loadNuDSFonts({ ...myCustomFonts });
 * ```
 */
export const loadNuDSFonts = async (fontMap?: NuDSFontMap) => {
  await Font.loadAsync(fontMap ?? defaultFontMap);
};
