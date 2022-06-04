import { AppState } from "./store";

export const selectCount = (state: AppState) => state.rootReducer.orders
export const selectActiveTabs = (state: AppState) => state.rootReducer.filters.weights
export const selectArticles = (state: AppState) => state.rootReducer.articles
export const selectPopupState = (state: AppState) => state.rootReducer.modals.opened.request;
export const selectSuccessPopupState = (state: AppState) => state.rootReducer.modals.opened.message;
export const selectFliters = (state: AppState) => state.rootReducer.filters;

export const selectAnotherArticles = (id: number) => (state: AppState) => state.rootReducer.articles.items.filter(item => item.id !== id);
