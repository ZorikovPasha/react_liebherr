import { Action, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { publicApi } from "../../api";
import { MachineryType } from "../../types/dataTypes";

const initialState = {
  items: [] as MachineryType[],
  total: 0,
  currentChunk: 1,
  isLoading: false,
  isError: false
}


export const fetchProducts = createAsyncThunk(
  'products/fetch',
  async (chunk: number) => {
    const response = await publicApi.getMachinery(chunk)
    
    return response
  }
)

interface PayloadType extends Action<"__NEXT_REDUX_WRAPPER_HYDRATE__"> {
  payload: {rootReducer: {products: [] }}
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
    })

    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false
      state.isError = false
      state.items = action.payload.items
      state.total = action.payload.total
      state.currentChunk = action.meta.arg
    })
    
    builder.addCase(HYDRATE, (state, action: PayloadType) => {
      return {
        ...state,
        ...action.payload.rootReducer.products  
      }
    })
  },
})

export const { reducer } = modalsSlice;