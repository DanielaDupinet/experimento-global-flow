---
name: nuds-library-usage
description: Guide for using, extending, and creating components in the NuDS React Native design system. Use when building UI with NuDS, creating new components or primitives, extending existing ones, working with tokens/theme, or implementing screens that consume this library.
---

# NuDS Library Usage Guide

How to consume, extend, and contribute to the `@nu-design-org/nuds-vibecode-react-native` design system.

## Architecture (read this first)

```
tokens  ->  theme  ->  react-native components
```

| Package | Role | Location |
|---------|------|----------|
| `@nu-design-org/nuds-vibecode-tokens` | Raw design values (colors, spacing, radii, typography, elevation, motion, zIndex) | `packages/tokens/src/` |
| `@nu-design-org/nuds-vibecode-theme` | Semantic light/dark themes built from tokens (`NuDSTheme` type) | `packages/theme/src/` |
| `@nu-design-org/nuds-vibecode-react-native` | Primitives, components, patterns, and icons for React Native | `packages/react-native/src/` |

**Key rule**: Components never import from `@nu-design-org/nuds-vibecode-tokens` directly (except type imports). They always consume values through `useNuDSTheme()`.

## Component Hierarchy

```
primitives/   — Atomic building blocks (Box, NText, Divider, Field)
components/   — Reusable UI controls (Button, TextField, Select, TopBar, …)
patterns/     — Composite layouts tied to product use cases (DashboardHero, Widget2x2, …)
icons/        — SVG icon components
foundation/   — Non-visual utilities (loadFonts)
```

### Primitives

Thin wrappers around React Native core views that bind to the theme. They are the **only** place raw RN views should be wrapped.

| Primitive | Wraps | Purpose |
|-----------|-------|---------|
| `Box` | `View` | Theme-aware container with `surface` prop (screen/primary/secondary) |
| `NText` | `Text` | Typography with `variant` and `tone` mapped to theme |
| `Divider` | `View` | Horizontal rule using theme border color |
| `Field` | `View` + `NText` | Label/hint/error wrapper for form controls |

### Components

Compose primitives and native elements. Examples: `Button`, `TextField`, `Select`, `TopBar`.

### Patterns

Compose components and primitives into product-level layouts. Examples: `DashboardHero`, `Widget2x2`, `LimitBar`.

### Icons

SVG components using `react-native-svg`. All accept `IconProps` (`size?`, `color?`, `opacity?`) and default color to `theme.color.content.primary`.

---

## Decision Tree: What Should I Do?

### "I need to display text"
Use `NText` with a `variant` and `tone`. Never use raw `<Text>`.

### "I need a container/layout"
Use `Box` when you need a theme-aware background. Use plain `View` when no background is needed.

### "I need a form field with label/error"
Wrap your input in `Field`. See `TextField` and `Select` for reference.

### "I need a button"
Use `Button`. It supports `variant`, `compact`, `expanded`, `loading`, `leadingIcon`, `trailingIcon`, and `iconOnly`.

