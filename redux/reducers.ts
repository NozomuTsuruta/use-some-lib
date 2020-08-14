import { State, Action, ActionTypes } from './types';
import shortid from 'shortid';

export const initialState: State = {
  products: [],
};

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionTypes.addProduct:
      return {
        products: [
          ...state.products,
          { id: shortid.generate(), ...action.payload },
        ],
      };

    case ActionTypes.deleteProduct:
      state.products.filter((product) => product.id !== action.payload);
      return { products: [...state.products] };

    default:
      return state;
  }
};
