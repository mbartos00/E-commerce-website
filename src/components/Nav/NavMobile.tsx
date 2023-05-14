import { NavLink } from 'react-router-dom';
import useStore from '#/store/store';
import styled from 'styled-components';
import MainNavigation from './MainNavigation';

const StyledMobileNav = styled.nav<{ isOpen: boolean }>`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  left: 0;
  padding-block: 2rem;
  box-shadow: 0px 10px 10px -10px #323334;
  transition: all ease-in-out 0.4s;
  transform: translateY(${({ isOpen }) => (isOpen ? '60%' : '-200%')});
`;

export const StyledLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  color: #323334;
  font-size: 1rem;
  font-weight: bold;
  @media screen and (min-width: 600px) {
    font-size: clamp(0.7rem, 1.8vw, 1rem);
  }
`;
const StyledMenu = styled.ul`
  display: inherit;
  flex-direction: column;
  gap: 1.5rem;
  list-style: none;
  text-align: center;
  li:last-child {
    margin-top: 1rem;
    display: flex;
    gap: 3rem;
  }
`;
const NavMobile = () => {
  const { isMenuOpen } = useStore();

  return (
    <StyledMobileNav isOpen={isMenuOpen}>
      <StyledMenu>
        <MainNavigation />
        <li>
          <StyledLink to=''>
            <img
              src='./src/assets/searchIco.svg'
              alt='search button'
            />
          </StyledLink>
          <StyledLink to=''>
            <img
              src='./src/assets/heartIco.svg'
              alt='favourites button'
            />
          </StyledLink>
        </li>
      </StyledMenu>
    </StyledMobileNav>
  );
};

export default NavMobile;
