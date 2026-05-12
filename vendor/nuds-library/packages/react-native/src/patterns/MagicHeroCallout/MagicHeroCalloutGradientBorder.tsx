/**
 * SVG **2px** rounded-rect ring: flat base + soft radial highlight whose center follows the stroke midline.
 * Used by `MagicHeroCallout`. Low-level tuning: `highlightStrokeFraction`, `rotationDurationMs`. Apps should prefer **`accentBorderHighlightLengthPercent`** (% of stroke) and **`accentBorderSpeed`** on `MagicHeroCallout` (see `README.md`).
 *
 * @see `./README.md` for Figma links and peer dependencies.
 */
import React, { useEffect, useState } from "react";
import { AccessibilityInfo, StyleSheet, View } from "react-native";
import Svg, { Circle, Defs, G, Mask, RadialGradient, Rect, Stop } from "react-native-svg";
import Animated, {
  Easing,
  cancelAnimation,
  useAnimatedProps,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

/**
 * Total midline length of the rounded-rect stroke (matches `midlinePerimeterXY` segments).
 * Figma **BB / Hero Callout Standard Animated Border BB** [`8095-179`](https://www.figma.com/design/RxzAEZlmQX8Outs7RYQWw2/-WIP--NuDS-V3-%E2%80%93%C2%A01st-Level?node-id=8095-179) — frame **343×130**; highlight slug ≈ **25–30%** of perimeter (feathered ends).
 */
function midlinePerimeterLength(
  boxW: number,
  boxH: number,
  borderRadius: number,
  halfStroke: number,
): number {
  const inset = halfStroke;
  const wi = boxW - 2 * inset;
  const hi = boxH - 2 * inset;
  if (wi <= 0 || hi <= 0) {
    return 0;
  }
  let Rc = borderRadius - inset;
  if (Rc < 0) {
    Rc = 0;
  }
  if (Rc > wi / 2) {
    Rc = wi / 2;
  }
  if (Rc > hi / 2) {
    Rc = hi / 2;
  }
  const topLen = Math.max(0, wi - 2 * Rc);
  const rightLen = Math.max(0, hi - 2 * Rc);
  const arcLen = (Math.PI / 2) * Rc;
  return 2 * topLen + 2 * rightLen + 4 * arcLen;
}

/** Figma [`8095-179`](https://www.figma.com/design/RxzAEZlmQX8Outs7RYQWw2/-WIP--NuDS-V3-%E2%80%93%C2%A01st-Level?node-id=8095-179) — highlight covers ~25–30% of stroke midline (incl. feather). */
export const MAGIC_HERO_CALLOUT_DEFAULT_HIGHLIGHT_LENGTH_PERCENT = 27.5;

const HIGHLIGHT_LENGTH_PERCENT_MIN = 6;
const HIGHLIGHT_LENGTH_PERCENT_MAX = 50;

/** Same as `MAGIC_HERO_CALLOUT_DEFAULT_HIGHLIGHT_LENGTH_PERCENT / 100` (for low-level / legacy use). */
export const MAGIC_HERO_CALLOUT_DEFAULT_HIGHLIGHT_STROKE_FRACTION =
  MAGIC_HERO_CALLOUT_DEFAULT_HIGHLIGHT_LENGTH_PERCENT / 100;

function clampHighlightStrokeFraction(value: number): number {
  return Math.min(0.5, Math.max(0.06, value));
}

/**
 * Converts **percent of stroke midline** perimeter → internal stroke fraction (clamped **6–50** %).
 */
export function highlightLengthPercentToStrokeFraction(percent: number): number {
  const clampedPercent = Math.min(
    HIGHLIGHT_LENGTH_PERCENT_MAX,
    Math.max(HIGHLIGHT_LENGTH_PERCENT_MIN, percent),
  );
  return clampHighlightStrokeFraction(clampedPercent / 100);
}

/** Target slug length (px) → radial blob radius; tuned for 343×130 reference without lighting the opposite edge. */
const HIGHLIGHT_LENGTH_TO_BLOB_RADIUS_DIVISOR = 4.75;

const BLOB_RADIUS_MIN_STROKE_MULT = 14;
const BLOB_RADIUS_MIN_PX = 26;
const BLOB_RADIUS_CAP_MAX_SIDE_RATIO = 0.24;
const BLOB_RADIUS_CAP_MIN_SIDE_RATIO = 0.55;

/**
 * Point on the **midline** of the rounded-rect stroke (inset by half stroke width), `t ∈ [0,1)` clockwise from top edge.
 * Used so a small radial highlight sits on the frame — **one** lit segment, not two opposing bands from a rotating linear fill.
 */
function midlinePerimeterXY(
  t: number,
  boxW: number,
  boxH: number,
  borderRadius: number,
  halfStroke: number,
): { x: number; y: number } {
  "worklet";
  const inset = halfStroke;
  const wi = boxW - 2 * inset;
  const hi = boxH - 2 * inset;
  if (wi <= 0 || hi <= 0) {
    return { x: boxW / 2, y: boxH / 2 };
  }
  let R = borderRadius - inset;
  if (R < 0) {
    R = 0;
  }
  if (R > wi / 2) {
    R = wi / 2;
  }
  if (R > hi / 2) {
    R = hi / 2;
  }

  const topLen = Math.max(0, wi - 2 * R);
  const rightLen = Math.max(0, hi - 2 * R);
  const arcLen = (Math.PI / 2) * R;
  const P = 2 * topLen + 2 * rightLen + 4 * arcLen;

  let u = t - Math.floor(t);
  if (u < 0) {
    u += 1;
  }
  let d = u * P;

  const x0 = inset;
  const y0 = inset;

  if (d < topLen) {
    return { x: x0 + R + d, y: y0 };
  }
  d -= topLen;
  if (d < arcLen) {
    const frac = d / arcLen;
    const theta = (-Math.PI / 2) + frac * (Math.PI / 2);
    const cx_c = x0 + wi - R;
    const cy_c = y0 + R;
    return { x: cx_c + R * Math.cos(theta), y: cy_c + R * Math.sin(theta) };
  }
  d -= arcLen;
  if (d < rightLen) {
    return { x: x0 + wi, y: y0 + R + d };
  }
  d -= rightLen;
  if (d < arcLen) {
    const frac = d / arcLen;
    const theta = 0 + frac * (Math.PI / 2);
    const cx_c = x0 + wi - R;
    const cy_c = y0 + hi - R;
    return { x: cx_c + R * Math.cos(theta), y: cy_c + R * Math.sin(theta) };
  }
  d -= arcLen;
  if (d < topLen) {
    return { x: x0 + wi - R - d, y: y0 + hi };
  }
  d -= topLen;
  if (d < arcLen) {
    const frac = d / arcLen;
    const theta = Math.PI / 2 + frac * (Math.PI / 2);
    const cx_c = x0 + R;
    const cy_c = y0 + hi - R;
    return { x: cx_c + R * Math.cos(theta), y: cy_c + R * Math.sin(theta) };
  }
  d -= arcLen;
  if (d < rightLen) {
    return { x: x0, y: y0 + hi - R - d };
  }
  d -= rightLen;
  {
    const frac = d / arcLen;
    const theta = Math.PI + frac * (Math.PI / 2);
    const cx_c = x0 + R;
    const cy_c = y0 + R;
    return { x: cx_c + R * Math.cos(theta), y: cy_c + R * Math.sin(theta) };
  }
}

type AnimatedRingProps = {
  width: number;
  height: number;
  borderRadius: number;
  strokeWidth: number;
  baseColor: string;
  highlightColor: string;
  rotationDurationMs: number;
  /** Portion of stroke midline that reads “lit” (Figma `8095-179` ≈ 0.25–0.30). */
  highlightStrokeFraction: number;
};

/**
 * Fixed ring fill + **orbiting** radial highlight along the stroke midline (motion `8094:170`; length vs. [`8095-179`](https://www.figma.com/design/RxzAEZlmQX8Outs7RYQWw2/-WIP--NuDS-V3-%E2%80%93%C2%A01st-Level?node-id=8095-179)).
 * The card mask and base ring do not move; only the highlight center travels the perimeter.
 */
const MagicHeroCalloutAnimatedRing = ({
  width: w,
  height: h,
  borderRadius: R,
  strokeWidth: sw,
  baseColor,
  highlightColor,
  rotationDurationMs,
  highlightStrokeFraction,
}: AnimatedRingProps) => {
  const uid = React.useId().replace(/[^a-zA-Z0-9_-]/g, "");
  const blobGradId = `magicHeroBorderBlob_${uid}`;
  const maskId = `magicHeroBorderMask_${uid}`;

  const innerR = Math.max(0, R - sw);
  const innerW = Math.max(0, w - 2 * sw);
  const innerH = Math.max(0, h - 2 * sw);
  const halfStroke = sw / 2;

  const minSide = Math.min(w, h);
  const maxSide = Math.max(w, h);
  const strokeMidlinePx = midlinePerimeterLength(w, h, R, halfStroke);
  const targetSlugPx = highlightStrokeFraction * strokeMidlinePx;
  const blobFromFigmaLength = targetSlugPx / HIGHLIGHT_LENGTH_TO_BLOB_RADIUS_DIVISOR;
  const blobR = Math.min(
    Math.max(blobFromFigmaLength, sw * BLOB_RADIUS_MIN_STROKE_MULT, BLOB_RADIUS_MIN_PX),
    maxSide * BLOB_RADIUS_CAP_MAX_SIDE_RATIO,
    minSide * BLOB_RADIUS_CAP_MIN_SIDE_RATIO,
  );

  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = 0;
    progress.value = withRepeat(
      withTiming(1, {
        duration: Math.max(rotationDurationMs, 1),
        easing: Easing.linear,
      }),
      -1,
      false,
    );
    return () => cancelAnimation(progress);
  }, [progress, rotationDurationMs, w, h]);

  const animatedCircleProps = useAnimatedProps(() => {
    const { x, y } = midlinePerimeterXY(progress.value, w, h, R, halfStroke);
    return { cx: x, cy: y };
  });

  return (
    <View pointerEvents="none" style={StyleSheet.absoluteFillObject}>
      <Svg width={w} height={h} style={StyleSheet.absoluteFillObject}>
        <Defs>
          <RadialGradient id={blobGradId} cx="50%" cy="50%" r="50%" gradientUnits="objectBoundingBox">
            <Stop offset="0%" stopColor={highlightColor} stopOpacity={1} />
            <Stop offset="24%" stopColor={highlightColor} stopOpacity={0.75} />
            <Stop offset="58%" stopColor={highlightColor} stopOpacity={0.32} />
            <Stop offset="88%" stopColor={highlightColor} stopOpacity={0.08} />
            <Stop offset="100%" stopColor={highlightColor} stopOpacity={0} />
          </RadialGradient>
          <Mask id={maskId}>
            <Rect width={w} height={h} rx={R} ry={R} fill="white" />
            <Rect x={sw} y={sw} width={innerW} height={innerH} rx={innerR} ry={innerR} fill="black" />
          </Mask>
        </Defs>
        <G mask={`url(#${maskId})`}>
          <Rect width={w} height={h} fill={baseColor} />
          <AnimatedCircle
            animatedProps={animatedCircleProps}
            r={blobR}
            fill={`url(#${blobGradId})`}
          />
        </G>
      </Svg>
    </View>
  );
};

