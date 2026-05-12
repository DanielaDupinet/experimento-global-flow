# Publishing a New Version of NuDS

This guide walks through the complete process of publishing a new version of the `@nu-design-org/nuds-vibecode` packages to **GitHub Packages** (a private npm registry scoped to your GitHub organization).

---

## Packages

| Package | Description |
|---|---|
| `@nu-design-org/nuds-vibecode-tokens` | Raw design tokens (colors, spacing, typography, etc.) |
| `@nu-design-org/nuds-vibecode-theme` | Semantic light/dark themes built from tokens |
| `@nu-design-org/nuds-vibecode-react-native` | React Native primitives, components, patterns, icons |
| `@nu-design-org/nuds-vibecode-react-web` | Web primitives and components |

All packages are **private** and only accessible to members of your GitHub organization.

> **Important:** All four packages share the same version number and are always published together.

---

## Step-by-Step Release Workflow

### 1. Make sure your branch is clean

```bash
git status
# Should show a clean working tree on the main branch
git pull origin main
```

### 2. Run pre-publish checks

Before bumping the version, verify that everything builds and typechecks correctly.

```bash
# Clean previous build artifacts
npm run clean

# Build all packages (tokens → theme → react-native → react-web)
npm run build

# Typecheck all packages
npm run typecheck

# Lint for raw color values (project convention)
npm run lint:colors
```

Fix any errors before proceeding.

### 3. Decide the new version number

