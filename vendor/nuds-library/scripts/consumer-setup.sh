#!/usr/bin/env bash
set -euo pipefail

# ──────────────────────────────────────────────────────────────────────────────
# NuDS Consumer Setup
#
# Configures a consuming project to install @nu-design-org/nuds-vibecode packages from
# GitHub Packages, using the GitHub CLI for authentication (no manual PAT).
#
# Usage (from the root of your consuming project):
#   bash <(curl -sL https://raw.githubusercontent.com/nu-design-org/nuds-library/main/scripts/consumer-setup.sh)
#
# Or clone and run locally:
#   bash /path/to/NuDS-react-vibecode/scripts/consumer-setup.sh
#
# Options:
#   --target=/path/to/repo   Target consumer repository (default: current dir)
#   --dry-run                Print planned changes without writing files
#   --check                  Read-only verification mode (no writes)
# ──────────────────────────────────────────────────────────────────────────────

REGISTRY_LINE="@nu-design-org:registry=https://npm.pkg.github.com"
AUTH_LINE='//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}'
EXPORT_LINE='export GITHUB_TOKEN=$(gh auth token)'

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

TARGET_DIR="$(pwd)"
DRY_RUN=false
CHECK_ONLY=false

for arg in "$@"; do
  case "$arg" in
    --dry-run)
      DRY_RUN=true
      ;;
    --check)
      CHECK_ONLY=true
      ;;
    --target=*)
      TARGET_DIR="${arg#*=}"
      ;;
    *)
      echo "  [WARN] Unknown argument: $arg"
      ;;
  esac
done

TARGET_DIR="$(cd "$TARGET_DIR" && pwd)"

run_cmd() {
  if $DRY_RUN; then
    printf "  [DRY]"
    for arg in "$@"; do
      printf " %q" "$arg"
    done
    echo
  else
    "$@"
  fi
}

append_line() {
  local file="$1"
  local line="$2"
  if $DRY_RUN; then
    echo "  [DRY] append to $file: $line"
  else
    printf "%s\n" "$line" >> "$file"
  fi
}

echo
echo "  NuDS Consumer Setup"
echo "  ────────────────────────────"
echo "  Target: $TARGET_DIR"
echo "  Dry run: $DRY_RUN"
echo "  Check only: $CHECK_ONLY"
echo

if [[ ! -d "$TARGET_DIR" ]]; then
  echo "  [ERROR] Target directory does not exist: $TARGET_DIR"
  exit 1
fi

# ── Step 1: Check gh CLI ─────────────────────────────────────────────────────
if ! command -v gh &>/dev/null; then
  echo "  [ERROR] GitHub CLI (gh) is not installed."
  echo "  Install it: https://cli.github.com/"
  echo
  exit 1
fi

if ! gh auth status &>/dev/null; then
  echo "  [ERROR] GitHub CLI is not authenticated."
  echo "  Run: gh auth login"
  echo
  exit 1
fi

echo "  [OK] GitHub CLI is installed and authenticated."

# ── Step 2: Add GITHUB_TOKEN export to shell profile ─────────────────────────
SHELL_PROFILE=""
if [[ -f "$HOME/.zshrc" ]]; then
  SHELL_PROFILE="$HOME/.zshrc"
elif [[ -f "$HOME/.bashrc" ]]; then
  SHELL_PROFILE="$HOME/.bashrc"
elif [[ -f "$HOME/.bash_profile" ]]; then
  SHELL_PROFILE="$HOME/.bash_profile"
fi

if [[ -n "$SHELL_PROFILE" ]]; then
  if grep -qF 'GITHUB_TOKEN=$(gh auth token)' "$SHELL_PROFILE" 2>/dev/null; then
    echo "  [OK] GITHUB_TOKEN export already in $SHELL_PROFILE"
  else
    if $CHECK_ONLY; then
      echo "  [CHECK] Missing GITHUB_TOKEN export in $SHELL_PROFILE"
    else
      append_line "$SHELL_PROFILE" ""
      append_line "$SHELL_PROFILE" "# NuDS: GitHub Packages auth via gh CLI"
      append_line "$SHELL_PROFILE" "$EXPORT_LINE"
      echo "  [OK] Added GITHUB_TOKEN export to $SHELL_PROFILE"
    fi
  fi

  # Also export for the current session
  export GITHUB_TOKEN=$(gh auth token)
else
  echo "  [WARN] Could not detect shell profile. Add this line manually:"
  echo "         $EXPORT_LINE"
fi

# ── Step 3: Create or update .npmrc ──────────────────────────────────────────
NPMRC="$TARGET_DIR/.npmrc"

