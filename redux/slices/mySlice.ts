import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from '../store'

// Define a type for the slice state

type orderType = {
  id: number;
  name: string;
  liftingCapacity: number;
  arrowLength: number;
};
interface CartItemsState {
  items: orderType[];
}



// Define the initial state using that type
const initialState: CartItemsState = {
  items: [],
}

export const cartSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<orderType>) => {
      state.items.push(action.payload);
    },
  },
})

export const { addOrder } = cartSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.rootReducer.cart

export default cartSlice.reducer