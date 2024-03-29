import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { publicApi } from '../../api'
import { MachineryType } from '../../types/dataTypes'

const initialState = {
  items: [] as MachineryType[],
  total: 0,
  currentChunk: 1,
  isLoading: false,
  isError: false,
}

export const fetchProducts = createAsyncThunk('products/fetch', async (query: string) => {
  return publicApi.getMachinery(query)
})

export const modalsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchProducts.rejected, (state) => {
      state.isLoading = false
      state.isError = true
      state.currentChunk = 1
      state.total = 0
    })

    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false
      state.isError = false
      state.items = action.payload.items
      state.total = action.payload.total
      // state.currentChunk = action.payload.chunk
    })
  },
})

export const { reducer } = modalsSlice
