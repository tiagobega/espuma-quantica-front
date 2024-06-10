export const COLOR = {
  BLACK: 'black',
  ORANGE: 'orange',
  WHITE: 'white',
} as const;

export type ColorType = (typeof COLOR)[keyof typeof COLOR];
