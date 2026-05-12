# NuDS React Vibecode - Discovery Findings

## Goal

Create a centralized, extensible React Native + Expo design system from the existing `Prometheus-MVP` codebase, with proper tokenization (color, typography, spacing, radius, elevation, motion, z-index) and reusable components.

## Scope Reviewed

- App setup and dependencies: `Prometheus-MVP/package.json`
- Shared components: `Prometheus-MVP/src/components/shared/`
- Icon system: `Prometheus-MVP/src/components/shared/icons/`
- Typography constants: `Prometheus-MVP/src/constants/fonts.js`
- Localization: `Prometheus-MVP/src/i18n/i18n.ts`
- Representative screens and style files across:
  - `src/screens/onboarding/`
  - `src/screens/homepage/`
  - `src/screens/remittance/`
  - `src/screens/swaps/`
  - `src/screens/virtual-card/`

## What Already Exists (Strong Reuse Potential)

### 1) Foundation Stack Is Suitable

- Expo + React Native + TypeScript-compatible app architecture is already present.
- Libraries already in use that are DS-friendly:
  - `react-native-svg`
  - `expo-linear-gradient`
  - `react-native-reanimated`
  - `react-native-safe-area-context`
  - `react-i18next` + `i18next`

### 2) Reusable Shared Components Already Present

High-value extraction candidates in `src/components/shared/`:

- Inputs: `TextInputField.tsx`, `DropdownField.tsx`, `InputDropdown.tsx`, `SimpleDropdownField.tsx`, `KeyInput.tsx`, `DoubleInput.tsx`
- Feedback/loading: `CircularLoader.tsx`, `AnimatedLoadingButton.tsx`, `RollingNumber.tsx`, `RollingDigit.tsx`
- Layout/support: `SafeBottomArea.tsx`, `ArrowDivider.tsx`, `CurrencyList.tsx`

These are strong candidates for `NuDS-react-vibecode` primitives/composites.

### 3) Icon System Is Mature Enough to Extract

- Central icon directory exists at `src/components/shared/icons/`.
- Most icons are TSX components with a consistent API pattern (`size`, `color` props).
- `react-native-svg` dependency already supports scalable icon rendering.

## Current Gaps to Solve for a True Design System

### 1) Color Is Not Centralized

- Repeated hardcoded colors across many files (`#820AD1`, `#1F0230`, white/neutral variants, multiple rgba values).
- Local `COLORS` objects appear in some features/screens rather than in a single source of truth.

Impact: difficult theming, high drift risk, expensive updates.

### 2) Typography Is Partially Centralized but Inconsistently Applied

- `src/constants/fonts.js` provides a good baseline (`fonts`, `typography` objects).
- Many components still use direct font family strings and one-off text styles.

Impact: typographic inconsistency and weak variant governance.

### 3) No Spacing/Radius/Elevation/Motion Token Standards

- Spacing values are mostly literal numbers in styles.
- Border radius values vary without semantic mapping.
- Shadows/elevation are repeated with slight deviations.
- Animation durations/easing are mostly hardcoded where used.

Impact: visual inconsistency and no scalable theming foundation.

### 4) Z-Index Layering Is Ad-Hoc

- Overlay layers use magic numbers across features.

Impact: modal/sheet/tooltip stacking conflicts likely as codebase grows.

### 5) Style Architecture Is Better Than Average but Still Fragmented

- There is a team rule to separate styles into `styles.ts` with `StyleSheet.create()` (`.cursor/rules/styles-must-be-in-separate-styles-dot-ts-file-using-stylesheet-dot-create.mdc`).
- In practice, there is still mixed usage of style files and inline dynamic styling.

Impact: component extraction is possible, but normalization is required.

## i18n Status (Good Baseline for DS)

- `src/i18n/i18n.ts` is configured with `react-i18next`, AsyncStorage persistence, and multiple locales (`en`, `es`, `pt`, `de`, `fr`, `it`).
- DS components should remain translation-agnostic where possible (accept strings), and expose optional integration-friendly patterns for `t(...)` callers.

## Recommended Target for `NuDS-react-vibecode`

## Package Structure

