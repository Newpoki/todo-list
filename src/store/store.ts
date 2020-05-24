import { configureStore } from "@reduxjs/toolkit";

import {
  IUserReducerState,
  ITodosListsReducerState,
  userReducer,
  todosListsReducer,
  IAuthReducerState,
  authReducer,
} from "./reducers";

/** Interface du state du store de l'application */
export interface IStoreState {
  auth: IAuthReducerState;
  todosLists: ITodosListsReducerState;
  user: IUserReducerState;
}

const rootReducerState = {
  auth: authReducer,
  todosLists: todosListsReducer,
  user: userReducer,
};

export const store = configureStore({ reducer: rootReducerState });

export type IAppDispatch = typeof store.dispatch;
