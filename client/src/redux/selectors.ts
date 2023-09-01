import { AppState } from './store'

export const selectActiveTabs = (state: AppState) => state.rootReducer.filters.weights
export const selectPopupState = (state: AppState) => state.rootReducer.modals.opened
export const selectFliters = (state: AppState) => state.rootReducer.filters
export const selectLoaderState = (state: AppState) => state.rootReducer.loader.shown
export const selectProducts = (state: AppState) => state.rootReducer.products.items
export const selectProductsLoading = (state: AppState) => state.rootReducer.products.isLoading
export const selectProductsError = (state: AppState) => state.rootReducer.products.isError
export const selectTotal = (state: AppState) => state.rootReducer.products.total
export const selectCurrentChunk = (state: AppState) => state.rootReducer.products.currentChunk

export const selectProduct = (id: number) => (state: AppState) =>
  state.rootReducer.products.items.find((p) => p.id === id)
