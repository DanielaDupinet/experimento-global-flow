export const duration = {
  t100: 100,
  t200: 200,
  t300: 300,
  t400: 400,
  t500: 500,
  t600: 600,
  t700: 700,
  t800: 800,
  t900: 900,
  t1000: 1000
} as const;

export const motion = {
  linear: {
    quick: duration.t100,
    medium: duration.t200,
    slow: duration.t300
  },
  main: {
    quick: duration.t200,
    medium: duration.t300,
    slow: duration.t400
  },
  entering: {
    quick: duration.t200,
    medium: duration.t300,
    slow: duration.t400
  },
  exiting: {
    quick: duration.t100,
    medium: duration.t200,
    slow: duration.t300
  }
} as const;
