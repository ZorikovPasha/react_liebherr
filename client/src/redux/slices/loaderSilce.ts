import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

const initialState = {
  shown: false,
}

export const modalsSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    toggleLoader: (state, action: PayloadAction<boolean>) => {
      state.shown = action.payload
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.loader,
      }
    },
  },
})

export const { toggleLoader } = modalsSlice.actions

export const { reducer } = modalsSlice
