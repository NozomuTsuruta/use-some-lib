import { ActionTypes, Product } from './types';

export const addProduct = (product: Omit<Product, 'id'>) => ({
  type: ActionTypes.addProduct,
  payload: product,
});

export const deleteProduct = (id: string) => ({
  type: ActionTypes.addProduct,
  payload: id,
});

