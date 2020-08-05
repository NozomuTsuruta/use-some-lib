import { ActionTypes, Product } from './types';

export const addProduct = (product: Omit<Product, 'id'>) => ({
  type: ActionTypes.addProduct,
  payload: product,
});

export const deleteProduct = (id: Pick<Product, 'id'>) => ({
  type: ActionTypes.addProduct,
  payload: id,
});

export const editProduct = (productAndId: Product) => ({
  type: ActionTypes.addProduct,
  payload: productAndId,
});
