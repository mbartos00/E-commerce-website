import { useEffect } from 'react';
import { useState } from 'react';
import { Product } from '#/api/productsApi';
import styled from 'styled-components';
import HeroItem from './HeroItem';
import useStore from '#/store/store';
type StyledProps = {
  isActive: boolean;
};
const StyledCarousel = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;
const StyledCarouselWrapper = styled.div<StyledProps>`
  position: relative;
  z-index: ${({ isActive }) => (isActive ? '-1' : 0)};
  width: 100%;
  height: 100%;
`;

const StyledPagination = styled.div`
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translate(-50%, 0);
`;
const StyledPaginationDot = styled.div<StyledProps>`
  height: 10px;
  width: 10px;
  background-color: ${({ isActive }) => (isActive ? 'steelblue' : '#f5f5f5')};
  border-radius: 50%;
  display: inline-block;
  margin-left: 10px;
  cursor: pointer;
`;
const Carousel = ({ products }: { products: Product[] }) => {
  const { isMenuOpen } = useStore();
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut: ReturnType<typeof setTimeout>;
  useEffect(() => {
    if (autoPlay) {
      timeOut = setTimeout(() => {
        slideRight();
      }, 3500);
    }
  });

  const slideRight = () => {
    setCurrent(current === products.length - 1 ? 0 : current + 1);
  };

  return (
    <StyledCarousel
      onMouseEnter={() => {
        setAutoPlay(false);
        clearTimeout(timeOut);
      }}
      onMouseLeave={() => {
        setAutoPlay(true);
      }}
    >
      <StyledCarouselWrapper isActive={isMenuOpen}>
        {products.map((item, index) => {
          return (
            <HeroItem
              isActive={index === current}
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.images[0]}
              discount={item.discountPercentage}
            />
          );
        })}
        <StyledPagination>
          {products.map((item, index) => {
            return (
              <StyledPaginationDot
                key={item.id}
                isActive={index === current}
                onClick={() => setCurrent(index)}
              ></StyledPaginationDot>
            );
          })}
        </StyledPagination>
      </StyledCarouselWrapper>
    </StyledCarousel>
  );
};

export default Carousel;
