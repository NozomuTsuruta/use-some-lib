export const ActionTypes = {
  addProduct: 'ADD_PRODUCT',
  deleteProduct: 'DELETE_PRODUCT',
  editProduct: 'EDIT_PRODUCT',
} as const;

export interface Product {
  name: string;
  number: number;
  memo: string;
  id: string;
}

export interface State {
  products: Product[]
}

export type Action =
  | { type: typeof ActionTypes.addProduct; payload: Omit<Product, 'id'> }
  | { type: typeof ActionTypes.deleteProduct; payload: Pick<Product, 'id'> }
  | { type: typeof ActionTypes.editProduct; payload: Product };
