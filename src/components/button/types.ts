import {type ColorType} from '@app/constants/color';
import {TypographyProps, TypographyWeight} from '@components/typography/types';
import {IconType} from '../icons';

export const BUTTON_TYPE = {
  BUTTON: 'button',
  LINK: 'link',
} as const;

export type ButtonType = (typeof BUTTON_TYPE)[keyof typeof BUTTON_TYPE];

export const BUTTON_SIZE = {
  SMALL: 'sm',
  MEDIUM: 'md',
  BIG: 'big',
} as const;

export type ButtonSize = (typeof BUTTON_SIZE)[keyof typeof BUTTON_SIZE];

export const BUTTON_VARIANT = {
  WHITE: 'white',
  BLACK: 'black',
} as const;

export type ButtonVariant =
  (typeof BUTTON_VARIANT)[keyof typeof BUTTON_VARIANT];

type ClickyButton = {
  as?: 'button';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

type LinkButton = {
  as: 'link';
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export type ButtonProps = {
  fluid?: boolean;
  size?: ButtonSize;
  variant?: ButtonVariant;
  color?: ColorType;
  typographyColor?: ColorType;
  typographySize?: TypographyProps<'span'>['size'];
  typographyWeight?: TypographyWeight;
  disabled?: boolean;
  icon?: IconType;
} & (LinkButton | ClickyButton);
