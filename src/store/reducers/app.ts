import { createSlice } from "@reduxjs/toolkit";

export interface IAppReducerState {
  isMenuOpen: boolean;
}

const initialState: IAppReducerState = {
  isMenuOpen: false,
};

const app = createSlice({
  name: "app",
  initialState,
  reducers: {
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    openMenu: (state) => {
      state.isMenuOpen = true;
    },
  },
});

export const appReducer = app.reducer;
export const appActions = app.actions;
