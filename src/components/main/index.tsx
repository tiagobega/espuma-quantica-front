import React from 'react';

export interface HeaderProps extends React.HTMLAttributes<'main'> {}

const Main = ({children}: HeaderProps) => {
  return <main className="Main">{children}</main>;
};

export default Main;
