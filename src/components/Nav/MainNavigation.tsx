import { StyledLink } from './NavMobile';

const MainNavigation = () => {
  return (
    <>
      <li>
        <StyledLink to='/'>HOME</StyledLink>
      </li>
      <li>
        <StyledLink to='/store'>STORE</StyledLink>
      </li>
      <li>
        <StyledLink to='/about'>ABOUT US</StyledLink>
      </li>
      <li>
        <StyledLink to='/contact'>CONTACT US</StyledLink>
      </li>
    </>
  );
};

export default MainNavigation;
