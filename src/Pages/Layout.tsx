import Header from '#/components/Header/Header';
import GlobalStyle from '#/globalStyles';

import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
