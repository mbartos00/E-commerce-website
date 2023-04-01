import styled from 'styled-components';
import { motion } from 'framer-motion';
import { easeInOut } from 'framer-motion';
const StyledMobileNav = styled(motion.nav)`
  background-color: #ffffff7d;
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  left: 0;
  padding-block: 2rem;
  box-shadow: 0px 10px 10px -10px #323334;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: #323334;
  font-size: 1rem;
  font-weight: bold;
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
const NavMobile = ({ isOpen }: { isOpen: boolean }) => {
  const menu = {
    hidden: {
      translateY: '-200%',
      opacity: 0,
    },
    open: {
      translateY: '65%',
      opacity: 1,
      transition: { ease: easeInOut, duration: 0.4 },
    },
  };

  return (
    <StyledMobileNav
      variants={menu}
      initial='hidden'
      animate={isOpen ? 'open' : 'hidden'}
    >
      <StyledMenu>
        <li>
          <StyledLink href=''>HOME</StyledLink>
        </li>
        <li>
          <StyledLink href=''>STORE</StyledLink>
        </li>
        <li>
          <StyledLink href=''>ABOUT US</StyledLink>
        </li>
        <li>
          <StyledLink href=''>CONTACT US</StyledLink>
        </li>
        <li>
          <StyledLink href=''>
            <img
              src='./src/assets/searchIco.svg'
              alt='search button'
            />
          </StyledLink>
          <StyledLink href=''>
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
