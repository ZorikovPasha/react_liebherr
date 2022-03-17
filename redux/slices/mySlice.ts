import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from 'next-redux-wrapper';

type orderType = {
  id: number;
  name: string;
  liftingCapacity: number;
  arrowLength: number;
};
interface CartItemsState {
  items: orderType[];
}


const initialState: CartItemsState = {
  items: [],
}

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<orderType>) => {
      state.items.push(action.payload);
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
          ...state,
          ...action.payload,
      };
    },
  },
})

export const { addOrder } = ordersSlice.actions

export const { reducer } =  ordersSlice;