export type MagicHeroCalloutGradientBorderProps = {
  width: number;
  height: number;
  borderRadius: number;
  strokeWidth: number;
  /** Magic `/start` analogue — ring base (`primaryPillTint`). */
  baseColor: string;
  /** Orbiting highlight (`primaryContent`). */
  highlightColor: string;
  /** One full lap around the perimeter; parent should derive from `theme.motion` (illustrative; over one second). */
  rotationDurationMs: number;
  /** When false, static 2px `baseColor` stroke (no motion). */
  animated: boolean;
  /**
   * Share of the stroke **midline** perimeter that reads highlighted at once (incl. feather), **0.06–0.5**.
   * Prefer **`accentBorderHighlightLengthPercent`** on `MagicHeroCallout`; this is for direct use of this component.
   */
  highlightStrokeFraction?: number;
};

/** Internal: 2px ring + orbiting highlight, or static stroke when `animated` is false or reduce-motion is on. */
export const MagicHeroCalloutGradientBorder = ({
  width: w,
  height: h,
  borderRadius: R,
  strokeWidth: sw,
  baseColor,
  highlightColor,
  rotationDurationMs,
  animated,
  highlightStrokeFraction: highlightStrokeFractionProp,
}: MagicHeroCalloutGradientBorderProps) => {
  const highlightStrokeFraction = clampHighlightStrokeFraction(
    highlightStrokeFractionProp ?? MAGIC_HERO_CALLOUT_DEFAULT_HIGHLIGHT_STROKE_FRACTION,
  );
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const listener = AccessibilityInfo.addEventListener("reduceMotionChanged", setReduceMotion);
    void AccessibilityInfo.isReduceMotionEnabled().then(setReduceMotion);
    return () => listener.remove();
  }, []);

  if (w <= 0 || h <= 0) {
    return null;
  }

  if (!animated || reduceMotion) {
    return (
      <View
        pointerEvents="none"
        style={[
          StyleSheet.absoluteFillObject,
          {
            borderRadius: R,
            borderWidth: sw,
            borderColor: baseColor,
          },
        ]}
      />
    );
  }

  return (
    <MagicHeroCalloutAnimatedRing
      width={w}
      height={h}
      borderRadius={R}
      strokeWidth={sw}
      baseColor={baseColor}
      highlightColor={highlightColor}
      rotationDurationMs={rotationDurationMs}
      highlightStrokeFraction={highlightStrokeFraction}
    />
  );
};
