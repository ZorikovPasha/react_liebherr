import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  sort: "height",
  paginate: 1,
  weights: [40],
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
    setPaginate: (state, action: PayloadAction<number>) => {
      return {
        ...state, 
        paginate: action.payload,
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


export const { setSort, setWeight, setPaginate } = filtersSlice.actions;
export const { reducer } = filtersSlice;