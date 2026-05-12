# NuDS Reference Review for NuDS React Vibecode

## Context

This document reviews `https://github.com/nubank/nuds` and captures which design-system practices should be adopted in `NuDS-react-vibecode` (React Native + Expo).

Important context:

- `nuds` is primarily Flutter/Dart (`packages/nuds_mobile`).
- Even with a different UI framework, its architecture and governance patterns are highly transferable.

## How NuDS Is Structured

## 1) Layered Architecture

In `packages/nuds_mobile/lib/src/`, NuDS separates concerns by layer:

- `foundation/`: tokens + low-level primitives (colors, spacing, radii, motion, typography, theme)
- `components/`: reusable UI units
- `patterns/`: composed usage patterns
- `templates/` and `routes/`: higher-level app templates/navigation helpers

This is reinforced by their style guide (`STYLE_GUIDE.md`) that explicitly defines:

- `foundation`
- `core/components`
- `pattern`
- `view` (screen-level)

## 2) Single Public API Surface

- `lib/nuds_mobile.dart` exports curated public modules.
- `foundation/index.dart` and per-feature `index.dart` files create clean barrel boundaries.

This minimizes accidental deep imports and stabilizes package contracts.

## 3) Foundation First (Tokenized)

NuDS has explicit foundation modules:

- `colors.dart`
- `spacings.dart`
- `radii.dart`
- `elevations.dart`
- `motion.dart`
- `typography.dart`
- `themes/color_scheme.dart`
- `themes/theme_data.dart`
- `themes/theme.dart`

This is exactly the model we should replicate in RN.

## 4) Semantic Theming Model

`NuDSColorScheme` is semantic rather than raw-palette-first at usage time:

- top-level intent: `main`, `positive`, `negative`, `warning`
- nested roles: `content`, `background`, `border`
- each role includes state-aware variants (`mainFeedback`, `primaryFeedback`, etc.)

NuDS then defines `light` and `dark` theme factories from those semantics.

## 5) Component Style Contracts

Components frequently expose style objects with:

- `defaultStyleOf(context)`
- optional override style input
- resolved style object internally

Example: `components/banners/offer_banner_style.dart`.

This pattern gives:

- standardized defaults
- opt-in customization
- controlled extensibility without style chaos

## 6) Strong Documentation + Demo Discipline

- Storybook/MDX documentation workflow (`STORYBOOK_GUIDE.md`).
- Design + code tabs approach for component docs.
- Example app routes for each component state/use case.

Even if the tooling differs, the principle is strong: each DS component must have canonical usage documentation and runnable examples.

## 7) Test Strategy Includes Visual Regressions

NuDS has extensive tests, including screenshot/golden tests under `packages/nuds_mobile/test/**`.

This is a major best practice to preserve visual correctness during token and component migrations.

## 8) Governance and Contribution Rules

`CONTRIBUTING.md` strongly enforces:

- product-agnostic components
- mandatory use of foundation tokens
- accessibility semantics
- state coverage in tests
- text scale/device-size validation

This governance prevents DS drift.

## What We Should Copy Into `NuDS-react-vibecode`

## A) Architecture (Adopt)

Use this package layout:

```text
NuDS-react-vibecode/
  src/
    foundation/
      tokens/
      themes/
      typography/
      motion/
      index.ts
    components/
      button/
      text-field/
      select/
      card/
      top-bar/
      index.ts
    patterns/
      form-row/
      amount-input/
      index.ts
    hooks/
      useTheme.ts
    index.ts
```

Key rule: only `src/index.ts` and bounded feature `index.ts` files are public APIs.

## B) Semantic Color Scheme (Adopt + Adapt)

Mirror NuDS semantics in TS:

- `color.main`, `color.positive`, `color.negative`, `color.warning`
- nested groups: `content`, `background`, `border`
- state variants: `*Feedback`, `disabled`, `selection`

Then define:

- `createLightTheme()`
- `createDarkTheme()`

Avoid direct palette usage in components; components consume semantic roles only.

## C) Token Modules (Adopt)

Create explicit token files:

- `tokens/color.ts`
- `tokens/spacing.ts`
- `tokens/radius.ts`
- `tokens/elevation.ts`
- `tokens/motion.ts`
- `tokens/typography.ts`
- `tokens/z-index.ts`

Back them with strong typings (`as const`, token types) to prevent arbitrary literals.

## D) Theme Provider + Hook (Adopt + Adapt)

NuDS uses `NuDSTheme.of(context)`. RN equivalent:

- `NuDSThemeProvider`
- `useNuDSTheme()`
- optional bridge to React Navigation theme

This centralizes theme access and keeps components token-driven.

## E) Style Override API (Adopt Carefully)

Follow NuDS style object pattern for complex components:

- `defaultStyles(theme)`
- `resolveStyles(overrides, defaults)`

But keep RN ergonomics:

- prefer variant props (`variant`, `size`, `tone`) first
- style override escape hatch second

## F) Docs + Playground (Adopt)

NuDS uses storybook-driven docs. For RN:

- Storybook for React Native (or Expo route-based component catalog)
- one docs page per component:
  - anatomy
  - variants
  - states
  - accessibility
  - token mapping
  - do/don't

## G) Accessibility + Testing Gates (Adopt)

Borrow governance rules:

- required accessibility props/labels for interactive components
- all states tested (default/pressed/disabled/loading/error)
- visual regression snapshots for core components
- text scaling tests (dynamic type)

## What To Adapt (Not Copy 1:1)

- Flutter-specific APIs (`ThemeData`, `WidgetStateProperty`, etc.) need RN abstractions.
- NuDS typography uses Flutter `TextTheme`; in RN use typed text variants and shared text components.
- Golden test tooling differs; use RN-friendly visual tests (snapshot + screenshot pipeline).

## What To Avoid

- Exporting too many internal modules directly (causes API instability).
- Allowing components to consume raw hex values directly.
- Shipping app-specific screens as DS components (violates product-agnostic rule).

## Suggested Implementation Sequence for This Project

1. Build `foundation/tokens` + `foundation/themes` first.
2. Introduce `NuDSThemeProvider` and `useNuDSTheme`.
3. Migrate 2-3 high-leverage primitives first (`Button`, `TextField`, `Icon`).
4. Add docs/playground and component state matrix.
5. Add lint rule to block raw color literals in DS and migrated app files.
6. Expand to patterns once primitives are stable.

## Practical Mapping from Prometheus-MVP to NuDS-Style Model

- Existing `src/constants/fonts.js` -> `tokens/typography.ts`
- Repeated hardcoded colors -> `tokens/color.ts` + semantic aliases
- Shared `src/components/shared/icons/` -> `components/icon/` + centralized exports
- Existing shared inputs/buttons -> first DS primitive migration wave

## Final Recommendation

Treat `nuds` as the governance and architecture blueprint, not as framework-specific code to port line-by-line. The highest-value transfer is:

1) foundation-first tokenization,  
2) semantic theming with light/dark factories,  
3) strict public API boundaries,  
4) documentation/testing/accessibility governance.

If we implement those four pillars early, `NuDS-react-vibecode` will remain extensible and adaptable as your product evolves.

