export const COLOR = {
  BLACK: 'black',
  ORANGE: 'orange',
  WHITE: 'white',
  BLUE_DARK: 'blue-dark',
} as const;

export type ColorType = (typeof COLOR)[keyof typeof COLOR];
