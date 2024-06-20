import React from 'react';

import './index.scss';
import classNames from 'classnames';

type ContainerOwnProps<E extends React.ElementType> = {
  as?: E;
  paddingX?: boolean;
  paddingY?: boolean;
  full?: boolean;
};

export type ContainerProps<E extends React.ElementType> = ContainerOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof ContainerOwnProps<E>>;

const Container = <E extends React.ElementType = 'section'>({
  className,
  children,
  as,
  paddingX = false,
  paddingY = false,
  full = false,
  ...rest
}: ContainerProps<E>): JSX.Element => {
  const Component = as || 'section';

  return (
    <Component
      className={classNames('Container', className, {
        'Container--padding-x': paddingX,
        'Container--padding-y': paddingY,
        'Container--full': full
      })}
      {...rest}>
      {children}
    </Component>
  );
};

export default Container;
