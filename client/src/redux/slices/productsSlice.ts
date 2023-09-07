import { Action, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
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

interface PayloadType extends Action<'__NEXT_REDUX_WRAPPER_HYDRATE__'> {
  payload: { rootReducer: { products: [] } }
}

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

    builder.addCase(HYDRATE, (state, action: PayloadType) => {
      return {
        ...state,
        ...action.payload.rootReducer.products,
      }
    })
  },
})

export const { reducer } = modalsSlice
