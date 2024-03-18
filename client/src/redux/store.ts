import { Action, AnyAction, combineReducers, configureStore, ThunkAction, ThunkDispatch } from '@reduxjs/toolkit'
import { reducer as modalsReducer } from './slices/modalsSlice'
import { reducer as loaderReducer } from './slices/loaderSilce'
import { reducer as productsReducer } from './slices/productsSlice'

const rootReducer = combineReducers({
  modals: modalsReducer,
  loader: loaderReducer,
  products: productsReducer,
})

export const store = configureStore({
  reducer: {
    rootReducer,
  },
  devTools: true,
})

export type AppStore = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStore, unknown, Action>
export type NextThunkDispatch = ThunkDispatch<AppStore, void, AnyAction>
