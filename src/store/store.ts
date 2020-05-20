import { configureStore } from "@reduxjs/toolkit";

import {
  IUserReducerState,
  ITodosListsReducerState,
  userReducer,
  todosListsReducer,
} from "./reducers";

/** Interface du state du store de l'application */
export interface IStoreState {
  todosLists: ITodosListsReducerState;
  user: IUserReducerState;
}

const rootReducerState = {
  todosLists: todosListsReducer,
  user: userReducer,
};

export const store = configureStore({ reducer: rootReducerState });

export type IAppDispatch = typeof store.dispatch;
