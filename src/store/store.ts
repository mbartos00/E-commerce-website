import { Product } from '#/api/productsApi';
import { create } from 'zustand';

type StoreProps = {
  isMenuOpen: boolean;
  toggleMenuOpen: () => void;
  products: Product[];
  storeProducts: (products: Product[]) => void;
};

const useStore = create<StoreProps>()(set => ({
  products: [],
  isMenuOpen: false,
  toggleMenuOpen: () => set(state => ({ isMenuOpen: !state.isMenuOpen })),
  storeProducts: products => set({ products: products }),
}));

export default useStore;
