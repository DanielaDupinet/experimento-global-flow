# Prometheus-MVP Components Integration Plan

## Objective

Create a clear extraction strategy for `Prometheus-MVP` components into `NuDS-react-vibecode` while preserving:

- `packages/tokens` as the only token source
- `packages/theme` as semantic role layer
- `packages/react-native` as reusable component layer
- no modifications to `Prometheus-MVP`

## Source Inventory (Prometheus-MVP)

## 1) Shared Reusable Base (`src/components/shared`)

Highest extraction value:

- Inputs: `TextInputField`, `DropdownField`, `SimpleDropdownField`, `InputDropdown`, `DoubleInput`, `KeyInput`
- Actions/feedback: `AnimatedLoadingButton`, `CircularLoader`
- Numeric display: `AnimatedNumber`, `AnimatedBalance`, `RollingNumber`, `RollingDigit`, `RollingClock`
- Utility UI: `ArrowDivider`, `SafeBottomArea`, `CurrencyList`, `UMAInfo`
- Icons: large set in `src/components/shared/icons` (TSX + SVG, centralized `index.ts`)

## 2) Screen-local Components Worth Promoting

Likely candidates to become DS components/patterns:

- Navigation bars:
  - `src/screens/homepage/components/TopNavigation.tsx`
  - `src/screens/virtual-card/marketing/components/TopNavigationBar.tsx`
- Review blocks:
  - `src/screens/remittance/review/components/*`
  - `src/screens/add-money/components/review/*`
- Homepage widgets:
  - `src/screens/homepage/components/*Widget*.tsx`
  - transaction rows and action bars
- Bottom sheets/modals:
  - multiple virtual-card + onboarding + remittance components

These are useful but should start as `patterns` (not primitives) because many include feature assumptions.

## 3) Current Issues to Correct During Port

- Hardcoded colors in components (`#820AD1`, `#1F0230`, rgba literals)
- Mixed font family strings (`Nu Sans Medium`, `NuSansText-Semibold`, etc.)
- Z-index/elevation magic values in component styles
- Repeated variants of near-identical UI across features

## Integration Rule (Non-Negotiable)

Do not copy files from `Prometheus-MVP` directly into DS as final code.

For every extracted component:

1. preserve behavior and UX intent,
2. re-bind style to `useNuDSTheme()` + tokens,
3. remove hardcoded hex/spacing/radius values from component logic,
4. normalize API naming and variants.

## Target Classification in NuDS-react-vibecode

## A) `primitives/` (low-level)

- `NText` (expand variants + tabular number support)
- `Button` (full parity states/slots)
- `Icon` primitives
- `Divider`
- `Field` base wrappers

## B) `components/` (generic reusable)

- `TextField`
- `Select` / `DropdownField`
- `LoadingButton`
- `TopBar` (generic variant model)
- `ListItem`

## C) `patterns/` (product-like compositions)

- `TransferSummary`
- `TransactionDetails`
- `Widget` families (if promoted from homepage)
- custom bottom sheet composites

Patterns can later be promoted to components if fully generalized.

## Migration Phases

### Phase 1: Foundation Parity (before component ports)

1. Expand token coverage to match Prometheus needs:
   - typography variants used in screens
   - semantic color roles for subtle borders/overlays
   - elevation/zIndex aliases used by sheets/modals/top bars
2. Add temporary adapter (`prometheusAdapter`) only if needed for fast incremental migration.

### Phase 2: Shared Component Extraction (highest ROI)

Extract in this order:

1. `TextInputField`
2. `DropdownField` + `SimpleDropdownField`
3. `AnimatedLoadingButton`
4. `CircularLoader`
5. icon set baseline (`shared/icons/index.ts`)

Deliverable: first DS package usable by host apps without screen coupling.

### Phase 3: Navigation + Review Patterns

1. Consolidate top navigation variants into one DS `TopBar`
2. Merge duplicated review sections:
   - Remittance review components
   - Add-money review components

Deliverable: reduced duplication across feature domains.

### Phase 4: Advanced Patterns

Promote selected homepage and dashboard widgets into `patterns/`:

- action strips
- transaction rows
- balance/summary cards

Only promote if they can be made product-agnostic via props.

## Concrete Mapping Examples

## Example 1: `TopNavigationBar` and `TopNavigation`

Current: two different implementations, local style constants, hardcoded colors.  
Target: one DS `TopBar` with props:

- `variant`: `default | dropdown | modal`
- `tone`: `default | subtle | inverted`
- `leading`/`trailing` slots
- optional title/dropdown center behavior

## Example 2: Review Components

Current: remittance and add-money review sections share structure but diverge in assets/text.  
Target:

- shared pattern blocks (`SummaryRow`, `DetailRow`, `AvatarAmountRow`)
- composed feature-level usage in host app

## Example 3: Icons

Current: large icon library with mixed naming conventions.  
Target:

- keep source icons
- normalize naming/export surface in DS package
- enforce consistent props (`size`, `color`, optional `opacity`)

## API Normalization Rules

- Prefer lowercase variant enums:
  - from ad-hoc / Pascal labels to `primary | secondary | ghost | destructive`
- Use semantic tone props:
  - `primary`, `secondary`, `inverse`, `critical`, etc.
- Keep backward-compatible alias props during migration when necessary.

## Quality Gates per Extracted Component

Before marking a component integrated:

1. no raw color literals in component file,
2. no direct dependency on Prometheus `src/constants/fonts.js`,
3. uses `useNuDSTheme()` tokens,
4. shown in showcase app (`App.js`),
5. tested in light and dark mode,
6. accessibility basics validated (labels/roles/states).

## Risks and Mitigations

- Risk: DS becomes a dump of app-specific screens.
  - Mitigation: strict `component` vs `pattern` boundary.
- Risk: visual regressions during token replacement.
  - Mitigation: incremental extraction + side-by-side showcase verification.
- Risk: inconsistent APIs across migrated components.
  - Mitigation: central naming/variant normalization checklist.

## Bottom Line

`Prometheus-MVP` has a strong shared-component base to accelerate `NuDS-react-vibecode`.  
The best approach is:

1. extract from `src/components/shared` first,  
2. normalize with semantic tokens/theme hooks,  
3. promote screen-local pieces as patterns only after generalization.

This keeps the DS extensible, avoids coupling to app code, and stays aligned with the architecture already started.
