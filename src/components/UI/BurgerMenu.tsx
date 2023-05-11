import styled from 'styled-components';
import { Dispatch, SetStateAction } from 'react';
import useStore from '#/store/store';

const StyledBurgerMenu = styled.div<{ isOpen: boolean }>`
  cursor: pointer;
  width: 1.6rem;
  z-index: 10;
  height: 1rem;
  @media screen and (min-width: 600px) {
    display: none;
  }
  span {
    position: relative;
    width: 100%;
    height: ${({ isOpen }) => (isOpen ? '0' : '2px')};
    top: 50%;
    transform: translateY(-50%);
    background-color: #323334;
    display: block;
    border-radius: 3px;
    transition: all 0.1s ease-in-out;
    &::before {
      content: '';
      position: absolute;
      background-color: #323334;
      border-radius: 3px;
      width: 100%;
      height: 2px;
      top: ${({ isOpen }) => (isOpen ? '' : 'calc(50% - 5px)')};
      transform: translateY(-50%);
      transform: rotate(${({ isOpen }) => (isOpen ? '45deg' : '')});
      transition: all 0.5s ease-in-out;
    }
    &::after {
      content: '';
      position: absolute;
      background-color: #323334;
      border-radius: 3px;
      width: 100%;
      height: 2px;
      top: ${({ isOpen }) => (isOpen ? '1px' : 'calc(50% + 5px)')};
      transition: all 0.5s ease-in-out;

      transform: translateY(-50%);
      transform: rotate(${({ isOpen }) => (isOpen ? '-45deg' : '')});
    }
  }
`;

const BurgerMenu = () => {
  const { isMenuOpen, toggleMenuOpen } = useStore();
  return (
    <StyledBurgerMenu
      isOpen={isMenuOpen}
      onClick={toggleMenuOpen}
    >
      <span></span>
    </StyledBurgerMenu>
  );
};

export default BurgerMenu;
