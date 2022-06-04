import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  sort: "height",
  paginate: 0,
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
});


export const { setSort, setWeight, setPaginate } = filtersSlice.actions;
export const { reducer } = filtersSlice;