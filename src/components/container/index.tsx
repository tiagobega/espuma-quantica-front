import React from 'react';

import './index.scss';
import classNames from 'classnames';

type ContainerOwnProps<E extends React.ElementType> = {
  as?: E;
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
    <Component className={classNames('Container', className)} {...rest}>
      {children}
    </Component>
  );
};

export default Container;
