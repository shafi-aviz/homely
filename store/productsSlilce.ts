import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Property } from '../components/ProductCard';

type initialStateType = {
  productList: Property[];
};

const initialState: initialStateType = {
  productList: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Property>) => {
      state.productList.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      const index = state.productList.findIndex(
        (item) => item.id == action.payload
      );
      state.productList.splice(index, 1);
    },
  },
});

export default productsSlice.reducer;

export const ProductActions = productsSlice.actions;
