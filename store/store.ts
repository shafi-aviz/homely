import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from 'react-redux';
import { productAPi } from './productAPI';
import productsReducer from './productsSlilce';

const combinedReducers = combineReducers({
  productList: productsReducer,
  [productAPi.reducerPath]: productAPi.reducer,
});

export function makeStore() {
  return configureStore({
    reducer: combinedReducers,
    // middleware: bindMiddleware([]),
    middleware: (gDM) => gDM(),
  });
}

// const store = makeStore();

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

const wrapper = createWrapper<AppStore>(makeStore, { debug: true });

export default wrapper;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<AppState> =
  useSelector;
