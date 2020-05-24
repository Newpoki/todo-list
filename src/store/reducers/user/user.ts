import { createSlice, createAsyncThunk, createStore } from "@reduxjs/toolkit";

import {
  fetchUserWithToken,
  IServiceResponse,
  isSuccessResponse,
  IFetchUserWithTokenInput,
} from "services";
import { IUserReducerState, IUser } from "./user.interfaces";

const userInitialState: IUserReducerState = {
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

export type IStore = ReturnType<typeof createStore>;
export type IRootState = ReturnType<IStore["getState"]>;
export type IRootDispatch = IStore["dispatch"];

/**
 * Thunk qui récupère les données d'un joueur associé via un token.
 * Si le token est valide -> On le stock en local storage
 * Si le token est invalide -> On le supprime du local storage et on redirige vers le login (seul cas d'erreur possible, il a expiré)
 */
const getUserWithToken = createAsyncThunk<IServiceResponse<IUser>, IFetchUserWithTokenInput>(
  "user/getUserWithToken",
  async (payload: IFetchUserWithTokenInput) => {
    const response = await fetchUserWithToken(payload);
    return response;
  }
);

export const user = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserWithToken.fulfilled, (state: IUserReducerState, action) => {
      if (isSuccessResponse(action.payload)) {
        state.data = action.payload.data;
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