```text
NuDS-react-vibecode/
  src/
    tokens/
      color.ts
      typography.ts
      spacing.ts
      radius.ts
      elevation.ts
      motion.ts
      zIndex.ts
      opacity.ts
      index.ts
    theme/
      semantic.ts
      light.ts
      dark.ts
      provider.tsx
      useTheme.ts
    primitives/
      Box/
      Text/
      Icon/
      Pressable/
      Divider/
    components/
      Button/
      TextField/
      Select/
      TopAppBar/
      Modal/
      BottomSheet/
      Card/
      ListItem/
      Loader/
    patterns/
      FormRow/
      CurrencyInput/
      AmountDisplay/
    icons/
      (migrated icon set)
    utils/
      createStyles.ts
      responsive.ts
    index.ts
  assets/
    fonts/
  docs/
    tokens.md
    component-guidelines.md
```

## Token Taxonomy (Required Baseline)

- `color`
  - Base palette (brand + neutral + semantic intent)
  - Semantic aliases (`background/surface/text/border/primary/success/warning/error`)
- `typography`
  - Families, size scale, line heights, letter spacing, named text styles
- `spacing`
  - 4pt scale (`0, 2, 4, 8, 12, 16, 20, 24, 32, ...`)
- `radius`
  - semantic sizes (`none/sm/md/lg/xl/full`)
- `elevation`
  - level-based cross-platform model (`level0...level5`)
- `motion`
  - durations + easings (`fast/normal/slow`)
- `zIndex`
  - named layers (`base/sticky/dropdown/overlay/modal/toast/tooltip`)

## Concrete Migration Plan (From Existing Code)

### Phase 1 - Foundation Tokens + Alias Layer

1. Create token files and semantic aliases in `NuDS-react-vibecode/src/tokens`.
2. Map current recurring colors and font families from:
   - `src/constants/fonts.js`
   - repeated color usage in `src/screens/**` and `src/components/shared/**`
3. Add a temporary compatibility layer in app code to avoid big-bang migration.

Deliverable: app can consume DS tokens without changing all components at once.

### Phase 2 - Extract Primitives

Extract and normalize first:

- `TextInputField`, `DropdownField`, `SimpleDropdownField`
- `AnimatedLoadingButton`, `CircularLoader`
- icon system from `src/components/shared/icons/`

Deliverable: first reusable DS package release used by selected screens.

### Phase 3 - Compose Higher-Level Components

Build DS components from primitives:

- `Button` variants
- `TopAppBar`
- `Card`, `ListItem`, `Modal`, `BottomSheet`
- Form composition patterns

Deliverable: reduction of duplicated style logic in feature folders.

### Phase 4 - Theming and Dark Mode Readiness

- Move all direct color references to semantic tokens.
- Add theme provider and runtime theme switching support.
- Keep component API stable while swapping token values by theme.

Deliverable: fully adaptable design system with future-proof theming.

### Phase 5 - Governance + Quality Gates

- Introduce lint rules/codemods to prevent raw color literals and disallowed inline static styles.
- Add visual examples (Storybook/Expo preview screens).
- Add DS versioning and release notes process.

Deliverable: scalable DS operations, not just a one-time refactor.

## Quick Wins You Can Start Immediately

1. Extract `color` and `spacing` tokens first (highest ROI).
2. Replace repeated brand colors with semantic aliases in high-traffic screens.
3. Standardize typography usage around `fonts.js` mappings before deeper component rewrites.
4. Migrate icon exports to a clean DS entrypoint and keep API stable (`size`, `color`).

## Risks and Mitigations

- Risk: slow migration due to feature-level style fragmentation.
  - Mitigation: compatibility alias layer + phased rollout by feature.
- Risk: visual regressions during tokenization.
  - Mitigation: screenshot baselines + per-screen QA checklist.
- Risk: DS becomes a dump of app-specific components.
  - Mitigation: strict primitive/composite boundaries and contribution rules.

## Bottom Line

`Prometheus-MVP` already has enough reusable UI and typography foundations to seed `NuDS-react-vibecode` quickly. The biggest gap is token centralization and semantic theming discipline, not lack of components. A phased migration with compatibility aliases will let you build a fully extensible DS without stalling product development.

