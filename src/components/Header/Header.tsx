import styled from 'styled-components';
import HeaderIcons from './HeaderIcons';
import HeaderItems from './HeaderItems';
import Nav from '../Nav/Nav';
import useWindowWidth from '../hooks/useWindowWidth';
import isMobileWidth from '../utils/isMobileWidth';

const StyledHeader = styled.header`
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  width: 100%;
  padding: 1.2rem 1.2rem;
  @media screen and (min-width: 600px) {
    padding: 1.2rem 4.75rem;
    flex-direction: column;
    div {
      display: inherit;
      width: 100%;
      align-items: center;
    }
  }
`;

const Header = () => {
  const windowWidth = useWindowWidth();
  const isMobile = isMobileWidth(windowWidth);
  return (
    <StyledHeader>
      {!isMobile ? (
        <div>
          <HeaderItems />
        </div>
      ) : (
        <>
          <HeaderItems />
        </>
      )}
      <Nav />
      {!isMobile && <HeaderIcons />}
    </StyledHeader>
  );
};

export default Header;
