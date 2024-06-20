import {type TypographyProps} from './types';

import cn from 'classnames';
import React, {useMemo} from 'react';

import './index.scss';

function responsiveClasses(
  className = 'size',
  variant: Responsive<any> | undefined,
) {
  const variantClasses: string[] = [];

  if (!variant) {
    return variantClasses;
  }

  if (typeof variant === 'string' || typeof variant === 'number') {
    return [`Typography--${className}-xs-${variant}`];
  }

  Object.keys(variant).forEach(key => {
    variantClasses.push(
      `Typography--${className}-${key}-${variant[key as keyof typeof variant]}`,
    );
  });

  return variantClasses;
}

const Typography = <E extends React.ElementType = 'p'>({
  className,
  type,
  color,
  size,
  children,
  innerHtml,
  weight,
  style,
  family,
  align,
  inherit,
  gradient,
  ...rest
}: TypographyProps<E>): JSX.Element => {
  const TypographyComponent = (type || 'p') as React.ElementType;

  const sizeClasses = useMemo(() => responsiveClasses('size', size), [size]);
  const weightClasses = useMemo(
    () => responsiveClasses('weight', weight),
    [weight],
  );
  const alignClasses = useMemo(
    () => responsiveClasses('align', align),
    [align],
  );
  const familyClasses = useMemo(
    () => responsiveClasses('family', family),
    [family],
  );

  return (
    <TypographyComponent
      className={cn(
        'Typography',
        `Typography--${type || 'p'}`,
        color && `Typography--color-${color}`,
        ...familyClasses,
        ...alignClasses,
        ...weightClasses,
        ...sizeClasses,
        className,
        {
          'Typography--inherit': inherit,
          'Typography--gradient': gradient,
        },
      )}
      style={{...style}}
      dangerouslySetInnerHTML={innerHtml ? {__html: innerHtml} : undefined}
      {...rest}>
      {children}
    </TypographyComponent>
  );
};

export default Typography;
