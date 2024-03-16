import { createSlice, PayloadAction } from '@reduxjs/toolkit'

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
})

export const { toggleLoader } = modalsSlice.actions

export const { reducer } = modalsSlice
