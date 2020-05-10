import { createSlice } from "@reduxjs/toolkit";

import {
  ITodosListsReducerState,
  ITodoList,
  IAddTodoPayload,
  ITodo,
  IUpdateTodoStatePayload,
  IDeleteTodoPayload,
} from "./todos-lists.interfaces";
import { getTodosListState } from "common-utils";

export const todosListsInitialState: ITodosListsReducerState = {
  userId: "",
  data: [],
  getRequestStatus: "NOT_CALLED",
  postRequestStatus: "NOT_CALLED",
  putRequestStatus: "NOT_CALLED",
};

export const todosLists = createSlice({
  name: "todosLists",
  initialState: todosListsInitialState,
  reducers: {
    addNewTodosList: (state: ITodosListsReducerState, { payload }: { payload: ITodoList }) => {
      const newTodosLists = [payload, ...state.data];
      state.data = newTodosLists;
    },

    deleteTodosList: (
      state: ITodosListsReducerState,
      { payload }: { payload: ITodoList["id"] }
    ) => {
      const filteredTodosLists = state.data.filter((todosList) => todosList.id !== payload);
      state.data = filteredTodosLists;
    },

    addTodo: (state: ITodosListsReducerState, { payload }: { payload: IAddTodoPayload }) => {
      // On trouve la todosList concerné
      const concernedTodosList: ITodoList | undefined = state.data.find(
        (todosList) => todosList.id === payload.todosListId
      );

      // Toutes les todosList sauf celle contenant le todo à mettre à jour
      const todosListsWithoutUpdatedOne: ITodoList[] = state.data.filter(
        (todosList) => todosList.id !== payload.todosListId
      );

      if (concernedTodosList) {
        // On ajoute la tâche à la fin de la liste
        const updatedList: ITodo[] = [...concernedTodosList.list, payload.todo];

        // La todosList mise à jour
        const updatedTodosList: ITodoList = {
          ...concernedTodosList,
          list: updatedList,
          updatedAt: Date.now(),
          state: getTodosListState(updatedList),
        };

        // Les todosLists à jour
        const updatedTodosLists: ITodoList[] = [updatedTodosList, ...todosListsWithoutUpdatedOne];

        state.data = updatedTodosLists;
      }
    },

    deleteTodo: (state: ITodosListsReducerState, { payload }: { payload: IDeleteTodoPayload }) => {
      // On trouve la todosList concerné
      const concernedTodosList: ITodoList | undefined = state.data.find(
        (todosList) => todosList.id === payload.todosListId
      );

      // Toutes les todosList sauf celle contenant le todo à mettre à jour
      const todosListsWithoutUpdatedOne: ITodoList[] = state.data.filter(
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

        state.data = updatedTodosLists;
      }
    },

    updateTodoState: (
      state: ITodosListsReducerState,
      { payload }: { payload: IUpdateTodoStatePayload }
    ) => {
      // On trouve la todosList concerné
      const concernedTodosList: ITodoList | undefined = state.data.find(
        (todosList) => todosList.id === payload.todosListId
      );

      // Toutes les todosList sauf celle contenant le todo à mettre à jour
      const todosListsWithoutUpdatedOne: ITodoList[] = state.data.filter(
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

          state.data = updatedTodosLists;
        }
      }
    },
  },
});

export const todosListsReducer = todosLists.reducer;
export const todosListsActions = todosLists.actions;
