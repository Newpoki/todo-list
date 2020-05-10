import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTodosListState } from "common-utils";
import { getUserInformations, IServiceResponse } from "services";

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
  todosLists: Array<ITodoList>;
  getRequestStatus: IAnyRequestStatus;
  data: IUser;
}

export interface IUpdateTodoStatePayload {
  todosListId: ITodoList["id"];
  todoId: ITodo["id"];
  newTodoState: ITodoState;
}

export interface IAddTodoPayload {
  todosListId: ITodoList["id"];
  todo: ITodo;
}

export interface IDeleteTodoPayload {
  todosListId: ITodoList["id"];
  todoId: ITodo["id"];
}

export interface IUser {
  id: string;
  displayName: string;
  email: string;
  photoUrl: string;
}

export const userInitialState: IUserReducerState = {
  data: {
    displayName: "",
    email: "",
    id: "",
    photoUrl: "",
  },
  todosLists: [],
  getRequestStatus: "NOT_CALLED",
};

const connection = createAsyncThunk<IServiceResponse<IUser>>("cv/updateCvData", async () => {
  const response = await getUserInformations();
  console.log(response);
  return response;
});

export const user = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    addNewTodosList: (state: IUserReducerState, { payload }: { payload: ITodoList }) => {
      const newTodosLists = [payload, ...state.todosLists];
      state.todosLists = newTodosLists;
    },

    deleteTodosList: (state: IUserReducerState, { payload }: { payload: ITodoList["id"] }) => {
      const filteredTodosLists = state.todosLists.filter((todosList) => todosList.id !== payload);
      state.todosLists = filteredTodosLists;
    },

    addTodo: (state: IUserReducerState, { payload }: { payload: IAddTodoPayload }) => {
      // On trouve la todosList concerné
      const concernedTodosList: ITodoList | undefined = state.todosLists.find(
        (todosList) => todosList.id === payload.todosListId
      );

      // Toutes les todosList sauf celle contenant le todo à mettre à jour
      const todosListsWithoutUpdatedOne: ITodoList[] = state.todosLists.filter(
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

        state.todosLists = updatedTodosLists;
      }
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
  extraReducers: (builder) => {
    builder.addCase(connection.fulfilled, (state: IUserReducerState, { payload }) => {
      if (payload.data) {
        state.data = payload.data;
        state.getRequestStatus = "SUCCESS";
      } else {
        state.getRequestStatus = "ERROR";
      }
    });
    builder.addCase(connection.rejected, (state) => {
      state.getRequestStatus = "ERROR";
    });
    builder.addCase(connection.pending, (state) => {
      state.getRequestStatus = "PENDING";
    });
  },
});

export const userReducer = user.reducer;
export const userActions = user.actions;
export const userThunks = {
  connection,
};
