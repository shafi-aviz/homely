import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';
import { server } from '../config/index';

export const productAPi = createApi({
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://jsonplaceholder.typicode.com/',
    baseUrl: `${server}/api`,
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type == HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getProperties: builder.query({ query: () => 'property' }),
    addProperty: builder.mutation({
      query: (payload) => ({
        url: 'addProperty',
        method: 'POST',
        body: payload,
      }),
    }),
  }),
});

export const {
  useGetPropertiesQuery,
  useAddPropertyMutation,
  util: { getRunningOperationPromises },
} = productAPi;

export const { getProperties, addProperty } = productAPi.endpoints;
