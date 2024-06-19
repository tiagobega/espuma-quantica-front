import classNames from 'classnames';
import {ButtonProps} from './types';

import Typography from '@components/typography';

import './index.scss';
import {Link} from 'react-router-dom';
import Icon from '../icons';

const Button = ({
  disabled,
  typographyColor,
  typographySize,
  typographyWeight,
  color,
  variant,
  children,
  className,
  size = 'sm',
  fluid,
  icon,
  ...rest
}: ButtonProps) => {
  const newClassName = classNames(
    'Button',
    className,
    variant && `Button--variant-${variant}`,
    size && `Button--size-${size}`,
    color && `Button--background-${color}`,
    rest.as && `Button--type-${rest.as}`,
    {
      'Button--fluid': fluid,
    },
  );

  const contentComponent = (
    <>
      <Typography
        type={'span'}
        color={typographyColor}
        weight={typographyWeight}
        size={typographySize || 22}
        family={'archia'}>
        {children}
      </Typography>
      {icon && <Icon type={icon} />}
    </>
  );

  switch (rest.as) {
    case 'link':
      rest.target ??= '_blank';
      return (
        <Link to={rest.href || '/'} className={newClassName} {...rest}>
          {contentComponent}
          {icon && <Icon type="star" />}
        </Link>
      );
    default:
      return (
        <button
          disabled={disabled}
          className={newClassName}
          onClick={rest.onClick}>
          {contentComponent}
        </button>
      );
  }
};

export default Button;