### "I need an icon"
Check `packages/react-native/src/icons/` first. If the icon exists, import and use it. If not, create a new one following the icon pattern (see [component-patterns.md](component-patterns.md#creating-an-icon)).

### "I need a component that doesn't exist yet"

Ask yourself:

1. **Can an existing component do this with its current props?** -> Use it as-is.
2. **Can an existing component do this with a new prop/variant?** -> Extend it (add a prop, not a fork).
3. **Is this a new atomic building block?** -> Create a new primitive (rare — only if it wraps a new RN core view in a theme-aware way).
4. **Is this a new reusable control?** -> Create a new component in `components/`.
5. **Is this a product-specific composite layout?** -> Create a new pattern in `patterns/`.

### "Should I extend or create?"

**Extend** when:
- The behavior is a natural variant of an existing component (e.g., a new Button variant).
- You're adding a prop that doesn't break existing consumers (additive change).
- The component's fundamental layout and semantics stay the same.

**Create new** when:
- The layout, semantics, or interaction model is fundamentally different.
- Extending would require conditional logic that makes the original component hard to read.
- The component has no meaningful overlap with existing ones.

### "Should this be a primitive?"

A new primitive is warranted **only** when:
- It wraps a React Native core element (`TextInput`, `ScrollView`, `Image`, etc.) in a theme-aware way.
- It will be composed by multiple components.
- It is purely structural — no business logic, no product assumptions.

If any of those aren't true, it belongs in `components/` or `patterns/`.

---

## Non-Negotiable Rules

1. **No raw color values** — Never use `#hex`, `rgb()`, or hardcoded colors in component files. All colors come from `useNuDSTheme()`.
2. **No direct token imports for values** — Components use `useNuDSTheme()`, not `import { spacing } from "@nu-design-org/nuds-vibecode-tokens"`. Type-only imports from tokens are fine.
3. **Theme-first styling** — Every visual decision (color, spacing, radius, elevation, typography) must resolve through the theme object.
4. **Lowercase variants** — Public API variant strings use lowercase: `primary`, `secondary`, `ghost`, not `Primary`, `Secondary`.
5. **Barrel exports** — Every new component must be re-exported from its folder's `index.ts` and from `packages/react-native/src/index.ts`.
6. **Folder-per-component** — Each component lives in its own folder: `ComponentName/ComponentName.tsx`, `ComponentName/index.ts`, optionally `ComponentName/styles.ts`.
7. **Accessibility** — Interactive components must set `accessibilityRole` and support `disabled` / `accessibilityState`.
8. **No product logic in DS** — Components must not contain business logic, API calls, or product-specific assumptions. Patterns may encode layout assumptions but not data fetching.

---

## How to Create New Things

Detailed code templates and examples are in [component-patterns.md](component-patterns.md).

### Quick checklist for any new component

- [ ] Created folder: `ComponentName/ComponentName.tsx` + `ComponentName/index.ts`
- [ ] Uses `useNuDSTheme()` for all visual values
- [ ] Uses `NText` for any text (not raw `<Text>`)
- [ ] Uses `Box` for themed containers (or plain `View` for non-themed layout)
- [ ] Typed props extending appropriate RN base (`ViewProps`, `PressableProps`, etc.)
- [ ] Exported from folder `index.ts` and from `packages/react-native/src/index.ts`
- [ ] Variant strings are lowercase
- [ ] `accessibilityRole` set on interactive elements
- [ ] No hardcoded colors, spacing, or font values
- [ ] Works in both light and dark mode

---

## Theme Object Reference

Access via `const theme = useNuDSTheme();`

| Path | What it gives you | Example usage |
|------|-------------------|---------------|
| `theme.color.main` | Brand primary color | Background of primary buttons |
| `theme.color.content.primary` | Primary text/icon color | Default text color |
| `theme.color.content.secondary` | Secondary text/icon color | Hints, captions |
| `theme.color.content.main` | Content on brand color | White text on purple button |
| `theme.color.background.screen` | Screen background | Root container |
| `theme.color.background.primary` | Card/surface background | Card containers |
| `theme.color.background.secondary` | Subtle surface background | Grouped sections |
| `theme.color.border.primary` | Default border color | Input borders |
| `theme.color.negative` | Error/destructive color | Error text, destructive buttons |
| `theme.color.positive` | Success color | Success states |
| `theme.color.warning` | Warning color | Warning states |
| `theme.spacing[N]` | 4pt scale (0–24 keys) | `theme.spacing[4]` = 16 |
| `theme.radius.{sm,md,lg,xl,xxl,full}` | Border radius | `theme.radius.md` |
| `theme.typography[variant]` | Font family + size + lineHeight | `theme.typography.titleLarge` |
| `theme.elevation.{level1,level2,level3}` | Shadow styles | Card elevation |

---

## Typography Variant Naming

Pattern: `{category}{Size}{Weight}`

- **Categories**: `title`, `subtitle`, `body`, `paragraph`, `label`, `display`
- **Sizes**: `XLarge`, `Large`, `Medium`, `Small`, `XSmall`, `2XSmall`
- **Weights**: `Default` (regular), `Strong` (semibold)

Examples: `titleLarge`, `bodyMediumDefault`, `labelSmallStrong`, `paragraphMediumDefault`

Label variants automatically enable tabular numbers in `NText`.

---

## Spacing Scale

Uses a 4pt grid. Access with `theme.spacing[key]`.

| Key | Value (px) |
|-----|-----------|
| 0 | 0 |
| 1 | 4 |
| 2 | 8 |
| 3 | 12 |
| 4 | 16 |
| 5 | 20 |
| 6 | 24 |
| 8 | 32 |
| 10 | 40 |
| 12 | 48 |
| 16 | 64 |
| 20 | 80 |
| 24 | 96 |

---

## Import Conventions

When consuming the library in an app:

```typescript
import {
  NuDSThemeProvider,
  useNuDSTheme,
  Box,
  NText,
  Button,
  TextField,
  ArrowBackIcon
} from "@nu-design-org/nuds-vibecode-react-native";
```

When building inside the library (component-to-component):

```typescript
// Relative imports within packages/react-native/src/
import { NText } from "../../primitives/Text";
import { useNuDSTheme } from "../../theme";
import { Field } from "../../primitives/Field";
import { ExpandMoreIcon } from "../../icons";
```

---

## Additional Resources

- Detailed code patterns and templates: [component-patterns.md](component-patterns.md)
- Built component inventory: `BUILT_COMPONENTS.md` (project root)
- Troy migration plan: `TROY_INTEGRATION_PLAN.md` (project root)
- Figma to NuDS mapping manifests: `packages/react-native/src/figma/component-map.json` and `packages/react-native/src/figma/token-map.json`
- Figma mapping workflow docs: `docs/figma-mapping.md`
- Motion standards for component animations: `.cursor/skills/motion-guidelines/SKILL.md`
- React Native best practices: `.cursor/vendor/agent-skills/skills/react-native-skills/SKILL.md`
