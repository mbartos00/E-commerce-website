import styled from 'styled-components';
import { Link } from 'react-router-dom';
type HeroItemProduct = {
  title: string;
  image: string;
  id: number;
  discount: number;
  isActive: boolean;
};
type StyledProps = {
  isActive: boolean;
};
const StyledHeroItem = styled.div<StyledProps>`
  background-color: rgba(219, 208, 204, 0.8);
  display: flex;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  pointer-events: ${({ isActive }) => (isActive ? 'visible' : 'none')};
  padding-inline: 1rem;
  transition: all 0.5s ease-in-out;
`;

const StyledImageContainer = styled.div`
  width: 100%;
  margin-right: 0.5rem;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media screen and (min-width: 1400px) {
    justify-content: center;
  }
  img {
    width: clamp(10rem, 20vw, 30rem);
  }
`;
const StyledContentContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 1rem 5rem auto;
  row-gap: 1.5rem;
  margin-left: 0.5rem;
  h3 {
    color: #323334;
  }
  p {
    font-size: 1.25rem;
    color: #a86a3d;
    font-weight: 700;
    line-height: 23px;
  }
  .title {
    inline-size: 12ch;
    overflow-wrap: break-word;
  }
`;

const StyledLink = styled(Link)`
  background-color: transparent;
  color: #323334;
  font-weight: 600;
  border: 1px solid #323334;
  padding: 0.8rem 1rem;
  text-decoration: none;
  text-align: center;
  width: 7.5rem;
`;

const HeroItem = ({
  title,
  image,
  id,
  discount,
  isActive,
}: HeroItemProduct) => {
  return (
    <StyledHeroItem isActive={isActive}>
      <StyledImageContainer>
        <img
          src={image}
          alt={`${title} image`}
        />
      </StyledImageContainer>
      <StyledContentContainer>
        <h3>HOT DEALS THIS WEEK</h3>
        <div>
          <p className='discount'>{`SALE UP ${discount}%`}</p>
          <p className='title'>{title}</p>
        </div>
        <StyledLink to={`/products/product/:${id}`}>VIEW NOW</StyledLink>
      </StyledContentContainer>
    </StyledHeroItem>
  );
};

export default HeroItem;
