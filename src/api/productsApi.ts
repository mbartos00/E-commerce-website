import axios, { type AxiosError } from 'axios';

const productsApi = axios.create({
  baseURL: 'https://dummyjson.com',
});

export const getAllProducts = async () => {
  try {
    const response = await productsApi.get<Products>('/products');

    return response.data;
  } catch (err) {
    const error = err as AxiosError<Error>;
    console.log(error.response);
    throw new Error(error.message);
  }
};

type Error = {
  message: string[];
  statusCode: number;
};

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export type Products = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};
