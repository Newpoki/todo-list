import { configureStore } from "@reduxjs/toolkit";

import {
  IUserReducerState,
  ITodosListsReducerState,
  userReducer,
  todosListsReducer,
} from "./reducers";

/** Interface du state du store de l'application */
export interface IStoreState {
  user: IUserReducerState;
  todosLists: ITodosListsReducerState;
}

const rootReducerState = {
  user: userReducer,
  todosLists: todosListsReducer,
};

export const store = configureStore({
  reducer: rootReducerState,
});
