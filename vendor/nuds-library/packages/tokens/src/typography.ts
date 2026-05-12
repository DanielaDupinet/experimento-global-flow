// Seeded from Prometheus-MVP/src/constants/fonts.js.
export const fontFamily = {
  display: {
    regular: "NuSansDisplay-Regular",
    medium: "NuSansDisplay-Medium",
    semibold: "NuSansDisplay-Semibold",
    bold: "NuSansDisplay-Semibold"
  },
  text: {
    regular: "NuSansText-Regular",
    medium: "NuSansText-Medium",
    semibold: "NuSansText-Semibold",
    bold: "NuSansText-Bold"
  },
  legacy: {
    regular: "Nu Sans",
    medium: "Nu Sans Medium"
  }
} as const;

export const typography = {
  titleXLarge: {
    fontFamily: fontFamily.display.medium,
    fontSize: 44,
    lineHeight: 48.4
  },
  titleLarge: {
    fontFamily: fontFamily.display.medium,
    fontSize: 36,
    lineHeight: 39.6
  },
  titleMedium: {
    fontFamily: fontFamily.display.medium,
    fontSize: 28,
    lineHeight: 33.6
  },
  titleSmall: {
    fontFamily: fontFamily.display.medium,
    fontSize: 24,
    lineHeight: 28.8
  },
  titleXSmall: {
    fontFamily: fontFamily.display.medium,
    fontSize: 20,
    lineHeight: 24
  },
  subtitleMediumDefault: {
    fontFamily: fontFamily.text.regular,
    fontSize: 18,
    lineHeight: 23.4
  },
  subtitleMediumStrong: {
    fontFamily: fontFamily.text.semibold,
    fontSize: 18,
    lineHeight: 23.4
  },
  subtitleSmallDefault: {
    fontFamily: fontFamily.text.regular,
    fontSize: 16,
    lineHeight: 20.8
  },
  subtitleSmallStrong: {
    fontFamily: fontFamily.text.semibold,
    fontSize: 16,
    lineHeight: 20.8
  },
  paragraphMediumDefault: {
    fontFamily: fontFamily.text.regular,
    fontSize: 16,
    lineHeight: 24
  },
  paragraphMediumStrong: {
    fontFamily: fontFamily.text.semibold,
    fontSize: 16,
    lineHeight: 24
  },
  paragraphSmallDefault: {
    fontFamily: fontFamily.text.regular,
    fontSize: 14,
    lineHeight: 21
  },
  paragraphSmallStrong: {
    fontFamily: fontFamily.text.semibold,
    fontSize: 14,
    lineHeight: 21
  },
  labelMediumDefault: {
    fontFamily: fontFamily.text.regular,
    fontSize: 16,
    lineHeight: 20.8
  },
  labelMediumStrong: {
    fontFamily: fontFamily.text.semibold,
    fontSize: 16,
    lineHeight: 20.8
  },
  labelSmallDefault: {
    fontFamily: fontFamily.text.regular,
    fontSize: 14,
    lineHeight: 18.2
  },
  labelSmallStrong: {
    fontFamily: fontFamily.text.semibold,
    fontSize: 14,
    lineHeight: 18.2
  },
  labelXSmallDefault: {
    fontFamily: fontFamily.text.regular,
    fontSize: 12,
    lineHeight: 15.6,
    letterSpacing: 0.12
  },
  labelXSmallStrong: {
    fontFamily: fontFamily.text.semibold,
    fontSize: 12,
    lineHeight: 15.6,
    letterSpacing: 0.12
  },
  label2XSmallDefault: {
    fontFamily: fontFamily.text.regular,
    fontSize: 10,
    lineHeight: 13,
    letterSpacing: 0.1
  },
  label2XSmallStrong: {
    fontFamily: fontFamily.text.semibold,
    fontSize: 10,
    lineHeight: 13,
    letterSpacing: 0.1
  }
} as const;

export type TypographyVariant = keyof typeof typography;
