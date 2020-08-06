import { State, Action, ActionTypes } from './types';

export const initialState: State = {
  products: [],
};

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionTypes.addProduct:
      return { products: [...state.products, action.payload] };

    case ActionTypes.deleteProduct:
      state.products.filter((product) => product.id !== action.payload.id);
      return { products: [...state.products] };

    case ActionTypes.editProduct:
      state.products.map((product) => {
        if (product.id === action.payload.id) {
          product.name = action.payload.name;
          product.number = action.payload.number;
          product.memo = action.payload.memo;
        }
        return product;
      });
      return { products: [...state.products] };
      
    default:
      return state;
  }
};
