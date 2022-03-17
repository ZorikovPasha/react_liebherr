import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  opened: {
    request: false,
    message: false,
  }
}

type payloadType = {
  name: keyof typeof initialState.opened;
  state: boolean;
}


export const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    toggleModal: (state, action: PayloadAction<payloadType>) => {
      state.opened[action.payload.name] = action.payload.state;
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
          ...state,
          ...action.payload,
      };
    },
  },
})

export const { toggleModal } = modalsSlice.actions;

export const { reducer } = modalsSlice;