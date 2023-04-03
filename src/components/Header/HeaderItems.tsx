import type { Dispatch, SetStateAction } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import BurgerMenu from '../UI/BurgerMenu';

const CtaWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  a,
  button {
    width: clamp(0.8rem, 3vw, 1.6rem);
    height: clamp(1rem, 3vh, 2rem);

    img {
      width: 100%;
      height: 100%;
    }
  }
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;

type Props = {
  isMobile: boolean;
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
};

const HeaderItems = ({ isMobile, isMenuOpen, setIsMenuOpen }: Props) => {
  return (
    <>
      <div>
        <h3>Shop</h3>
      </div>
      <CtaWrapper>
        {!isMobile && (
          <button>
            <img
              src='./src/assets/searchIco.svg'
              alt='search button'
            />
          </button>
        )}
        <NavLink to={'/profile'}>
          <img
            src='./src/assets/userIco.svg'
            alt='profile button'
          />
        </NavLink>
        <NavLink to={'/cart'}>
          <img
            src='./src/assets/cartIco.svg'
            alt='cart button'
          />
        </NavLink>
        {isMobile ? (
          <BurgerMenu
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
        ) : (
          <NavLink to={'/favourites'}>
            <img
              src='./src/assets/heartIco.svg'
              alt='favourites button'
            />
          </NavLink>
        )}
      </CtaWrapper>
    </>
  );
};

export default HeaderItems;
