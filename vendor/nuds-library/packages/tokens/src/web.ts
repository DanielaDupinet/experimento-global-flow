import { semanticColorTokens } from "./color";
import type { SegmentKey, ThemeKey } from "./color";

type Primitive = string | number;

const flattenObject = (
  value: Record<string, unknown>,
  prefix: string[] = []
): Array<[string, Primitive]> => {
  const out: Array<[string, Primitive]> = [];
  Object.entries(value).forEach(([key, current]) => {
    const path = [...prefix, key];
    if (
      typeof current === "string" ||
      typeof current === "number"
    ) {
      out.push([path.join("-"), current]);
      return;
    }

    if (current && typeof current === "object") {
      out.push(
        ...flattenObject(current as Record<string, unknown>, path)
      );
    }
  });
  return out;
};

export const createCssVariables = (
  mode: ThemeKey = "light",
  segment: SegmentKey = "pf"
): string => {
  const target = semanticColorTokens[segment][mode];
  const entries = flattenObject(target);
  const lines = entries.map(([key, val]) => `  --nuds-${key}: ${String(val)};`);
  return `:root {\n${lines.join("\n")}\n}`;
};
