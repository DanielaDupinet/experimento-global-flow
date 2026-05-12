# Figma to NuDS Mapping

This repository ships mapping artifacts so agents in consumer repositories can
translate Figma MCP/REST output into NuDS components and semantic theme tokens.

## What gets shipped

- `@nu-design-org/nuds-vibecode-react-native/figma/component-map.json`
- `@nu-design-org/nuds-vibecode-react-native/figma/token-map.json`

These are versioned with the package. Consumer agents can read them directly
from `node_modules` and resolve mappings according to the installed NuDS version.

## Source artifacts in this repo

- `packages/react-native/src/figma/component-map.json`
- `packages/react-native/src/figma/token-map.json`
- `scripts/scan-figma-library.mjs`
- `docs/figma/scan/latest-summary.json` (generated scan summary)

## Resolution contract for agents

When mapping a Figma component to NuDS:

1. Match `bdcNames` first (highest confidence).
2. Then match `figmaComponentNames`.
3. Then match `figmaPageAliases`.
4. Finally normalize and try aliases (lower confidence).

If unresolved:

- Use `status=partial` entries where available.
- Emit an explicit TODO comment with the original Figma node/component name.
- Do not invent new design-system components.

When mapping a Figma token/variable to NuDS:

1. Use `preferredThemePaths[0]`.
2. If unavailable in context, use the next candidate in `preferredThemePaths`.
3. Check `aliases` for alternative naming seen in MCP output.
4. Prefer semantic theme paths (for example `theme.color.content.primary`) over
   raw numeric or hex values.

## Agent playbook (end-to-end)

Use this flow whenever an agent receives Figma MCP output and must generate NuDS code.

1. Parse MCP node metadata:
   - component name
   - variant pairs (`Type=Primary`, `State=Loading`, etc.)
   - token/variable names
2. Resolve the NuDS component in `component-map.json` using `resolutionOrder`.
3. Apply `usage.requiredProps` and `usage.variantMap` to produce initial props.
4. Apply `usage.fallbackRules` for missing/ambiguous Figma fields.
5. Resolve every token/variable through `token-map.json` to semantic paths.
6. Generate code using NuDS exports and semantic theme values only.
7. If unresolved, preserve traceability:
   - emit TODO with original Figma name/variant
   - avoid inventing new DS components or raw values

## Consumer repo usage

Agents in consuming repositories should read mapping files from package subpaths:

```ts
import componentMap from "@nu-design-org/nuds-vibecode-react-native/figma/component-map.json";
import tokenMap from "@nu-design-org/nuds-vibecode-react-native/figma/token-map.json";
```

If direct JSON imports are unavailable in the consumer runtime, read these files
from `node_modules/@nu-design-org/nuds-vibecode-react-native/figma/`.

## Layered consumer skills (recommended)

Install two complementary skills in the consumer repo:

- `.cursor/skills/nuds-design-system/SKILL.md` (base NuDS policy)
- `.cursor/skills/nuds-consumer-figma-mcp/SKILL.md` (MCP mapping algorithm)

Use setup script:

```bash
bash scripts/consumer-setup.sh --target=/path/to/consumer-repo
```

Dry-run preview:

```bash
bash scripts/consumer-setup.sh --dry-run --target=/path/to/consumer-repo
```

Verification only:

```bash
bash scripts/consumer-setup.sh --check --target=/path/to/consumer-repo
```

`--check` guarantee:

- read-only mode (no writes to shell profile, `.npmrc`, or skill files)
- validates expected setup state and reports missing pieces

### Anti-clash contract

- `nuds-design-system` is the source of truth for broad component/token policy.
- `nuds-consumer-figma-mcp` is the source of truth for Figma MCP translation logic.
- Base skill delegates MCP parsing/mapping details to MCP skill.
- MCP skill delegates broad NuDS policy/adhoc rules to base skill.
- Shared mapping terms (`component-map.json`, `token-map.json`, `resolutionOrder`) stay in MCP-focused docs/skill.

## Running a live Figma scan

Use environment variables (do not hardcode keys in files):

```bash
FIGMA_API_KEY=your_key npm run figma:scan
```

Optional:

```bash
FIGMA_API_KEY=your_key FIGMA_FILE_KEY=your_file_key npm run figma:scan
```

By default the scanner targets:

- file key: `dqfrs37AQmkZcC1LpaGcLf`
- output: `docs/figma/scan/latest-summary.json`

## Release-time requirements

Library releases refresh and validate mapping artifacts by default.

Required environment for non-dry releases:

```bash
export FIGMA_API_KEY=your_key
```

Release flow:

```bash
npm run release:patch
```

During release, the script runs:

1. `npm run figma:scan`
2. `npm run figma:validate`
3. version bump/changelog/commit/tag

If mapping refresh fails, release exits with an error and does not create a tag.

`--dry-run` behavior:

- does not require `FIGMA_API_KEY`
- still runs `figma:validate`
- if `FIGMA_API_KEY` is present, it also previews that `figma:scan` would run

Explicit opt-out (only when Figma access is unavailable):

```bash
npm run release -- patch --skip-figma-sync
```

If this opt-out is used, document it clearly in PR and release notes. Use it only
as a temporary exception when Figma access is unavailable.

## Validate mapping integrity

Run validation checks before merging mapping updates:

```bash
npm run figma:validate
```

The validator checks:

- export coverage against `primitives`, `components`, and `patterns`
- required usage metadata for each component entry
- partial entries include rationale (`statusReason`)
- token mappings point to valid semantic NuDS theme paths

## Maintenance workflow

Update mappings when either side changes:

- new/renamed/removed NuDS exports in `packages/react-native/src/index.ts`
- variant naming changes in Figma component sets
- token naming changes in Figma variables

Recommended PR checklist:

- run `npm run figma:scan`
- run `npm run figma:validate`
- update `component-map.json` and `token-map.json`
- verify entries for any newly exported components/patterns/primitives
- include examples in PR description for at least one component and one token
