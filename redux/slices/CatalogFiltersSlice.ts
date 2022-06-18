import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  sort: "height_to",
  weights: [] as number[],
};


export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSort: (state, action: PayloadAction<string>) => {
      return {
        ...state, 
        sort: action.payload,
      }
    },
    setWeight: (state, action: PayloadAction<number>) => {
      state.weights.includes(action.payload)
        ? state.weights = state.weights.filter(num => num !== action.payload)
        : state.weights.push(action.payload);
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.loader,
      };
    },
  },
});


export const { setSort, setWeight } = filtersSlice.actions;
export const { reducer } = filtersSlice;