import Header from '#/components/Header';
import GlobalStyle from '#/globalStyles';

import { Outlet } from 'react-router-dom';

const Root = () => {
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

export default Root;
