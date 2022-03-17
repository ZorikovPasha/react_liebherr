import { Action, AnyAction, combineReducers, configureStore, ThunkAction, ThunkDispatch } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { reducer } from './slices/mySlice';
import { reducer as articlesReducer } from './slices/articlesSlice';
import { reducer as modalsReducer } from './slices/modalsSlice';

const rootReducer = combineReducers({
  orders: reducer,
  articles: articlesReducer,
  modals: modalsReducer
})


const makeStore = () => configureStore({
  reducer: {
    rootReducer
  },
  devTools: true,
});

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;
export type NextThunkDispatch = ThunkDispatch<AppState, void, AnyAction>;


export const wrapper = createWrapper<AppStore>(makeStore);
