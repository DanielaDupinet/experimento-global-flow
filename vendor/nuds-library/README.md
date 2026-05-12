# nuds-library

Design system workspace for React Native (Expo) with a web-ready architecture.

## Workspace Packages

- `packages/tokens`: platform-agnostic design tokens
- `packages/theme`: semantic light/dark themes
- `packages/react-native`: RN primitives and components
- `packages/react-web`: web-specific components

## Principles

- Foundation first: tokens -> themes -> components
- Semantic usage: components consume semantic tokens, not raw color values
- Stable API: public exports only from package `src/index.ts`
- App-agnostic: no product-specific logic in DS components

---

## Using as a Library

This design system is distributed as private npm packages via **GitHub Packages**. No manual Personal Access Token (PAT) is needed — if you have GitHub CLI (`gh`) authenticated, you're ready to go.

### Option A — GitHub Packages via `gh` CLI (recommended)

**Prerequisites:** [GitHub CLI](https://cli.github.com/) installed and authenticated (`gh auth login`).

**1. Export the token from `gh` (one-time setup)**

Add this line to your shell profile (`~/.zshrc` or `~/.bashrc`):

```bash
export GITHUB_TOKEN=$(gh auth token)
```

Then reload your shell (`source ~/.zshrc`) or open a new terminal.

**2. Add `.npmrc` to your project root**

```
@nu-design-org:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

> You can also run the setup script to do both steps automatically: `bash <(curl -sL https://raw.githubusercontent.com/nu-design-org/nuds-library/main/scripts/consumer-setup.sh)`

**3. Install**

```bash
npm install @nu-design-org/nuds-vibecode-react-native
```

To pin a specific version:

```bash
npm install @nu-design-org/nuds-vibecode-react-native@0.2.0
```

### Option B — Install from GitHub Release tarball (zero-config)

Every release includes pre-built `.tgz` tarballs attached as assets. No `.npmrc` or token setup needed — just repo access:

```bash
npm install https://github.com/nu-design-org/nuds-library/releases/download/v0.2.0/nuds-vibecode-react-native-0.2.0.tgz
```

Browse available releases: https://github.com/nu-design-org/nuds-library/releases

### Peer Dependencies

The consuming project must have these packages installed:

```json
{
  "react": ">=18.0.0",
  "react-native": ">=0.72.0",
  "react-native-svg": ">=13.0.0",
  "expo-font": ">=14.0.0"
}
```

### Usage

```tsx
import { NuDSThemeProvider, Button, NText, Box, loadNuDSFonts } from "@nu-design-org/nuds-vibecode-react-native";

// Load bundled Nu Sans fonts before rendering (no arguments needed)
await loadNuDSFonts();

function App() {
  return (
    <NuDSThemeProvider mode="light">
      <Box style={{ padding: 16 }}>
        <NText variant="titleSmall">Hello NuDS</NText>
        <Button label="Press me" onPress={() => {}} />
      </Box>
    </NuDSThemeProvider>
  );
}
```

### Importing Tokens or Theme Directly

If your project needs direct access to design tokens or theme values:

```bash
npm install @nu-design-org/nuds-vibecode-tokens @nu-design-org/nuds-vibecode-theme
```

```tsx
import { spacing, radius } from "@nu-design-org/nuds-vibecode-tokens";
import { lightTheme, darkTheme } from "@nu-design-org/nuds-vibecode-theme";
```

### Local Development (testing unreleased changes)

To test changes in this design system from a consuming project without publishing:

```bash
# In the NuDS-react-vibecode repo — build all packages
npm run build

# In the NuDS-react-vibecode/packages/react-native directory
npm link

# In your consuming project
npm link @nu-design-org/nuds-vibecode-react-native
```

When done testing, unlink:

```bash
# In your consuming project
npm unlink @nu-design-org/nuds-vibecode-react-native
npm install
```

### CI / Automation

For CI pipelines that need to install from GitHub Packages, set the `GITHUB_TOKEN` environment variable in your CI config. Most GitHub Actions workflows already have this available via `${{ secrets.GITHUB_TOKEN }}`.

### How It Works

Packages are published to GitHub Packages via a CI workflow on every version tag (`v*`). Pre-built tarballs are also attached to each GitHub Release for direct download. Internal workspace dependencies (`@nu-design-org/nuds-vibecode-tokens`, `@nu-design-org/nuds-vibecode-theme`) are included via `bundledDependencies`, so consumers only need to install `@nu-design-org/nuds-vibecode-react-native`.

---

## Development

### Building

```bash
npm run build       # Build all workspace packages (in dependency order)
npm run clean       # Remove all dist/ folders
npm run typecheck   # Type-check all packages without emitting
```

### Storybook

```bash
npm run storybook:live      # Metro + Storybook (Fast Refresh; clears CI for watch mode)
npm run storybook:ios:live  # iOS dev build + simulator + Metro (use day-to-day)
npm run storybook:ios:sync  # After pull / deps / native changes: npm install + pod install + storybook:ios:live
```

Optional port: `npm run storybook:ios:live -- --port 8082`.

**Keep the simulator updated:** use `:live` scripts so `CI` is unset — otherwise Metro may run in CI mode and skip Fast Refresh. Edits under `packages/` and `storybook/` are watched via `metro.config.js` (`watchFolders`).

Aliases without `:live`: `npm run storybook`, `npm run storybook:ios` (same env vars; may inherit `CI=true` from your terminal).

#### Storybook Troubleshooting

- **Symptom:** Red screen with `Element type is invalid... got: undefined` (often around `NuDSThemeProvider` or a pattern story).
- **Likely cause:** Stale `packages/react-native/dist` output that is missing recent exports.
- **Manual recovery:** run `npm run -w @nu-design-org/nuds-vibecode-react-native build`, then restart Metro (`storybook:live` or `storybook:ios:live`).

### Releasing a New Version

All packages are versioned in lockstep. Use the release CLI:

```bash
# Bump patch (0.2.0 → 0.2.1), commit, and tag
npm run release:patch

# Bump minor (0.2.0 → 0.3.0)
npm run release:minor

# Bump major (0.2.0 → 1.0.0)
npm run release:major

# Or specify an exact version
npm run release -- 0.5.0
```

The script will:
1. Verify you are on `main` with a clean working tree
2. Bump `version` in all 5 `package.json` files
3. Generate/update `CHANGELOG.md` from the git log
4. Create a commit (`release: v<version>`) and an annotated tag (`v<version>`)

To publish, push the commit and tag:

```bash
git push origin main && git push origin v<version>
```

Or do it all in one step:

```bash
npm run release -- patch --push
```

The `--push` flag pushes both the commit and tag, which triggers the GitHub Actions workflow to publish all packages to GitHub Packages.

Use `--dry-run` to preview what would happen without making any changes:

```bash
npm run release -- patch --dry-run
```

## Notes

- Baseline token values are seeded from `Prometheus-MVP`.
- `Prometheus-MVP` code is not modified by this workspace.
