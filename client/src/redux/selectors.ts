import { AppStore } from './store'

export const selectPopupState = (state: AppStore) => state.rootReducer.modals.opened
export const selectLoaderState = (state: AppStore) => state.rootReducer.loader.shown
export const selectProducts = (state: AppStore) => state.rootReducer.products.items
export const selectProductsLoading = (state: AppStore) => state.rootReducer.products.isLoading
export const selectProductsError = (state: AppStore) => state.rootReducer.products.isError
export const selectTotal = (state: AppStore) => state.rootReducer.products.total
export const selectCurrentChunk = (state: AppStore) => state.rootReducer.products.currentChunk

export const selectProduct = (id: number) => (state: AppStore) =>
  state.rootReducer.products.items.find((p) => p.id === id)
