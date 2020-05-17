import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { fetchUserWithToken, IServiceResponse, ISuccessServiceResponse } from "services";
import {
  IUserReducerState,
  IUser,
  IGetUserWithGoogleTokenPayload as IGetUserWithTokenPayload,
} from "./user.interfaces";
import { localStorageManager } from "common-utils";

const userDefaultState: IUserReducerState = {
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
  token: "",
  getRequestStatus: "NOT_CALLED",
};

export const userInitialState: IUserReducerState = {
  ...userDefaultState,
  token: localStorageManager.userToken.get() ?? "",
};

function isSucessResponse<TData>(
  response: IServiceResponse<TData>
): response is ISuccessServiceResponse<TData> {
  return !!(response as ISuccessServiceResponse<TData>).data;
}

/**
 * Thunk qui récupère les données d'un joueur associé via un token.
 * Si le token est valide -> On le stock en local storage
 * Si le token est invalide -> On le supprime du local storage et on redirige vers le login (seul cas d'erreur possible, il a expiré)
 */
const getUserWithToken = createAsyncThunk<IServiceResponse<IUser>, IGetUserWithTokenPayload>(
  "user/getUserWithToken",
  async ({ token }: IGetUserWithTokenPayload) => {
    const response = await fetchUserWithToken(token);

    if (isSucessResponse(response)) {
      localStorageManager.userToken.set(token);
    } else {
      localStorageManager.userToken.remove();
      window.location.href = "/login";
    }

    return response;
  }
);

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
