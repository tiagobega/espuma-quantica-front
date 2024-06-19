import {useMemo} from 'react';
import classNames from 'classnames';

import IcStar from '@app/assets/icons/star.svg?react';
import IcShopBag from '@app/assets/icons/shop_bag.svg?react';
import IcUser from '@app/assets/icons/user.svg?react';

import {ColorType} from '@app/constants/color';

import {StyleUtils} from '@utils/Style';

import './index.scss';

export const ICON = {
  star: IcStar,
  shopBag: IcShopBag,
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
