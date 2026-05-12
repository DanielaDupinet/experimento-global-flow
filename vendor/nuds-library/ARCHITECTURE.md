# Architecture

## Current Structure

```text
NuDS-react-vibecode/
  packages/
    tokens/
    theme/
    react-native/
    react-web/
```

## Dependency Direction

- `tokens` -> no internal dependency
- `theme` -> depends on `tokens`
- `react-native` -> depends on `theme` + `tokens`
- `react-web` -> depends on `theme` + `tokens`

## Why This Layout

- Matches NuDS-style layered architecture
- Keeps foundations platform-agnostic
- Lets React Native and React web share the same semantic tokens
- Supports incremental migration from `Prometheus-MVP` without touching app code

## Baseline Seeded from Prometheus-MVP

- Typography naming and font families from `src/constants/fonts.js`
- Font loading approach adapted from `src/utils/loadFonts.ts`
- Core brand color baseline (`#820AD1`) and neutrals from repeated app usage

## Next Build Steps

1. Add `TextField` and `Select` primitives based on `src/components/shared/*Field*`.
2. Extract icon primitives from `src/components/shared/icons/`.
3. Add docs/playground package (Storybook or Expo catalog app).
4. Add lint rule to disallow raw color literals in DS package code.
