import { getAllProducts } from '#/api/productsApi';
import { useEffect } from 'react';
import Hero from '#/components/Hero/Hero';
import { useQuery } from 'react-query';
import useStore from '#/store/store';
const Home = () => {
  const { data, error } = useQuery(['/products'], () => getAllProducts());
  const { storeProducts } = useStore();
  useEffect(() => {
    data && storeProducts(data.products);
  }, [data]);

  return <Hero />;
};

export default Home;
