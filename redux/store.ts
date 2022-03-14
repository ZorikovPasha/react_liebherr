import { Action, combineReducers, configureStore, ThunkAction } from "@reduxjs/toolkit";
import cartReducer from './slices/mySlice';

const rootReducer = combineReducers({
  cart: cartReducer,
})

export const store = configureStore({
  reducer: {
    rootReducer
  }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
   ReturnType,
   RootState,
   unknown,
   Action<string>
 >;