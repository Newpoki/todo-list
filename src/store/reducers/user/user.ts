import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getUserInformations, IServiceResponse } from "services";
import { IUserReducerState, IUser } from "./user.interfaces";

export const userInitialState: IUserReducerState = {
  data: {
    displayName: "",
    email: "",
    id: "",
    photoUrl: "",
  },
  getRequestStatus: "NOT_CALLED",
};

const connection = createAsyncThunk<IServiceResponse<IUser>>("cv/updateCvData", async () => {
  const response = await getUserInformations();
  console.log(response);
  return response;
});

export const user = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(connection.fulfilled, (state: IUserReducerState, { payload }) => {
      if (payload.data) {
        state.data = payload.data;
        state.getRequestStatus = "SUCCESS";
      } else {
        state.getRequestStatus = "ERROR";
      }
    });
    builder.addCase(connection.rejected, (state) => {
      state.getRequestStatus = "ERROR";
    });
    builder.addCase(connection.pending, (state) => {
      state.getRequestStatus = "PENDING";
    });
  },
});

export const userReducer = user.reducer;
export const userActions = user.actions;
export const userThunks = {
  connection,
};
