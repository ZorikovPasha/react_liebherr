import { Action, AnyAction, combineReducers, configureStore, ThunkAction, ThunkDispatch } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import { reducer as modalsReducer } from './slices/modalsSlice'
import { reducer as filtersReducer } from './slices/CatalogFiltersSlice'
import { reducer as loaderReducer } from './slices/loaderSilce'
import { reducer as productsReducer } from './slices/productsSlice'

const rootReducer = combineReducers({
  modals: modalsReducer,
  filters: filtersReducer,
  loader: loaderReducer,
  products: productsReducer,
})

const makeStore = () =>
  configureStore({
    reducer: {
      rootReducer,
    },
    devTools: true,
  })

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore['getState']>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>
export type NextThunkDispatch = ThunkDispatch<AppState, void, AnyAction>

export const wrapper = createWrapper<AppStore>(makeStore)
