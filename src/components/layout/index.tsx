import Footer from '@components/footer';
import Header from '@components/header';
import Main from '@components/main';

import {Outlet} from 'react-router-dom';

export interface LayoutProps {}

const Layout = ({}: LayoutProps) => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

export default Layout;
