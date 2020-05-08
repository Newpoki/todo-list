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

export interface IUpdateTodoStatePayload {
  todosListId: ITodoList["id"];
  todoId: ITodo["id"];
  newTodoState: ITodoState;
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

    updateTodoState: (state, { payload }: { payload: IUpdateTodoStatePayload }) => {
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
          // La todosList sans le todo à mettre à jour
          const todosListWithoutUpdatedOne: ITodo[] = concernedTodosList.list.filter(
            (todo) => todo.id !== payload.todoId
          );
          // Le todo mis à jour
          const updatedTodo: ITodo = { ...concernedTodo, state: payload.newTodoState };

          // La todosList mise à jour
          const updatedTodosList: ITodoList = {
            ...concernedTodosList,
            list: [...todosListWithoutUpdatedOne, updatedTodo],
          };

          // Les todosLists à jour
          const updatedTodosLists: ITodoList[] = [...todosListsWithoutUpdatedOne, updatedTodosList];

          state.todosLists = updatedTodosLists;
        }
      }
    },
  },
});

export const userReducer = user.reducer;
export const userActions = user.actions;
