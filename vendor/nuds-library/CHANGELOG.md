# Changelog

## [0.5.3] — 2026-04-07

- feat(patterns): add MagicHeroCallout with Magic animated border (NUjuanarreguin)
- chore(storybook): keep iOS simulator in sync with :live and :sync scripts (NUjuanarreguin)
- feat(patterns): add Hero pattern, retire Widget4xN nextBestAction (NUjuanarreguin)
- fix(release): use `git commit -F` only (avoid invalid `-m` with `-F`)
- fix(publish): rename npm scope from `@nu-tmp-des` to `@nu-design-org` (imports, lockfile, CI, docs)

## [0.5.1] — 2026-03-10

- chore: align package scope to @nu-design-org for nu-design-org/nuds-library (Juan David Perez)

## [0.4.1] — 2026-02-13

- fix(tokens): merge duplicate semantic surface keys (pologarcia)
- chore(cursor): default app runs to storybook local mode (pologarcia)
- feat(storybook): add local and package source modes (pologarcia)

## [0.4.0] — 2026-02-12

- chore: trigger follow-up push on PR #67 (Cristiano Luis)
- fix(NextBottomBar): use modern Button API and StyleProp-compatible styles (Cristiano Luis)
- feat(NextBottomBar): add NextBottomBar component and Storybook stories (Cristiano Luis)
- fix(CrossSellCarousel): replace raw colors and raw Text with theme tokens (Cristiano Luis)
- fix(PinCode, BottomSheet): port review fixes from sibling PRs (Cristiano Luis)
- fix(TextField): address PR #68 review — multiline props, icon overlap, raw color (Cristiano Luis)
- fix(BottomSheet): fix pan responder tap stealing and double onClose (Cristiano Luis)
- fix(PinCode): move error shake/haptic from render body into useEffect (Cristiano Luis)
- fix(PinCode): address PR #70 review — gap calculation and render side effects (Cristiano Luis)
- fix(PinCode, BottomSheet, ActionSheet): address PR #65 review comments (Cristiano Luis)
- feat(PinCode, PinChallenge): add PinCode component and PinChallenge pattern (Cristiano Luis)
- feat(BottomSheet): add BottomSheet component and Storybook story (Cristiano Luis)
- fix(TextField): fix currency alignment and multiline dynamic growth (Cristiano Luis)
- feat(tokens,cross-sell): update CrossSellCarousel with NuDS V3 decorative color tokens (Cristiano Luis)
- feat: add BottomSheet, PinCode, and PinChallenge components (Cristiano Luis)
- feat: add BottomSheet, PinCode, and PinChallenge components (Cristiano Luis)
- feat: add new component props and migrate all hardcoded colors to theme tokens (Cristiano Luis)
- release: v0.3.2 (#64) (Polo García)
- chore(storybook): add full color-token browsing stories (pologarcia)
- feat(tokens): migrate semantic colors to NuDS V3 token library (#61) (Polo García)

## [0.3.2] — 2026-02-11

- chore(storybook): add full color-token browsing stories (pologarcia)
- feat(tokens): migrate semantic colors to NuDS V3 token library (#61) (Polo García)

## [0.3.1] — 2026-02-11

- feat: add Header, Tooltip components and enhance TransactionListRow (pologarcia)
- release: v0.3.0 (pologarcia)
- chore: add Storybook prebuild guardrails and troubleshooting docs (pologarcia)
- fix: replace undefined ChevronRightIcon in app demo (pologarcia)
- fix: scope Metro "source" field resolution to workspace packages only (Cristiano Luis)
- feat: add ListSection component with card wrapper and auto dividers (Cristiano Luis)
- fix: align FilterChip with Figma spec (selected, loading, disabled states) (Cristiano Luis)
- feat: add FilterBar and FilterChip components with dropdown panel (Cristiano Luis)
- feat: add size prop to Divider component (default 1px, medium 2px) (Cristiano Luis)
- feat: add DatePicker component with calendar grid, navigation, and month transitions (Cristiano Luis)
- feat: add DataSelect component with selectable grid items (Cristiano Luis)
- feat: add CheckoutBottomBar component with price text and action button (Cristiano Luis)
- feat: add CalloutBox component with title, description, action, and dismiss (Cristiano Luis)
- feat: add ButtonLink component with compact and icon support (Cristiano Luis)
- feat: add BottomBar component with vertical and horizontal layouts (Cristiano Luis)
- feat: add AvatarGroup component with horizontal and diagonal layouts (Cristiano Luis)
- fix: CrossSellCarousel banner sizing and text wrapping (Cristiano Luis)
- chore: add auto-assignment rule for component GitHub issues (pologarcia)
- feat: add SectionTitle support to CrossSellCarousel and fix Metro bundling (Cristiano Luis)
- feat: add Avatar component and adopt it across codebase (Cristiano Luis)
- feat: improve ListRow with full Figma spec (leading, trailing, secondary, compact) (Cristiano Luis)
- feat: add Badge component with semantic color variants (Cristiano Luis)
- fix: make Widget2x2 responsive and improve layout (Cristiano Luis)
- feat: add TransactionListRow component and TransactionWidget pattern (Cristiano Luis)
- feat: add CrossSellCarousel pattern with dismissible variant (Cristiano Luis)
- feat: add SectionTitle component matching Figma spec (Cristiano Luis)
- feat: update Widget4xN to match Figma spec with new props and fix triangle icons (Cristiano Luis)
- feat: refine InlineActions, add ListRow component and ActionSheet pattern (Cristiano Luis)
- fix: update DashboardHero typography from labelXSmallDefault to labelSmallDefault (Cristiano Luis)

## [0.3.0] — 2026-02-11

- chore: add Storybook prebuild guardrails and troubleshooting docs (pologarcia)
- fix: replace undefined ChevronRightIcon in app demo (pologarcia)
- fix: scope Metro "source" field resolution to workspace packages only (Cristiano Luis)
- feat: add ListSection component with card wrapper and auto dividers (Cristiano Luis)
- fix: align FilterChip with Figma spec (selected, loading, disabled states) (Cristiano Luis)
- feat: add FilterBar and FilterChip components with dropdown panel (Cristiano Luis)
- feat: add size prop to Divider component (default 1px, medium 2px) (Cristiano Luis)
- feat: add DatePicker component with calendar grid, navigation, and month transitions (Cristiano Luis)
- feat: add DataSelect component with selectable grid items (Cristiano Luis)
- feat: add CheckoutBottomBar component with price text and action button (Cristiano Luis)
- feat: add CalloutBox component with title, description, action, and dismiss (Cristiano Luis)
- feat: add ButtonLink component with compact and icon support (Cristiano Luis)
- feat: add BottomBar component with vertical and horizontal layouts (Cristiano Luis)
- feat: add AvatarGroup component with horizontal and diagonal layouts (Cristiano Luis)
- fix: CrossSellCarousel banner sizing and text wrapping (Cristiano Luis)
- chore: add auto-assignment rule for component GitHub issues (pologarcia)
- feat: add SectionTitle support to CrossSellCarousel and fix Metro bundling (Cristiano Luis)
- feat: add Avatar component and adopt it across codebase (Cristiano Luis)
- feat: improve ListRow with full Figma spec (leading, trailing, secondary, compact) (Cristiano Luis)
- feat: add Badge component with semantic color variants (Cristiano Luis)
- fix: make Widget2x2 responsive and improve layout (Cristiano Luis)
- feat: add TransactionListRow component and TransactionWidget pattern (Cristiano Luis)
- feat: add CrossSellCarousel pattern with dismissible variant (Cristiano Luis)
- feat: add SectionTitle component matching Figma spec (Cristiano Luis)
- feat: update Widget4xN to match Figma spec with new props and fix triangle icons (Cristiano Luis)
- feat: refine InlineActions, add ListRow component and ActionSheet pattern (Cristiano Luis)
- fix: update DashboardHero typography from labelXSmallDefault to labelSmallDefault (Cristiano Luis)

## [0.2.1] — 2026-02-10

- fix: TopBar title centering and Storybook font loading (Cristiano Luis)
- feat: enhance DashboardHero, LimitBar, and InlineActions components (Cristiano Luis)
- Update typography tokens and component variants to match Figma design (Cristiano Luis)
- feat: add illustration prop to DashboardHero and fix TopBar title centering (Cristiano Luis)

## [0.2.0] — 2026-02-10

- chore: rename package scope from @nuds-vibecode to @nubank (pologarcia)
- release: v0.2.0 (pologarcia)
- chore: add release CLI, consumer setup, and PAT-free install workflow (pologarcia)
- chore: release v0.2.0 (pologarcia)
- chore: configure GitHub Packages for private publishing (pologarcia)
- Add NuDS components, icons, patterns, storybook, and agent skill guide (pologarcia)
- Vendor react-native skills files directly (pologarcia)
- Initial commit: rename to Project-ignition (pologarcia)

## [0.2.0] — 2026-02-10

- chore: add release CLI, consumer setup, and PAT-free install workflow (pologarcia)
- chore: release v0.2.0 (pologarcia)
- chore: configure GitHub Packages for private publishing (pologarcia)
- Add NuDS components, icons, patterns, storybook, and agent skill guide (pologarcia)
- Vendor react-native skills files directly (pologarcia)
- Initial commit: rename to Project-ignition (pologarcia)

