---
name: nuds-design-system
description: Base NuDS usage policy for consumer apps. Use this for component/token selection and anti-adhoc guardrails. Pair with nuds-consumer-figma-mcp for Figma MCP translation logic.
---

# NuDS Design System Usage

## Goal

Every UI element must prefer NuDS library components and tokens. When no NuDS
component exists, use NuDS tokens for styling. When neither is possible, mark
the code explicitly so future agents can promote it back to the library.

## Layered Skills Contract

This is the base policy skill. It defines:

- what to use from NuDS
- what to avoid (adhoc/raw styles)
- how to annotate gaps

For converting Figma MCP payloads into component/prop/token decisions, defer to:

- `.cursor/skills/nuds-consumer-figma-mcp/SKILL.md`

Do not duplicate the MCP parsing/mapping algorithm here.

## Source of Truth (Required Before Adhoc)

Do not assume any list in this skill is complete. NuDS evolves by version.

Before deciding component/pattern/icon does not exist, check exports in order:

1. `node_modules/@nu-design-org/nuds-vibecode-react-native/src/index.ts`
2. `node_modules/@nu-design-org/nuds-vibecode-react-native/src/patterns/index.ts`
3. `node_modules/@nu-design-org/nuds-vibecode-react-native/src/icons/index.ts`

If the project points to a different package version, verify that version's
`src/index.ts` as authoritative.

## Decision Flow

1. Component/pattern/icon exists in current package exports -> Use it directly.
2. No component, but tokens cover styling -> Build with `Box`, `NText`, `useNuDSTheme()`.
3. Must create adhoc component/token -> Build and annotate with markers below.

## Adhoc Markers (Required)

- `@nuds-adhoc-component`
- `@nuds-adhoc-token`
- `@nuds-adhoc-pattern`

Keep markers exact and searchable.

## Rules

1. Never use raw color hex/rgb values when a theme token exists.
2. Never use raw numeric spacing when `theme.spacing` covers it.
3. Never use raw font sizes/families for user-facing text; use `NText`.
4. Never recreate existing NuDS components from scratch.
5. Prefer `Box` over `View` for user-facing layout/surfaces.
6. Prefer `NText` over React Native `Text` for product copy.

## Quick Reference

- Primitives: `Box`, `NText`, `Divider`, `Field`
- Common components: `Button`, `TopBar`, `TextField`, `Select`, `InlineActions`, `LoadingButton`, `CircularLoader`
- Common patterns: `DashboardHero`, `LimitBar`, `Widget2x2`, `Widget4xN`
- Theme usage: `const theme = useNuDSTheme()`

## Example

```tsx
import {
  Box,
  NText,
  Button,
  useNuDSTheme,
} from "@nu-design-org/nuds-vibecode-react-native";

export const Screen = () => {
  const theme = useNuDSTheme();

  return (
    <Box surface="screen" style={{ padding: theme.spacing[4] }}>
      <NText variant="titleSmall">Welcome</NText>
      <Button label="Continue" variant="primary" />
    </Box>
  );
};
```
