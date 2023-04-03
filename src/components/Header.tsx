import { useEffect, useState } from 'react';

import styled from 'styled-components';
import HeaderItems from './HeaderItems';
import Nav from './Nav';

const StyledHeader = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1.2rem 1.2rem;
  @media screen and (min-width: 600px) {
    padding: 1.2rem 4.75rem;
    flex-direction: column;
    div {
      display: inherit;
      justify-content: space-between;
      width: 100%;
      align-items: center;
    }
  }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    const width = window.innerWidth;
    if (width >= 600) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  };

  useEffect(() => {
    if (windowWidth > 600) setIsMobile(false);
    else setIsMobile(true);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <StyledHeader>
      {!isMobile ? (
        <div>
          <HeaderItems
            isMobile={isMobile}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
        </div>
      ) : (
        <>
          <HeaderItems
            isMobile={isMobile}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
        </>
      )}
      <Nav
        isMobile={isMobile}
        isOpen={isMenuOpen}
      />
    </StyledHeader>
  );
};

export default Header;
