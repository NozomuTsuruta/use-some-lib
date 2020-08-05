import {
  useReducer,
  useContext,
  createContext,
} from 'react';
import { initialState, reducer } from './reducers';

const stateContext = createContext(initialState);
const dispatchContext = createContext();

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <dispatchContext.Provider value={dispatch}>
      <stateContext.Provider value={state}>{children}</stateContext.Provider>
    </dispatchContext.Provider>
  );
};

export const useDispatch = () => {
  return useContext(dispatchContext);
};

export const useGrobalState = (property) => {
  const state = useContext(stateContext);
  return state[property];
};
