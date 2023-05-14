import useStore from '#/store/store';
import styled from 'styled-components';
import Carousel from './Carousel';

const StyledHero = styled.div`
  width: 100%;
  min-height: 20rem;
  height: 30rem;
  overflow-x: hidden;
  @media screen and (min-width: 1400px) {
    height: 40rem;
  }
`;

const Hero = () => {
  const { products } = useStore();
  const discountedProducts = products
    .sort((a, b) => b.discountPercentage - a.discountPercentage)
    .slice(0, 5);
  return (
    <StyledHero>
      <Carousel products={discountedProducts} />
    </StyledHero>
  );
};

export default Hero;
