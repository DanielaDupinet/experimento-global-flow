---
name: motion-guidelines
description: Defines animation standards for NuDS components across React Native and web surfaces. Use when adding or reviewing motion, transitions, easing curves, spring configs, reduced-motion behavior, transform-origin behavior, or performance choices in interactive components.
---

# Motion Guidelines

Apply this skill whenever a task adds or changes motion in components, primitives, or patterns.

## NuDS Token Alignment (Required)

When implementing motion in this repository, align duration choices to existing NuDS motion tokens.

- For library code, consume durations from `useNuDSTheme().motion`.
- Do not hardcode durations in component logic when an equivalent token exists.
- Token source of truth:
  - `theme.motion.linear.{quick,medium,slow}` -> `100/200/300`
  - `theme.motion.main.{quick,medium,slow}` -> `200/300/400`
  - `theme.motion.entering.{quick,medium,slow}` -> `200/300/400`
  - `theme.motion.exiting.{quick,medium,slow}` -> `100/200/300`
- Current tokens provide semantic durations, not easing curves. Use tokenized duration + approved easing/spring guidance from this skill.

## Core Defaults

1. Keep animations fast.
2. Default to ease-out behavior.
3. Avoid durations longer than 1s unless the animation is illustrative.
4. Most interactions should run in 200-300ms.

## Duration Guidance

- Default interaction duration: `200-300ms` (prefer `theme.motion.main.quick` or `theme.motion.main.medium`)
- Hover color/opacity/background transitions: `200ms` (prefer `theme.motion.main.quick`)
- Entry motion default: `theme.motion.entering.quick` to `theme.motion.entering.medium`
- Exit motion default: `theme.motion.exiting.quick` to `theme.motion.exiting.medium`
- Maximum standard duration: `1000ms` (`duration.t1000` token ceiling)
- Over 1000ms only for explicit illustrative motion

## Easing Rules

- Do not use built-in CSS easings except `ease` or `linear`.
- Prefer named curves below.
- `ease-in` should generally be avoided because it feels slow for UI interactions.
- Prefer `ease-out` for entry and user-initiated interactions.
- Prefer `ease-in-out` for movement within the screen.

### Ease-In (avoid by default)

- `ease-in-quad`: `cubic-bezier(.55, .085, .68, .53)`
- `ease-in-cubic`: `cubic-bezier(.550, .055, .675, .19)`
- `ease-in-quart`: `cubic-bezier(.895, .03, .685, .22)`
- `ease-in-quint`: `cubic-bezier(.755, .05, .855, .06)`
- `ease-in-expo`: `cubic-bezier(.95, .05, .795, .035)`
- `ease-in-circ`: `cubic-bezier(.6, .04, .98, .335)`

### Ease-Out (default family)

- `ease-out-quad`: `cubic-bezier(.25, .46, .45, .94)`
- `ease-out-cubic`: `cubic-bezier(.215, .61, .355, 1)`
- `ease-out-quart`: `cubic-bezier(.165, .84, .44, 1)`
- `ease-out-quint`: `cubic-bezier(.23, 1, .32, 1)`
- `ease-out-expo`: `cubic-bezier(.19, 1, .22, 1)`
- `ease-out-circ`: `cubic-bezier(.075, .82, .165, 1)`

### Ease-In-Out

- `ease-in-out-quad`: `cubic-bezier(.455, .03, .515, .955)`
- `ease-in-out-cubic`: `cubic-bezier(.645, .045, .355, 1)`
- `ease-in-out-quart`: `cubic-bezier(.77, 0, .175, 1)`
- `ease-in-out-quint`: `cubic-bezier(.86, 0, .07, 1)`
- `ease-in-out-expo`: `cubic-bezier(1, 0, 0, 1)`
- `ease-in-out-circ`: `cubic-bezier(.785, .135, .15, .86)`

## Hover Transitions

- For simple hover transitions (`color`, `background-color`, `opacity`), use CSS `ease` + `200ms`.
- For complex hover transitions, use the easing rules in this skill.
- Disable hover transitions on touch devices with:
  - `@media (hover: hover) and (pointer: fine)`

## Accessibility

- If an animation uses `transform`, disable transform motion for reduced-motion users.
- In web CSS, use `@media (prefers-reduced-motion: reduce)`.
- In React Native/Reanimated, gate transform animations behind reduced-motion checks and fall back to static or opacity-only states.

## Origin-Aware Motion

- Animate elements from the trigger source.
- Popovers, menus, and dropdowns should originate from their trigger.
- Set `transform-origin` according to trigger position for web surfaces.
- For native surfaces, mimic origin-aware behavior by anchoring transform direction/translation to trigger geometry.

## Performance Rules

- Prefer animating only `opacity` and `transform`.
- Avoid animating layout properties (`top`, `left`, `width`, `height`, margins, paddings) when a transform can solve it.
- Do not animate drag gestures with CSS variables.
- Do not animate blur above `20px`.
- Use `will-change` only for:
  - `transform`
  - `opacity`
  - `clipPath`
  - `filter`
- In Motion/Framer Motion, prefer `transform` over `x`/`y` when hardware acceleration is required.

## Spring Rules (React Native / Reanimated)

- Default to spring animations when using `react-native-reanimated`.
- Avoid bouncy springs unless working with drag gestures.

## React Native Mapping Notes

When translating these rules into React Native:

- Use Reanimated APIs as the default implementation path.
- For NuDS components, read durations from `const theme = useNuDSTheme();` then use `theme.motion.*`.
- Use `withSpring` by default for interaction and state transitions unless timing-based motion is explicitly required.
- Use `withTiming` with token-aligned durations and ease-out curves for simple timed fades/slides.
- Keep transform/opacity as the primary animated properties.

## Agent Review Checklist

Before finalizing motion changes, verify:

- [ ] Duration is typically `200-300ms` and never over `1s` without explicit reason.
- [ ] Duration values map to `theme.motion` tokens in NuDS library code.
- [ ] Easing is from approved curves (or `ease`/`linear` where allowed).
- [ ] Hover transitions are restricted to hover-capable pointers.
- [ ] Reduced-motion path removes transform motion.
- [ ] Motion originates from the trigger position.
- [ ] Animation uses transform/opacity for performance.
- [ ] Spring usage is default in Reanimated; bounce is limited to drag contexts.
