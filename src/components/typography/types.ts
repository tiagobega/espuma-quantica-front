import {ColorType} from '@app/constants/color';

export const TYPOGRAPHY_SIZE = {
  '10': 10,
  '12': 12,
  '14': 14,
  '16': 16,
  '20': 20,
  '24': 24,
  '28': 28,
  '32': 32,
  '36': 36,
  '40': 40,
  '42': 42,
  '48': 48,
  '52': 52,
  '64': 64,
} as const;

export type TypographySize =
  | (typeof TYPOGRAPHY_SIZE)[keyof typeof TYPOGRAPHY_SIZE]
  | keyof typeof TYPOGRAPHY_SIZE;

export const TYPOGRAPHY_WEIGHT = {
  '100': 100,
  '200': 200,
  '300': 300,
  '400': 400,
  '500': 500,
  '600': 600,
  '700': 700,
  '800': 800,
  '900': 900,
} as const;

export type TypographyWeight =
  | (typeof TYPOGRAPHY_WEIGHT)[keyof typeof TYPOGRAPHY_WEIGHT];

export const TYPOGRAPHY_FAMILY = {
  ARCHIA: 'archia',
  MONTREAL: 'montreal',
} as const;

export type TypographyFamily =
  | (typeof TYPOGRAPHY_FAMILY)[keyof typeof TYPOGRAPHY_FAMILY];

export const TYPOGRAPHY_ALIGN = {
  RIGHT: 'right',
  CENTER: 'center',
  LEFT: 'left',
} as const;
export type TypographyAlign =
  | (typeof TYPOGRAPHY_ALIGN)[keyof typeof TYPOGRAPHY_ALIGN];

type TypographyOwnProps<E extends React.ElementType> = {
  weight?: Responsive<TypographyWeight>;
  family?: Responsive<TypographyFamily>;
  size?: Responsive<TypographySize>;
  align?: Responsive<TypographyAlign>;
  color?: ColorType;
  gradient?: boolean;
  inherit?: boolean;
  innerHtml?: string;
  type?: E;
};

export type TypographyProps<E extends React.ElementType> =
  TypographyOwnProps<E> &
    Omit<React.ComponentProps<E>, keyof TypographyOwnProps<E>>;
