import { createSlice } from "@reduxjs/toolkit";

import { IAuthReducerState } from "./auht.interfaces";
import { userThunks } from "../user/user";
import { localStorageManager } from "common-utils";

const authDefaultState: IAuthReducerState = {
  state: "NOT_AUTH",
  token: "",
};

export const authInitialState: IAuthReducerState = {
  ...authDefaultState,
  token: localStorageManager.authToken.get() ?? "",
};

export const auth = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    disconnect: () => {
      return authDefaultState;
    },
    changeStateToMustAuth: (state) => {
      state.state = "MUST_AUTH";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userThunks.getUserWithToken.fulfilled, (state, action) => {
      state.state = "AUTH";
      state.token = action.meta.arg.token;
    });
  },
});

export const authReducer = auth.reducer;
export const authActions = auth.actions;
