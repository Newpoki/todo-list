import { configureStore } from "@reduxjs/toolkit";

import { userReducer, IUserReducerState } from "./reducers";

/** Interface du state du store de l'application */
export interface IStoreState {
  user: IUserReducerState;
}

const rootReducerState = {
  user: userReducer,
};

export const store = configureStore({
  reducer: rootReducerState,
});
