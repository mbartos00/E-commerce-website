import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';

const Nav = ({ isMobile, isOpen }: { isMobile: boolean; isOpen: boolean }) => {
  return <>{isMobile ? <NavMobile isOpen={isOpen} /> : <NavDesktop />}</>;
};

export default Nav;
