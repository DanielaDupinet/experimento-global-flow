import { describe, it, expect } from "vitest";
import { createCssVariables } from "./web";

describe("createCssVariables", () => {
  it("returns a :root block with CSS custom properties", () => {
    const css = createCssVariables();
    expect(css).toMatch(/^:root \{/);
    expect(css).toMatch(/\}$/);
    expect(css).toContain("--nuds-");
  });

  it("defaults to pf/light", () => {
    const defaultCss = createCssVariables();
    const explicitCss = createCssVariables("light", "pf");
    expect(defaultCss).toBe(explicitCss);
  });

  it("produces different output for different modes", () => {
    const lightCss = createCssVariables("light", "pf");
    const darkCss = createCssVariables("dark", "pf");
    expect(lightCss).not.toBe(darkCss);
  });

  it("produces different output for different segments", () => {
    const pfCss = createCssVariables("light", "pf");
    const pjCss = createCssVariables("light", "pj");
    expect(pfCss).not.toBe(pjCss);
  });

  it("every line inside :root is a valid CSS variable declaration", () => {
    const css = createCssVariables("light", "pf");
    const lines = css.split("\n").slice(1, -1);
    expect(lines.length).toBeGreaterThan(50);
    for (const line of lines) {
      expect(line.trim()).toMatch(/^--nuds-[\w-]+:\s*.+;$/);
    }
  });
});
