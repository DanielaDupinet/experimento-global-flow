# MagicHeroCallout

Product pattern: hero message card with optional **Magic** animated border, primary + ghost actions, and default trailing avatar.

## Figma

- **Instance:** [NuDS V3 · 1st Level — `8077-1797`](https://www.figma.com/design/RxzAEZlmQX8Outs7RYQWw2/-WIP--NuDS-V3-%E2%80%93%C2%A01st-Level?node-id=8077-1797)
- **Animated border (motion):** [`8094-169`](https://www.figma.com/design/RxzAEZlmQX8Outs7RYQWw2/-WIP--NuDS-V3-%E2%80%93%C2%A01st-Level?node-id=8094-169), steps `8094:170`–`173`
- **Border slug length:** [`8095-179`](https://www.figma.com/design/RxzAEZlmQX8Outs7RYQWw2/-WIP--NuDS-V3-%E2%80%93%C2%A01st-Level?node-id=8095-179) (BB / Hero Callout Standard Animated Border BB, 343×130)

## Variants

| `variant`   | Role |
|-------------|------|
| `standard`  | Accent / primary subtle surfaces |
| `attention` | Feedback attention |
| `critical`  | Feedback critical; optional description; border can be hidden |

## Props (`MagicHeroCalloutProps`)

| Prop | Type | Default | Notes |
|------|------|---------|--------|
| `variant` | `"standard"` \| `"attention"` \| `"critical"` | `"standard"` | Maps Figma type fills and icons |
| `title` | `string` | — | **Required** |
| `description` | `string` | — | Critical + `showDescription` only |
| `showDescription` | `boolean` | `false` | |
| `showAccentBorder` | `boolean` | `true` | Critical: can hide 2px frame |
| `animatedAccentBorder` | `boolean` | `true` | `false` or reduce motion → solid stroke |
| `accentBorderSpeed` | `number` | **`MAGIC_HERO_CALLOUT_DEFAULT_ACCENT_BORDER_SPEED`** (1) | Higher = faster lap; **0.2–5**. Ignored if `accentBorderLapDurationMs` set |
| `accentBorderHighlightLengthPercent` | `number` | **27.5** | **%** of stroke midline lit; **6–50** |
| `accentBorderLapDurationMs` | `number` | — | Optional fixed lap (ms); **overrides** speed |
| `primaryLabel` | `string` | `"Label"` | Omit empty to hide primary |
| `secondaryLabel` | `string` | `"Not now"` | |
| `onPrimaryPress` / `onSecondaryPress` | `function` | — | |
| `trailing` | `ReactNode` | default `Avatar` | |
| `style` | `ViewStyle` | — | Outer shell (`width: 100%`) |

## Animated border (implementation)

- **2px** rounded ring, `theme.radius.xl`, base stroke = Magic `/start` analogue (`primaryPillTint`).
- **Motion:** orbiting soft radial highlight (`primaryContent`) along the **stroke midline** (see `MagicHeroCalloutGradientBorder.tsx`). Mask and base fill stay fixed; only highlight position moves.
- **Defaults:** lap time `theme.motion.main.slow × 10` at **`accentBorderSpeed` 1**; highlight **`accentBorderHighlightLengthPercent` 27.5** (~Figma 25–30% of stroke midline).
- **Tuning props (readability):**
  - **`accentBorderSpeed`** — **1** = default; **2** ≈ twice as fast (half the lap time). Clamped **0.2–5**. Ignored if **`accentBorderLapDurationMs`** is set.
  - **`accentBorderHighlightLengthPercent`** — **percent (0–100 scale)** of the stroke **midline** perimeter that reads lit (incl. feather). Clamped **6–50**. Default **27.5**.
  - **`accentBorderLapDurationMs`** — optional fixed lap duration in ms (**overrides** speed).
- **Accessibility:** iOS/Android **Reduce motion** → solid `primaryPillTint` stroke. `animatedAccentBorder={false}` → same.
- **Peers:** `react-native-svg`, `react-native-reanimated` (animated path only).

## Figma → code map (blocks)

| Block | Figma | Code |
|-------|--------|------|
| Content | `8077-2046`, titles `8077-1830` / `2047` / `2050`, body `8102-121` | `NText` `labelMediumStrong` + `paragraphSmallDefault` / `tone="secondary"` |
| Trailing | `8103-739`, instance `8077-1804` | Default `Avatar` + `primaryPillTint` + scrim |
| Buttons | `8086-844`, inner `8086-868` | Primary pill + ghost; `ArrowRightIcon` 16 |
| Standard border | `8094-169`, length `8095-179` | `MagicHeroCalloutGradientBorder` |
| Attention / Critical border | `8094-141`, `8094-174` | Same component; palette from variant |

## Spacing audit (Figma x → `theme.spacing`)

| Region | Figma | Token index |
|--------|-------|-------------|
| Screen gutter H / below card | x4 / x3 | `[4]` / `[3]` |
| Card wrapper `pb` below Bottom | x1 | `[1]` |
| Top pt / px / pb | x5 / x5 / x4 | `[5]` / `[5]` / `[4]` |
| Title row gap | x3 | `[3]` |
| Bottom px / pb | x3 / x1 | `[3]` / `[1]` |
| Button group gap | x2 | `[2]` |
| Primary outer / inner height | 44 / 36 | `[11]` / `[9]`; inner `px` x4 |

## Layout note

Top inset uses **`spacing[5]`** horizontally; bottom actions use **`spacing[3]`**, so the button row is slightly wider than the title block (matches Figma `8077:1802` vs `8077:1805`).

## Storybook

`storybook/MagicHeroCallout.stories.tsx` — **Patterns / MagicHeroCallout**; controls for **speed**, **highlight length %**, and optional fixed lap ms. From repo root: `npm run storybook:local:ios` (or `storybook:ios`).

## Package exports

From `@nu-design-org/nuds-vibecode-react-native` (patterns barrel):

| Export | Meaning |
|--------|---------|
| `MagicHeroCallout` | Component |
| `MAGIC_HERO_CALLOUT_DEFAULT_ACCENT_BORDER_SPEED` | Default speed multiplier (**1**) |
| `MAGIC_HERO_CALLOUT_DEFAULT_HIGHLIGHT_LENGTH_PERCENT` | Default highlight length (**27.5** %) |
| `MAGIC_HERO_CALLOUT_DEFAULT_HIGHLIGHT_STROKE_FRACTION` | Default ÷ 100 (low-level) |
| `highlightLengthPercentToStrokeFraction` | Clamp **6–50** % → internal **0.06–0.5** |
| `MagicHeroCalloutGradientBorderProps` | Type for internal border helper |
