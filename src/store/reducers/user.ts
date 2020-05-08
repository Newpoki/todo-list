import { createSlice } from "@reduxjs/toolkit";

export type IAnyRequestStatus = "NOT_CALLED" | "PENDING" | "SUCCESS" | "ERROR";

export type ITodoState = "DONE" | "ON_GOING";

export interface ITodo {
  id: string;
  label: string;
  state: ITodoState;
  createdAt: number;
  updatedAt?: number;
}

export interface ITodoList {
  id: string;
  title: string;
  createdAt: number;
  updatedAt?: number;
  isFavorite: boolean;
  list: ITodo[];
  state: ITodoState;
}

export interface IUserReducerState {
  firstName: string;
  lastName: string;
  displayName: string;
  todosLists: Array<ITodoList>;
  getRequestStatus: IAnyRequestStatus;
}

export const userInitialState: IUserReducerState = {
  firstName: "",
  lastName: "",
  displayName: "",
  todosLists: [],
  getRequestStatus: "NOT_CALLED",
};

export const user = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    addNewTodosList: (state, { payload }: { payload: ITodoList }) => {
      state.todosLists.push(payload);
    },
    removeTodosList: (state, { payload }: { payload: ITodoList["id"] }) => {
      const filteredTodosLists = state.todosLists.filter((todosList) => todosList.id === payload);
      state.todosLists = filteredTodosLists;
    },
  },
});

export const userReducer = user.reducer;
export const userActions = user.actions;
