import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from 'next-redux-wrapper';

import { ArticleType } from '../../types/dataTypes';

type initialStateType = {
  items: ArticleType[]
};


const initialState: initialStateType = {
  items: []
};

export const articlresSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    addArticles: (state, action: PayloadAction<ArticleType[]>) => {
      state.items.concat(state.items, action.payload);
    },
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  }
});

export const { addArticles } = articlresSlice.actions;
export const { reducer  } = articlresSlice;