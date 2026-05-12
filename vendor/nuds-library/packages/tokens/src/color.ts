import { lightPrimitives } from "./primitives";
import { semanticColorTokens } from "./semantics";

export * from "./primitives";
export * from "./semantics";

/**
 * @deprecated Use `lightPrimitives` and `semanticColorTokens` instead.
 * Kept to avoid breaking imports from previous versions.
 */
export const palette = {
  transparent: "transparent",
  white: lightPrimitives.white,
  black: "#000000",
  brand: {
    10: lightPrimitives.purple[10],
    20: lightPrimitives.purple[20],
    30: lightPrimitives.purple[30],
    40: lightPrimitives.purple[40],
    50: lightPrimitives.purple[60],
    60: lightPrimitives.purple[70],
    70: lightPrimitives.purple[80],
    80: lightPrimitives.purple[90],
    90: lightPrimitives.purple[100],
    100: "#170027",
  },
  neutral: {
    0: lightPrimitives.white,
    10: "#F5F3F6",
    20: "#EFEFEF",
    30: lightPrimitives.gray[20],
    40: "#B7BAC3",
    50: "#8F929D",
    60: "#727683",
    70: "#40424A",
    80: "#23242A",
    90: "#1F0230",
    100: "#100D11",
  },
  success: {
    50: "#4AA46E",
    60: "#1F7F45",
    70: "#045B27",
  },
  warning: {
    50: "#FE7D21",
    60: "#C95400",
    70: "#963F00",
  },
  danger: {
    50: "#D01D1C",
    60: "#A90700",
    70: "#7C0600",
  },
} as const;

export type MagicColorMode = "light" | "dark" | "uv" | "uvDark" | "pj" | "pjDark";

type FlatSemanticTokens = Record<string, string>;

const toLegacyTokenName = (segment: string): string =>
  segment
    .replace(/([a-z0-9])([A-Z])/g, "$1_$2")
    .replace(/-/g, "_")
    .toLowerCase();

const flattenSemanticTokens = (
  value: unknown,
  path: string[] = [],
  output: FlatSemanticTokens = {},
): FlatSemanticTokens => {
  if (typeof value === "string") {
    output[path.join(".")] = value;
    return output;
  }

  if (!value || typeof value !== "object") {
    return output;
  }

  Object.entries(value as Record<string, unknown>).forEach(([key, nestedValue]) => {
    flattenSemanticTokens(nestedValue, [...path, toLegacyTokenName(key)], output);
  });

  return output;
};

const pfLight = flattenSemanticTokens(semanticColorTokens.pf.light);
const pfDark = flattenSemanticTokens(semanticColorTokens.pf.dark);
const pjLight = flattenSemanticTokens(semanticColorTokens.pj.light);
const pjDark = flattenSemanticTokens(semanticColorTokens.pj.dark);
const uvLight = flattenSemanticTokens(semanticColorTokens.uv.light);
const uvDark = flattenSemanticTokens(semanticColorTokens.uv.dark);

/**
 * @deprecated Use `semanticColorTokens` directly.
 * Legacy flattened shape preserved for backward compatibility.
 */
export const magicColorTokens: Record<
  string,
  Partial<Record<MagicColorMode, string>>
> = Object.fromEntries(
  Object.keys(pfLight).map((tokenName) => [
    tokenName,
    {
      light: pfLight[tokenName],
      dark: pfDark[tokenName],
      pj: pjLight[tokenName],
      pjDark: pjDark[tokenName],
      uv: uvLight[tokenName],
      uvDark: uvDark[tokenName],
    },
  ]),
);

export type MagicColorTokenName = keyof typeof magicColorTokens;

/**
 * @deprecated Use `semanticColorTokens` instead.
 */
export function getMagicColorToken(
  token: MagicColorTokenName,
  mode: MagicColorMode,
): string | undefined {
  return (magicColorTokens[token] as Partial<Record<MagicColorMode, string>>)[mode];
}
