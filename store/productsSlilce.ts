import { createSlice } from '@reduxjs/toolkit';
import { Property } from '../components/ProductCard';

type initialState: {
  productList:Property[] 
}

const products = createSlice({
  initialState: {
    productsList: [],
  },
});
