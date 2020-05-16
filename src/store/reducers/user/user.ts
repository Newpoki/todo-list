import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { fetchUserWithToken, IServiceResponse, ISuccessServiceResponse } from "services";
import {
  IUserReducerState,
  IUser,
  IGetUserWithGoogleTokenPayload as IGetUserWithTokenPayload,
} from "./user.interfaces";

export const userInitialState: IUserReducerState = {
  data: {
    createdAt: "",
    email: "",
    firstName: "",
    id: 0,
    image: "",
    lastName: "",
    provider: "",
    updatedAt: "",
  },
  getRequestStatus: "NOT_CALLED",
};

const getUserWithToken = createAsyncThunk<IServiceResponse<IUser>, IGetUserWithTokenPayload>(
  "user/getUserWithToken",
  async ({ token }: IGetUserWithTokenPayload) => {
    const response = await fetchUserWithToken(token);
    return response;
  }
);

function isSucessResponse<TData>(
  response: IServiceResponse<TData>
): response is ISuccessServiceResponse<TData> {
  return !!(response as ISuccessServiceResponse<TData>).data;
}

export const user = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    updateUser: (state, { payload }: { payload: IUser }) => {
      state.data = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserWithToken.fulfilled, (state: IUserReducerState, { payload }) => {
      if (isSucessResponse(payload)) {
        state.data = payload.data;
        state.getRequestStatus = "SUCCESS";
      }
    });
    builder.addCase(getUserWithToken.rejected, (state) => {
      state.getRequestStatus = "ERROR";
    });
    builder.addCase(getUserWithToken.pending, (state) => {
      state.getRequestStatus = "PENDING";
    });
  },
});

export const userReducer = user.reducer;
export const userActions = user.actions;
export const userThunks = {
  getUserWithToken,
};