Follow [Semantic Versioning](https://semver.org/):

| Change type | Bump | Example |
|---|---|---|
| Bug fixes, no API changes | **PATCH** | `0.1.0` → `0.1.1` |
| New components or props (backward-compatible) | **MINOR** | `0.1.0` → `0.2.0` |
| Breaking changes (removed/renamed props, restructured API) | **MAJOR** | `0.1.0` → `1.0.0` |

### 4. Bump the version in all packages

Update the `version` field in **all four** package.json files so they stay in sync:

- `packages/tokens/package.json`
- `packages/theme/package.json`
- `packages/react-native/package.json`
- `packages/react-web/package.json`

You can do this manually, or use this one-liner to bump all at once (replace `0.2.0` with your target version):

```bash
NEW_VERSION=0.2.0

# Update each workspace package.json
npm version $NEW_VERSION --no-git-tag-version --workspace=packages/tokens
npm version $NEW_VERSION --no-git-tag-version --workspace=packages/theme
npm version $NEW_VERSION --no-git-tag-version --workspace=packages/react-native
npm version $NEW_VERSION --no-git-tag-version --workspace=packages/react-web
```

> **Note:** The root `package.json` version does not need to match — it is `private: true` and never published.

### 5. Rebuild after version bump

```bash
npm run clean
npm run build
```

This ensures the `dist/` output reflects the updated version.

### 6. Commit and tag

```bash
git add -A
git commit -m "chore: release v0.2.0"
git tag v0.2.0
```

### 7. Push to trigger automated publish

```bash
git push origin main --tags
```

The GitHub Actions workflow (`.github/workflows/publish.yml`) automatically:
1. Checks out the tagged commit
2. Installs dependencies
3. Builds all packages in dependency order
4. Publishes each package to GitHub Packages using `GITHUB_TOKEN`

### 8. Verify the publish

1. Go to your GitHub repository → **Packages** tab
2. Confirm all four packages show the new version
3. In a consuming project, verify you can install the new version:

```bash
npm install @nu-design-org/nuds-vibecode-react-native@0.2.0
```

---

## Publishing Manually (from your machine)

Use this if the CI workflow fails or you need to publish without pushing a tag.

### Prerequisites

- A GitHub **Personal Access Token (PAT)** with `write:packages` scope
- Create one at https://github.com/settings/tokens → "Generate new token (classic)" → select `write:packages`

### Steps

```bash
# 1. Set your token
export NODE_AUTH_TOKEN=ghp_your_token_here

# 2. Clean and build
npm run clean
npm run build

# 3. Publish in dependency order (order matters!)
npm publish --workspace=packages/tokens
npm publish --workspace=packages/theme
npm publish --workspace=packages/react-native
npm publish --workspace=packages/react-web
```

### Manual trigger via GitHub UI

You can also trigger the publish workflow without pushing a tag:

1. Go to your repository on GitHub
2. Click **Actions** → **"Publish Packages to GitHub Packages"**
3. Click **"Run workflow"** → select the branch → **"Run workflow"**

---

## Consuming Published Packages (other repos)

### 1. Create a GitHub Personal Access Token (PAT)

Each developer needs a PAT with **`read:packages`** scope:

1. Go to https://github.com/settings/tokens
2. Click **"Generate new token (classic)"**
3. Select scope: `read:packages`
4. Copy the token

### 2. Configure the consuming repo

Create an `.npmrc` file in the root of the consuming project:

```
@nu-design-org:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_TOKEN_HERE
```

> **Security tip:** Don't commit tokens. Use an environment variable instead:
> ```
> @nu-design-org:registry=https://npm.pkg.github.com
> //npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
> ```
> Then set `NODE_AUTH_TOKEN` in your shell profile (`~/.zshrc`) or CI secrets.

### 3. Install the packages

```bash
npm install @nu-design-org/nuds-vibecode-react-native
# or for web:
npm install @nu-design-org/nuds-vibecode-react-web
```

`tokens` and `theme` are bundled dependencies and come along automatically.

### 4. CI/CD in the consuming repo

Add `NODE_AUTH_TOKEN` as a secret in your CI environment (GitHub Actions, Bitrise, etc.):

```yaml
# Example GitHub Actions step
- name: Install dependencies
  run: npm ci
  env:
    NODE_AUTH_TOKEN: ${{ secrets.NUDS_READ_TOKEN }}
```

---

## Republishing / Recovery

### "Version already exists" error

GitHub Packages does **not** allow overwriting a published version. If a publish partially failed:

1. **Check which packages succeeded** — look at the Actions log or the Packages tab
2. **Bump to the next patch version** (e.g., `0.2.0` → `0.2.1`)
3. Go through the release workflow again with the new version

### Unpublishing a version

GitHub Packages has limited unpublish support. If you need to remove a version:

1. Go to the repository → **Packages** → select the package
2. Click **Package settings** → find the version → **Delete**
3. Repeat for each package

> Prefer publishing a corrected version over unpublishing.

### Rolling back consumers

If a bad version was published, consuming projects should pin to the last known-good version:

```bash
npm install @nu-design-org/nuds-vibecode-react-native@0.1.0
```

---

## Quick Reference

```
# Full release from scratch
npm run clean
npm run build
npm run typecheck
npm run lint:colors

NEW_VERSION=X.Y.Z
npm version $NEW_VERSION --no-git-tag-version --workspace=packages/tokens
npm version $NEW_VERSION --no-git-tag-version --workspace=packages/theme
npm version $NEW_VERSION --no-git-tag-version --workspace=packages/react-native
npm version $NEW_VERSION --no-git-tag-version --workspace=packages/react-web

npm run clean && npm run build

git add -A
git commit -m "chore: release v$NEW_VERSION"
git tag v$NEW_VERSION
git push origin main --tags
```

---

## Troubleshooting

| Problem | Solution |
|---|---|
| `401 Unauthorized` | Check your PAT has `read:packages` (consumer) or `write:packages` (publisher) scope |
| `404 Not Found` | Ensure `.npmrc` has the correct `@nu-design-org:registry` line |
| `403 Forbidden` | Your GitHub user must be a member of the org that owns the repo |
| Package not found after publish | GitHub Packages requires the package name scope to match the repo owner. Ensure the repo is under the correct org |
| `EPUBLISHCONFLICT` / version exists | You cannot overwrite a version. Bump to the next patch and republish |
| Build fails in CI | Run `npm run build` locally to reproduce. Check that `tokens` builds before `theme`, and `theme` before `react-native` |
| Types missing in consumer | Ensure the consuming project's `tsconfig.json` has `"moduleResolution": "bundler"` or `"node16"` to resolve the `exports` field |
