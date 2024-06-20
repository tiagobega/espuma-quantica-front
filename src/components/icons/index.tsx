import classNames from 'classnames';
import {useMemo} from 'react';

import IcBox from '@app/assets/icons/box.svg?react';
import IcBrocolli from '@app/assets/icons/brocolli.svg?react';

import IcClose from '@app/assets/icons/close.svg?react';

import IcLeaf from '@app/assets/icons/leaf.svg?react';

import IcMenu from '@app/assets/icons/menu.svg?react';

import IcHearth from '@app/assets/icons/heart.svg?react';

import IcScience from '@app/assets/icons/science.svg?react';
import IcShopBag from '@app/assets/icons/shop_bag.svg?react';

import IcSocialFacebook from '@app/assets/icons/social_facebook.svg?react';
import IcSocialInstagram from '@app/assets/icons/social_instagram.svg?react';
import IcSocialWhatsapp from '@app/assets/icons/social_whatsapp.svg?react';

import IcStar from '@app/assets/icons/star.svg?react';

import IcUser from '@app/assets/icons/user.svg?react';

import IcBadgeCrueltyFree from '@app/assets/icons/badge_cruelty_free.svg?react';
import IcBadgeLatexFree from '@app/assets/icons/badge_latex_free.svg?react';
import IcBadgeVegan from '@app/assets/icons/badge_vegan.svg?react';

import {ColorType} from '@app/constants/color';

import {StyleUtils} from '@utils/Style';

import './index.scss';

export const ICON = {
  badgeCrueltyFree: IcBadgeCrueltyFree,
  badgeLatexFree: IcBadgeLatexFree,
  badgeVegan: IcBadgeVegan,

  box: IcBox,
  brocolli: IcBrocolli,

  close: IcClose,

  heart: IcHearth,

  leaf: IcLeaf,

  menu: IcMenu,

  science: IcScience,
  shopBag: IcShopBag,
  socialFacebook: IcSocialFacebook,
  socialInstagram: IcSocialInstagram,
  socialWhasapp: IcSocialWhatsapp,
  star: IcStar,

  user: IcUser,
} as const;

export type IconType = keyof typeof ICON;

export const ICON_SIZE = {
  '10': 10,
  '12': 12,
  '18': 18,
  '24': 24,
  '32': 32,
  '40': 40,
  '48': 48,
  '56': 56,
  '64': 64,
  '72': 72,
  '80': 80,
  '88': 88,
} as const;

export type IconSize =
  | (typeof ICON_SIZE)[keyof typeof ICON_SIZE]
  | keyof typeof ICON_SIZE;

export interface IconProps extends React.ComponentProps<'i'> {
  type: IconType;
  strokeColor?: ColorType;
  fillColor?: ColorType;
  size?: IconSize;
}

const IconClassName = 'Icon';

const Icon = ({
  type,
  strokeColor,
  fillColor,
  size = 24,
  className = '',
  ...props
}: IconProps) => {
  if (!type) return null;

  const sizeClasses = useMemo(
    () => StyleUtils.responsiveClasses(IconClassName, 'size', size),
    [size],
  );

  const IconComponent = ICON[type];

  return (
    <i
      className={classNames(
        IconClassName,
        className,
        strokeColor && `${IconClassName}--stroke-color-${strokeColor}`,
        fillColor && `${IconClassName}--stroke-color-${strokeColor}`,
        ...sizeClasses,
      )}
      {...props}>
      <IconComponent />
    </i>
  );
};

export default Icon;
