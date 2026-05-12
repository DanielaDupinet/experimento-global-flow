# Migration Guide — v0.4 → v0.5

## Overview

v0.5 introduces **multi-segment support** (PF, PJ, UV), splits the monolithic color token file into focused modules, and adds Vitest test coverage. To keep this release safe for existing consumers, legacy `TopBar` props and legacy token exports are still available as deprecated compatibility APIs.

---

## Breaking Changes

None in v0.5 final state. Previous removals were reverted to deprecated compatibility APIs.

---

## Deprecations

### `TopBar` legacy props

`TopBar` accepts these deprecated props for one compatibility cycle:

- `subtitle?: string` (fallbacks to `title` when `title` is not set)
- `showStatusBar?: boolean` (accepted but currently a no-op)

Use `title` and the current `TopBar` API going forward.

### Token legacy exports (`@nu-design-org/nuds-vibecode-tokens/color`)

The following exports are still available for compatibility but should be considered deprecated:

- `palette`
- `magicColorTokens`
- `MagicColorMode`
- `MagicColorTokenName`
- `getMagicColorToken(...)`

Prefer the segment-aware API:

```ts
import { semanticColorTokens } from "@nu-design-org/nuds-vibecode-tokens";
```

### `semanticLight` / `semanticDark`

These aliases silently bind to the PF segment and will be removed in the next major version.

| Before (deprecated) | After |
|---|---|
| `import { semanticLight } from "@nu-design-org/nuds-vibecode-tokens"` | `import { semanticColorTokens } from "@nu-design-org/nuds-vibecode-tokens"` |
| `semanticLight.background.default` | `semanticColorTokens.pf.light.background.default` |
| `semanticDark.content.accent.primary` | `semanticColorTokens.pf.dark.content.accent.primary` |

### `PrimitiveColor` type

The `LightPrimitive | DarkPrimitive` union type has been removed. Use `LightPrimitive` or `DarkPrimitive` directly.

---

## New: Segment Support

### What is a segment?

A segment is a business context that determines accent colors and certain brand-specific tokens:

| Segment | Key | Description |
|---|---|---|
| Pessoa Física | `"pf"` | Consumer banking (default) |
| Pessoa Jurídica | `"pj"` | Business banking |
| Ultravioleta | `"uv"` | Premium tier |

### NuDSThemeProvider

The provider now accepts a `segment` prop. Defaults to `"pf"` for full backward compatibility.

```tsx
// Before (still works, defaults to pf)
<NuDSThemeProvider mode="light">
  <App />
</NuDSThemeProvider>

// After — opt into a different segment
<NuDSThemeProvider mode="light" segment="pj">
  <App />
</NuDSThemeProvider>
```

### createTheme

`createTheme(segment, mode)` was already available but not wired into the provider. Now the provider calls it internally. You can still use it directly for advanced cases:

```ts
import { createTheme } from "@nu-design-org/nuds-vibecode-theme";

const pjDark = createTheme("pj", "dark");
```

### createCssVariables

Already supports segment via its second argument:

```ts
import { createCssVariables } from "@nu-design-org/nuds-vibecode-tokens";

const css = createCssVariables("light", "pj");
```

---

## File Structure Changes

The `color.ts` monolith (~1,800 lines) has been split into three files:

| File | Contents |
|---|---|
| `primitives.ts` | `SegmentKey`, `ThemeKey`, `lightPrimitives`, `darkPrimitives`, `LightPrimitive`, `DarkPrimitive` |
| `semantics.ts` | `semanticColorTokens`, `SemanticColor`, deprecated `semanticLight`/`semanticDark` |
| `color.ts` | Barrel re-export (`export * from "./primitives"` + `export * from "./semantics"`) |

Imports from `@nu-design-org/nuds-vibecode-tokens` continue to work. Legacy color exports are still present as deprecated compatibility aliases/helpers.

---

## Storybook

Component stories now support toggling both **mode** (light/dark) and **segment** (PF/PJ/UV) via the Storybook toolbar controls. No code changes needed in existing stories.

---

## Test Suite

A Vitest test suite now covers:

- Token structure validation (all leaves are color strings)
- Segment parity (all segments expose identical key shapes)
- `createTheme` output correctness
- `createCssVariables` CSS generation

Run tests with:

```bash
npm test
```

---

## New: Decorative Color Helper

A typed helper reduces bracket-notation noise when accessing decorative tokens:

```tsx
import { decorativeColor, useNuDSTheme } from "@nu-design-org/nuds-vibecode-react-native";

const theme = useNuDSTheme();

// Before
const color = theme.color.content.decorative["03"];

// After
const color = decorativeColor(theme, "content", "03");
```