if [[ -f "$NPMRC" ]]; then
  NEEDS_REGISTRY=true
  NEEDS_AUTH=true

  grep -qF "$REGISTRY_LINE" "$NPMRC" 2>/dev/null && NEEDS_REGISTRY=false
  grep -qF '//npm.pkg.github.com/:_authToken' "$NPMRC" 2>/dev/null && NEEDS_AUTH=false

  if $NEEDS_REGISTRY || $NEEDS_AUTH; then
    if $CHECK_ONLY; then
      echo "  [CHECK] .npmrc missing required NuDS registry/auth lines"
    else
      append_line "$NPMRC" ""
      $NEEDS_REGISTRY && append_line "$NPMRC" "$REGISTRY_LINE"
      $NEEDS_AUTH && append_line "$NPMRC" "$AUTH_LINE"
      echo "  [OK] Updated existing .npmrc"
    fi
  else
    echo "  [OK] .npmrc already configured"
  fi
else
  if $CHECK_ONLY; then
    echo "  [CHECK] Missing .npmrc in target repo"
  elif $DRY_RUN; then
    echo "  [DRY] create $NPMRC with GitHub Packages registry config"
  else
    cat > "$NPMRC" <<EOF
$REGISTRY_LINE
$AUTH_LINE
EOF
    echo "  [OK] Created .npmrc"
  fi
fi

# ── Step 4: Install layered consumer skills ──────────────────────────────────
SKILLS_DIR="$TARGET_DIR/.cursor/skills"
BASE_SKILL_SRC="$REPO_ROOT/.cursor/skills/nuds-design-system/SKILL.md"
MCP_SKILL_SRC="$REPO_ROOT/.cursor/skills/nuds-consumer-figma-mcp/SKILL.md"
BASE_SKILL_DEST="$SKILLS_DIR/nuds-design-system/SKILL.md"
MCP_SKILL_DEST="$SKILLS_DIR/nuds-consumer-figma-mcp/SKILL.md"

if [[ ! -f "$BASE_SKILL_SRC" || ! -f "$MCP_SKILL_SRC" ]]; then
  echo "  [ERROR] Could not find skill templates in this repo."
  echo "  Expected:"
  echo "    $BASE_SKILL_SRC"
  echo "    $MCP_SKILL_SRC"
  exit 1
fi

if ! $CHECK_ONLY; then
  run_cmd mkdir -p "$SKILLS_DIR/nuds-design-system"
  run_cmd mkdir -p "$SKILLS_DIR/nuds-consumer-figma-mcp"
  run_cmd cp "$BASE_SKILL_SRC" "$BASE_SKILL_DEST"
  run_cmd cp "$MCP_SKILL_SRC" "$MCP_SKILL_DEST"
  echo "  [OK] Installed layered skills into $SKILLS_DIR"
fi

# ── Step 5: Verify layered contract ───────────────────────────────────────────
CHECK_BASE="$BASE_SKILL_DEST"
CHECK_MCP="$MCP_SKILL_DEST"

if $CHECK_ONLY; then
  if [[ ! -f "$CHECK_BASE" || ! -f "$CHECK_MCP" ]]; then
    echo "  [ERROR] Missing installed skills in target repo."
    echo "  Expected:"
    echo "    $CHECK_BASE"
    echo "    $CHECK_MCP"
    exit 1
  fi
fi

if ! $DRY_RUN; then
  if [[ -f "$CHECK_BASE" && -f "$CHECK_MCP" ]]; then
    if ! grep -q "nuds-consumer-figma-mcp" "$CHECK_BASE"; then
      echo "  [ERROR] Base skill missing delegation to MCP skill."
      exit 1
    fi
    if ! grep -q "nuds-design-system" "$CHECK_MCP"; then
      echo "  [ERROR] MCP skill missing delegation to base skill."
      exit 1
    fi
  fi
fi

if $CHECK_ONLY; then
  echo "  [OK] --check mode performed read-only verification only."
fi

# ── Done ─────────────────────────────────────────────────────────────────────
echo
echo "  Setup complete! You can now install NuDS packages:"
echo
echo "    npm install @nu-design-org/nuds-vibecode-react-native"
echo
echo "  Layered skills installed:"
echo "    .cursor/skills/nuds-design-system/SKILL.md"
echo "    .cursor/skills/nuds-consumer-figma-mcp/SKILL.md"
echo
echo "  Optional commands:"
echo "    ./scripts/consumer-setup.sh --dry-run --target=/path/to/consumer"
echo "    ./scripts/consumer-setup.sh --check --target=/path/to/consumer"
echo
if [[ -n "$SHELL_PROFILE" ]]; then
  echo "  NOTE: Restart your terminal (or run 'source $SHELL_PROFILE')"
  echo "  for the GITHUB_TOKEN export to take effect."
  echo
fi
