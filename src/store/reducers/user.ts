import { createSlice } from "@reduxjs/toolkit";
import { getTodosListState } from "common-utils";

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

export interface IUpdateTodoStatePayload {
  todosListId: ITodoList["id"];
  todoId: ITodo["id"];
  newTodoState: ITodoState;
}

export interface IDeleteTodoPayload {
  todosListId: ITodoList["id"];
  todoId: ITodo["id"];
}

export const userInitialState: IUserReducerState = {
  firstName: "",
  lastName: "",
  displayName: "Jason",
  todosLists: [],
  getRequestStatus: "NOT_CALLED",
};

export const user = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    addNewTodosList: (state: IUserReducerState, { payload }: { payload: ITodoList }) => {
      state.todosLists.push(payload);
    },

    deleteTodosList: (state: IUserReducerState, { payload }: { payload: ITodoList["id"] }) => {
      const filteredTodosLists = state.todosLists.filter((todosList) => todosList.id !== payload);
      state.todosLists = filteredTodosLists;
    },

    deleteTodo: (state: IUserReducerState, { payload }: { payload: IDeleteTodoPayload }) => {
      // On trouve la todosList concerné
      const concernedTodosList: ITodoList | undefined = state.todosLists.find(
        (todosList) => todosList.id === payload.todosListId
      );

      // Toutes les todosList sauf celle contenant le todo à mettre à jour
      const todosListsWithoutUpdatedOne: ITodoList[] = state.todosLists.filter(
        (todosList) => todosList.id !== payload.todosListId
      );

      if (concernedTodosList) {
        // Liste de todos de la todoList sans le todo à supprimer
        const updatedList = concernedTodosList.list.filter((todo) => todo.id !== payload.todoId);

        // La todosList mise à jour
        const updatedTodosList: ITodoList = {
          ...concernedTodosList,
          list: updatedList,
          updatedAt: Date.now(),
          state: getTodosListState(updatedList),
        };

        // Les todosLists à jour
        const updatedTodosLists: ITodoList[] = [updatedTodosList, ...todosListsWithoutUpdatedOne];

        state.todosLists = updatedTodosLists;
      }
    },

    updateTodoState: (
      state: IUserReducerState,
      { payload }: { payload: IUpdateTodoStatePayload }
    ) => {
      // On trouve la todosList concerné
      const concernedTodosList: ITodoList | undefined = state.todosLists.find(
        (todosList) => todosList.id === payload.todosListId
      );

      // Toutes les todosList sauf celle contenant le todo à mettre à jour
      const todosListsWithoutUpdatedOne: ITodoList[] = state.todosLists.filter(
        (todosList) => todosList.id !== payload.todosListId
      );

      if (concernedTodosList) {
        // Le todo à mettre à jour
        const concernedTodo = concernedTodosList.list.find((todo) => todo.id === payload.todoId);

        if (concernedTodo) {
          const actualTimeStamp = Date.now();

          // Le todo mis à jour
          const updatedTodo: ITodo = {
            ...concernedTodo,
            state: payload.newTodoState,
            updatedAt: actualTimeStamp,
          };

          // Liste de todos de la todoList mise à jour
          const updatedList = concernedTodosList.list.map((todo) =>
            todo.id === payload.todoId ? updatedTodo : todo
          );

          // La todosList mise à jour
          const updatedTodosList: ITodoList = {
            ...concernedTodosList,
            list: updatedList,
            updatedAt: actualTimeStamp,
            state: getTodosListState(updatedList),
          };

          // Les todosLists à jour
          const updatedTodosLists: ITodoList[] = [updatedTodosList, ...todosListsWithoutUpdatedOne];

          state.todosLists = updatedTodosLists;
        }
      }
    },
  },
});

export const userReducer = user.reducer;
export const userActions = user.actions;
