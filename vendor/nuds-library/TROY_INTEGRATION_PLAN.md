# Troy Components Integration Plan

## Objective

Integrate components from `Troy-reference-components` into `NuDS-react-vibecode` while preserving:

- `packages/tokens` as the single source of design values
- `packages/theme` as semantic role mapping
- `packages/react-native` as component implementation layer
- future web portability

## What Troy Gives Us

High-value components to port:

- `Text`
- `Button`
- `TopBar`
- `InlineActions`
- `Widget2x2`
- `Widget4xN`
- `DashboardHero`
- `LimitBar`
- icons (`ArrowBack`, `Close`, `ExpandMore`, etc.)

Strengths:

- clear component APIs and demo usage
- strong Figma alignment in variants
- production-useful dashboard/pattern components

Main gaps vs current NuDS-react-vibecode architecture:

- heavy hardcoded color literals in component files
- direct dependency on Troy `src/styles/theme.js`
- mixed naming/variant casing (`Primary`, `Secondary`, etc.)
- non-semantic usage (component styling directly coupled to palette values)

## Integration Rule (Non-Negotiable)

Do **not** copy Troy components as-is into `packages/react-native`.

Every Troy component must be adapted to:

1. consume `useNuDSTheme()` values,
2. use tokenized variants (`primary`, `secondary`, etc.),
3. avoid raw `#hex` values in component logic,
4. preserve component behavior and visual intent.

## Mapping Strategy

## 1) Theme/Token Mapping

Troy `src/styles/theme.js` maps to:

- `colors` -> `@nu-design-org/nuds-vibecode-tokens` + semantic theme colors
- `spacing` -> `tokens/spacing`
- `borderRadius` -> `tokens/radius`
- `shadows` -> `tokens/elevation`
- `typography.styles` -> `tokens/typography` variants
- `zIndex` -> `tokens/zIndex`

Action:

- create a temporary adapter in `packages/react-native/src/foundation/troyAdapter.ts`
- use it only during migration to avoid massive one-shot rewrites
- remove adapter once components are fully semanticized

## 2) Component-by-Component Port Plan

### Phase A: Foundation-safe ports (fast wins)

1. `Text` -> merge into current `NText` (add missing variants + tabular numbers option)
2. `Button` -> extend current `Button` with Troy behaviors:
   - `compact`, `expanded`, `loading`, `leadingIcon`, `trailingIcon`, `icon-only`
3. Icons -> import into `packages/react-native/src/icons`

### Phase B: Navigation + action patterns

4. `TopBar` -> new component in `components/TopBar`
   - add semantic props (avoid hardcoded status bar mock styles)
5. `InlineActions` -> `components/InlineActions`
   - keep variant behavior, map all colors/radii/shadows to tokens

### Phase C: Card/pattern widgets

6. `Widget2x2`
7. `Widget4xN`
8. `LimitBar`
9. `DashboardHero`

These should live under `patterns/` if product-specific, or `components/` if generalized.

Recommendation:

- `Widget2x2`, `Widget4xN`, `DashboardHero`, `LimitBar` belong in `patterns/` first.
- Promote to generic components only after parameterizing product assumptions.

## 3) Variant Normalization

Normalize public API casing:

- from Troy: `Primary | Secondary | Ghost | Destructive`
- to NuDS-react-vibecode: `primary | secondary | ghost | destructive`

Normalize typography variant names to existing token naming where possible.

## 4) Asset and Font Strategy

Troy fonts and icons are a useful baseline, but DS package should stay app-agnostic:

- keep `loadNuDSFonts(fontMap)` pattern (host app owns local asset paths)
- export icon components, not asset paths
- keep SVG -> React component pipeline with `react-native-svg`

## 5) Documentation and QA

Before each component is considered integrated:

- add showcase section in `App.js` (or future docs app)
- verify light/dark mode token behavior
- validate disabled/pressed/loading states
- add accessibility labels for interactive controls

## Suggested Execution Order (Practical)

1. Token parity gap fill (typography variants + any missing semantic roles)
2. `NText` enhancement (tabular numbers + expanded variants)
3. `Button` parity with Troy
4. icon set migration
5. `TopBar`
6. `InlineActions`
7. pattern components (`Widget2x2`, `Widget4xN`, `LimitBar`, `DashboardHero`)

## Risk Controls

- Avoid importing `../styles/theme` from Troy files into NuDS package.
- Avoid carrying over hardcoded colors (`#820ad1`, `#1f0230`, etc.) in migrated components.
- Keep backwards compatibility by adding props, not changing behavior abruptly.
- Validate on iOS simulator + Expo Go after each migrated component.

## Bottom Line

The best path is **behavior port + style re-binding**:

- keep Troy component behavior and prop ergonomics,
- re-bind every style decision to NuDS tokens/theme,
- classify product-heavy widgets as patterns first.

This preserves the architecture we started and keeps the system scalable to React web.
