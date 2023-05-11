import useWindowWidth from '../hooks/useWindowWidth';
import isMobileWidth from '../utils/isMobileWidth';
import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';

const Nav = () => {
  const windowWidth = useWindowWidth();
  const isMobile = isMobileWidth(windowWidth);
  return <>{isMobile ? <NavMobile /> : <NavDesktop />}</>;
};

export default Nav;
