import styled from 'styled-components';
import MainNavigation from './MainNavigation';

const StyledNav = styled.nav`
  margin-top: 1.5rem;
  padding: clamp(1.2rem, 3vw, 2rem);
  position: relative;
  &::before {
    content: '';
    height: 1px;
    background-color: #323334;
    left: 50%;
    transform: translateX(-50%);
    width: 85vw;
    position: absolute;
    top: 0;
  }
  &::after {
    content: '';
    height: 1px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #323334;
    width: 85vw;
    position: absolute;
    bottom: 0;
  }
`;
const StyledMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  gap: 4rem;
  li {
    transition: all ease-in 0.2s;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const NavDesktop = () => {
  return (
    <StyledNav>
      <StyledMenu>
        <MainNavigation />
      </StyledMenu>
    </StyledNav>
  );
};

export default NavDesktop;
