import { describe, it, expect } from "vitest";
import { createTheme } from "./createTheme";
import type { SegmentKey, ThemeKey } from "@nu-design-org/nuds-vibecode-tokens";

describe("createTheme", () => {
  const segments: SegmentKey[] = ["pf", "pj", "uv"];
  const modes: ThemeKey[] = ["light", "dark"];

  it("returns an object with the correct segment and mode", () => {
    for (const seg of segments) {
      for (const mode of modes) {
        const theme = createTheme(seg, mode);
        expect(theme.segment).toBe(seg);
        expect(theme.mode).toBe(mode);
      }
    }
  });

  it("returns a valid color tree with string leaves", () => {
    const theme = createTheme("pf", "light");
    expect(theme.color).toBeDefined();
    expect(typeof theme.color.background.default).toBe("string");
    expect(typeof theme.color.content.default).toBe("string");
    expect(typeof theme.color.surface.default).toBe("string");
    expect(typeof theme.color.border.default).toBe("string");
  });

  it("includes all non-color token categories", () => {
    const theme = createTheme("pf", "light");
    expect(theme.spacing).toBeDefined();
    expect(theme.radius).toBeDefined();
    expect(theme.motion).toBeDefined();
    expect(theme.typography).toBeDefined();
    expect(theme.elevation).toBeDefined();
    expect(theme.zIndex).toBeDefined();
  });

  it("different segments produce different accent colors", () => {
    const pf = createTheme("pf", "light");
    const pj = createTheme("pj", "light");
    const uv = createTheme("uv", "light");

    expect(pf.color.background.accent.primary).not.toBe(
      pj.color.background.accent.primary,
    );
    expect(pf.color.background.accent.primary).not.toBe(
      uv.color.background.accent.primary,
    );
  });

  it("non-color tokens are identical across segments", () => {
    const pf = createTheme("pf", "light");
    const pj = createTheme("pj", "light");
    expect(pf.spacing).toBe(pj.spacing);
    expect(pf.radius).toBe(pj.radius);
    expect(pf.typography).toBe(pj.typography);
  });
});
