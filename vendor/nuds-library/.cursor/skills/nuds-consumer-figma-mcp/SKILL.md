---
name: nuds-consumer-figma-mcp
description: Use this in consumer repos to map Figma MCP output to @nu-design-org/nuds-vibecode-react-native components, props, and semantic theme tokens when building screens.
---

# NuDS Consumer Figma MCP Skill

## Goal

When implementing screens from Figma MCP output in a consumer app, choose the
correct NuDS component and generate correct prop/token usage deterministically.

## Layered Skills Contract

This skill is only for Figma MCP translation logic.

- Component/token policy and anti-adhoc guidance live in:
  `.cursor/skills/nuds-design-system/SKILL.md`
- This skill owns:
  - MCP payload parsing
  - mapping resolution with `component-map.json` and `token-map.json`
  - fallback behavior for ambiguous MCP output

## Mapping Source of Truth (consumer repo)

Always resolve mapping from the installed package version:

1. `node_modules/@nu-design-org/nuds-vibecode-react-native/figma/component-map.json`
2. `node_modules/@nu-design-org/nuds-vibecode-react-native/figma/token-map.json`
3. `node_modules/@nu-design-org/nuds-vibecode-react-native/src/index.ts` (for export verification)

Do not rely on memory of available components. Read the package files first.

## Resolution Algorithm (must follow in order)

### Component resolution

For each Figma MCP component/layer:

1. Match `bdcNames`
2. Match `figmaComponentNames`
3. Match `figmaPageAliases`
4. Match normalized alias/name fallback
5. Apply `usage.requiredProps`
6. Apply `usage.variantMap`
7. Apply `usage.fallbackRules`

### Token resolution

For each Figma variable/token:

1. Use `preferredThemePaths[0]`
2. If unavailable, use next path in `preferredThemePaths`
3. Check `aliases` for naming drift
4. Never fallback to raw hex/rgb/spacing numbers when semantic mapping exists

## Screen-building Workflow (MCP -> NuDS code)

1. Parse MCP output:
   - component names
   - variant tuples (for example `Type=Primary`, `State=Loading`)
   - variable names/tokens
2. Resolve each UI block to a NuDS export via `component-map.json`.
3. Translate variants to props using `usage.variantMap`.
4. Build layout with NuDS primitives/components (`Box`, `NText`, etc.).
5. Resolve styles through `token-map.json` to semantic theme paths.
6. Compose full screen using only package exports from `src/index.ts`.
7. If unresolved:
   - emit TODO with original Figma name and variant info
   - choose nearest `status=partial` entry only when confidence is acceptable
   - do not invent DS components silently

## Quick Mapping Examples

### Button

- Figma: `[Magic] Button`, `Type=Primary`, `State=Loading`
- NuDS: `Button` or `LoadingButton`
- Props: `variant="primary"`, `loading={true}`

### Top bar

- Figma: `Top Bar`
- NuDS: `TopBar`
- Usage: map leading/trailing icon actions to `leading` / `trailing` slots

### Text input

- Figma: `Input Text`, `Input Password`
- NuDS: `TextField`
- Usage: for password variants, set secure text behavior according to mapping

### Transaction row

- Figma: `Transaction List Row`, `State=Skeleton`
- NuDS: `TransactionListRow`
- Props: `skeleton={true}` when state indicates skeleton

## Guardrails

1. Follow base NuDS policy from `.cursor/skills/nuds-design-system/SKILL.md`.
2. Keep fallback decisions explicit and traceable with TODO comments.
3. Do not redefine broad design-system rules here; this skill is mapping-specific.

## Suggested consumer rule snippet

In the consumer repo, add an always-on rule that instructs agents:

- before coding from Figma MCP, read the two NuDS mapping JSON files from `node_modules`
- use the resolution algorithm above
- reject outputs that bypass NuDS components/tokens when mappings exist
