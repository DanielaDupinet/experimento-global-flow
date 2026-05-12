import { describe, it, expect } from "vitest";
import {
  lightPrimitives,
  darkPrimitives,
  semanticColorTokens,
} from "./color";
import type { SegmentKey, ThemeKey } from "./primitives";

const COLOR_REGEX = /^#[0-9A-Fa-f]{3,8}$|^rgba?\(/;

const flattenLeaves = (
  obj: Record<string, unknown>,
  prefix: string[] = [],
): Array<[string, unknown]> => {
  const out: Array<[string, unknown]> = [];
  for (const [key, value] of Object.entries(obj)) {
    const path = [...prefix, key];
    if (value && typeof value === "object") {
      out.push(...flattenLeaves(value as Record<string, unknown>, path));
    } else {
      out.push([path.join("."), value]);
    }
  }
  return out;
};

describe("Primitive palettes", () => {
  it("lightPrimitives leaves are all color strings", () => {
    const leaves = flattenLeaves(lightPrimitives);
    expect(leaves.length).toBeGreaterThan(100);
    for (const [path, value] of leaves) {
      expect(value, `lightPrimitives.${path}`).toMatch(COLOR_REGEX);
    }
  });

  it("darkPrimitives leaves are all color strings", () => {
    const leaves = flattenLeaves(darkPrimitives);
    expect(leaves.length).toBeGreaterThan(100);
    for (const [path, value] of leaves) {
      expect(value, `darkPrimitives.${path}`).toMatch(COLOR_REGEX);
    }
  });
});

describe("Semantic color tokens", () => {
  const segments: SegmentKey[] = ["pf", "pj", "uv"];
  const modes: ThemeKey[] = ["light", "dark"];

  it("every segment×mode leaf is a color string", () => {
    for (const seg of segments) {
      for (const mode of modes) {
        const leaves = flattenLeaves(
          semanticColorTokens[seg][mode] as unknown as Record<string, unknown>,
        );
        expect(leaves.length).toBeGreaterThan(50);
        for (const [path, value] of leaves) {
          expect(
            value,
            `semanticColorTokens.${seg}.${mode}.${path}`,
          ).toMatch(COLOR_REGEX);
        }
      }
    }
  });

  it("all segments expose identical key shapes", () => {
    const keysFor = (seg: SegmentKey, mode: ThemeKey) =>
      flattenLeaves(
        semanticColorTokens[seg][mode] as unknown as Record<string, unknown>,
      )
        .map(([k]) => k)
        .sort();

    const pfLightKeys = keysFor("pf", "light");
    const pfDarkKeys = keysFor("pf", "dark");
    const pjLightKeys = keysFor("pj", "light");
    const pjDarkKeys = keysFor("pj", "dark");
    const uvLightKeys = keysFor("uv", "light");
    const uvDarkKeys = keysFor("uv", "dark");

    expect(pfLightKeys).toEqual(pjLightKeys);
    expect(pfLightKeys).toEqual(uvLightKeys);
    expect(pfDarkKeys).toEqual(pjDarkKeys);
    expect(pfDarkKeys).toEqual(uvDarkKeys);
    expect(pfLightKeys).toEqual(pfDarkKeys);
  });
});
