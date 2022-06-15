import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { MachineryType } from "../../types/dataTypes";

const initialState = {
  items: [] as MachineryType[]
}


export const modalsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<MachineryType[]>) => {
      state.items = action.payload
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.rootReducer.products,
      };
    },
  },
})

export const { set } = modalsSlice.actions;

export const { reducer } = modalsSlice;