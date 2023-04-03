import type { Dispatch, SetStateAction } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import BurgerMenu from '../UI/BurgerMenu';

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 3rem;
  @media screen and (min-width: 600px) {
    gap: clamp(2rem, 4vw, 5rem);
  }
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

const StyledTitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  align-items: center;
`;

type Props = {
  isMobile: boolean;
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
};

const HeaderItems = ({ isMobile, isMenuOpen, setIsMenuOpen }: Props) => {
  return (
    <>
      <StyledTitleContainer>
        <h3>Shop</h3>
      </StyledTitleContainer>
      <ButtonsWrapper>
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
      </ButtonsWrapper>
    </>
  );
};

export default HeaderItems;
