---
name: project-versioning
description: Handles version bumps for the NuDS monorepo using Semantic Versioning (MAJOR.MINOR.PATCH). Confirms bump type with the user, runs the release CLI, and ensures the version commit and CHANGELOG describe what's new. Use when the user is about to commit or push changes, when they ask to release or bump version, or when they have library changes under packages/ and intend to commit/push.
---

# Project Versioning

SemVer-based versioning workflow for the NuDS monorepo. Follow this skill when the user is committing/pushing library changes or asks to release.

## Semantic Versioning

Follow [Semantic Versioning 2.0.0](https://semver.org/):

- **MAJOR**: Incompatible API changes.
- **MINOR**: Backward-compatible new functionality.
- **PATCH**: Backward-compatible bug fixes.

For which change type maps to patch/minor/major in this repo, see [release-workflow-always.mdc](.cursor/rules/release-workflow-always.mdc) (Bump Type Guidelines).

## When to Offer a Bump

- **Offer a version bump** only if there are changes under `packages/` (tokens, theme, react-native, react-web) or the user explicitly asks to release/bump.
- **Do not prompt** for a bump when only non-library changes exist (e.g. `.cursor/`, `storybook/`, `scripts/`, root docs, CI). See "When NOT to Bump" in the release rule.

## Confirmation Flow

1. Before committing/pushing, if library changes exist (or the user asked to release), ask:
   **"Bump version? (patch / minor / major / no)"**
   Show the current version (from `packages/tokens/package.json`) and what the next version would be for each choice (e.g. current `0.5.0` → patch `0.5.1`, minor `0.6.0`, major `1.0.0`).

2. **If the user chooses patch, minor, or major**: Run the release CLI. Do not use `--push` unless the user explicitly asks to push.
   ```bash
   npm run release -- <patch|minor|major>
   ```
   Or: `npm run release:patch`, `npm run release:minor`, `npm run release:major`.

3. **If the user says no or skip**: Proceed with the normal commit/push without running the release script.

## Release Script Behavior

The release script (`scripts/release.mjs`) is the single source of truth. It:

- Verifies clean working tree and `main` branch
- Runs Figma mapping refresh (unless `--skip-figma-sync` or dry-run)
- Bumps all 5 `package.json` files in lockstep
- Updates **CHANGELOG.md** with a new `## [X.Y.Z] — date` section and the list of changes (commits since last tag)
- Creates a commit with subject `release: vX.Y.Z` and a **body** that lists what’s new (same as the new CHANGELOG section)
- Creates an annotated tag `vX.Y.Z`

Do not rewrite or amend the release commit message; the script provides the body. No extra step is required beyond running the script.

## Release Notes / Changes Log

Release notes for every new version are written to **CHANGELOG.md** at the repo root. The release script adds a new section for each release with the list of changes. This file is the single source of truth for version history and release notes. No separate RELEASE_NOTES.md is required unless the team adds one later.

## References

- **When to bump / when not to bump**: [.cursor/rules/release-workflow-always.mdc](.cursor/rules/release-workflow-always.mdc)
- **Release CLI options** (dry-run, push, skip-figma-sync): [scripts/release.mjs](scripts/release.mjs)

## Optional: Git Hook for Terminal Pushes

If the user often pushes from the terminal without the agent, they can install a `pre-push` hook that prompts for a version bump. The hook would run a script that asks "Bump version? (patch/minor/major/n)" and, if not "n", run `npm run release -- <type>`. This is optional; document it in the skill or in the repo docs if the team wants it. The agent-driven confirmation flow above remains the primary workflow.
