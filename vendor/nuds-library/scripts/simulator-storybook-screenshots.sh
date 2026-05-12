#!/bin/bash
# Capture ListSection Storybook screenshots via iOS Simulator
#
# PREREQUISITE: Enable Accessibility for Terminal/Cursor:
#   System Settings → Privacy & Security → Accessibility → enable Terminal (or Cursor)
#
# USAGE:
#   1. Run Storybook: npm run storybook:ios
#   2. Dismiss any error overlay manually (tap Dismiss) if present
#   3. Navigate to Components → ListSection in Storybook
#   4. Run this script - it will capture screenshots as you tap through each story
#
# Or run with taps (requires Accessibility):
#   ./scripts/simulator-storybook-screenshots.sh --with-taps

set -e
OUT_DIR="${1:-/tmp/listsection-screenshots}"
mkdir -p "$OUT_DIR"

# Capture screenshot
capture() {
  local name="$1"
  xcrun simctl io booted screenshot "$OUT_DIR/$name.png" 2>/dev/null && echo "Saved: $OUT_DIR/$name.png"
}

echo "Screenshots will be saved to: $OUT_DIR"
echo ""

# Activate Simulator and attempt Dismiss tap (only works with Accessibility)
if [[ "$1" == "--with-taps" ]]; then
  echo "Attempting to tap Dismiss..."
  osascript -e 'tell application "Simulator" to activate' 2>/dev/null
  sleep 0.5
  # Approximate screen coords for Dismiss (adjust for your display/layout)
  # Format: x,y - device (120,845) + Simulator window offset (est. 130,130)
  cliclick c:250,975 2>/dev/null || echo "Tap failed - ensure Accessibility is enabled"
  sleep 1
  capture "00-after-dismiss"
fi

# Capture current state
capture "current-state"
echo ""
echo "Navigate to each ListSection story and run:"
echo "  capture \"SingleRow\""
echo "  capture \"TwoRows\""
echo "  ... etc"
echo ""
echo "Or run this script again after each navigation."
echo "Stories: SingleRow, TwoRows, ThreeRows, WithSectionTitle, WithChevrons, RichRows, AllVariants"
