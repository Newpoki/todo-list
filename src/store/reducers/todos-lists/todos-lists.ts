import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  IOldServiceResponse,
  postTodosList,
  deleteTodosLists,
  postTodo,
  deleteTodo,
  putTodoState,
  fetchTodosLists,
  IServiceResponse,
  isSuccessResponse,
  IPostTodoOutput,
  IDeleteTodoOutput,
} from "services";

import {
  ITodosListsReducerState,
  ITodosList,
  IAddTodoPayload,
  IUpdateTodoStatePayload,
  IDeleteTodoPayload,
  IFetchTodosListsPayload as IGetTodosListsPayload,
  IAddTodosListPayload,
  IDeleteTodosListPayload,
} from "./todos-lists.interfaces";
import { userActions } from "../user/user";

export const todosListsInitialState: ITodosListsReducerState = {
  data: [],
  deleteRequestStatus: "NOT_CALLED",
  getRequestStatus: "NOT_CALLED",
  postRequestStatus: "NOT_CALLED",
  putRequestStatus: "NOT_CALLED",
};

const getTodosLists = createAsyncThunk<IServiceResponse<ITodosList[]>, IGetTodosListsPayload>(
  "todosLists/fetchTodosLists",
  async (payload) => {
    const response = await fetchTodosLists(payload);
    return response;
  }
);

const addTodosList = createAsyncThunk<IServiceResponse<ITodosList>, IAddTodosListPayload>(
  "todosLists/addTodosList",
  async (payload: IAddTodosListPayload) => {
    const response = await postTodosList(payload);

    return response;
  }
);

const deleteTodosList = createAsyncThunk<
  IServiceResponse<ITodosList["id"]>,
  IDeleteTodosListPayload
>("todosLists/deleteTodosList", async (payload) => {
  const response = await deleteTodosLists(payload);
  return response;
});

const addTodo = createAsyncThunk<IServiceResponse<IPostTodoOutput>, IAddTodoPayload>(
  "todosLists/addTodo",
  async (payload) => {
    const response = await postTodo(payload);
    return { ...response, todosListId: payload.todosListId };
  }
);

const deleteTodoRequest = createAsyncThunk<IServiceResponse<IDeleteTodoOutput>, IDeleteTodoPayload>(
  "todosList/deleteTodoRequest",
  async (payload) => {
    const response = await deleteTodo(payload);
    return response;
  }
);

const updateTodoState = createAsyncThunk<
  IOldServiceResponse<ITodosList[]>,
  IUpdateTodoStatePayload
>("todosList/updateTodoState", async (payload) => {
  const response = await putTodoState(payload);
  return response;
});

export const todosLists = createSlice({
  name: "todosLists",
  initialState: todosListsInitialState,
  reducers: {},
  extraReducers: (builder) => {
    // DECONNEXION UTILISATEUR
    builder.addCase(userActions.disconnect.type, () => {
      return todosListsInitialState;
    });

    // GET TODOSLISTS
    builder.addCase(getTodosLists.fulfilled, (state: ITodosListsReducerState, { payload }) => {
      if (isSuccessResponse(payload)) {
        state.data = payload.data;
        state.getRequestStatus = "SUCCESS";
      }
    });
    builder.addCase(getTodosLists.pending, (state: ITodosListsReducerState) => {
      state.getRequestStatus = "PENDING";
    });
    builder.addCase(getTodosLists.rejected, (state: ITodosListsReducerState) => {
      state.getRequestStatus = "ERROR";
    });

    // ADD TODOSLIST
    builder.addCase(addTodosList.fulfilled, (state: ITodosListsReducerState, { payload }) => {
      if (isSuccessResponse(payload)) {
        const newTodosLists = [payload.data, ...state.data];

        state.data = newTodosLists;
        state.getRequestStatus = "SUCCESS";
      } else {
        state.getRequestStatus = "ERROR";
      }
    });
    builder.addCase(addTodosList.pending, (state: ITodosListsReducerState) => {
      state.getRequestStatus = "PENDING";
    });
    builder.addCase(addTodosList.rejected, (state: ITodosListsReducerState) => {
      state.getRequestStatus = "ERROR";
    });

    // DELETE TODOSLIST
    builder.addCase(deleteTodosList.fulfilled, (state: ITodosListsReducerState, { payload }) => {
      if (isSuccessResponse(payload)) {
        const filteredTodosLists = state.data.filter((todosList) => todosList.id !== payload.data);

        state.data = filteredTodosLists;
        state.deleteRequestStatus = "SUCCESS";
      } else {
        state.deleteRequestStatus = "ERROR";
      }
    });
    builder.addCase(deleteTodosList.pending, (state: ITodosListsReducerState) => {
      state.deleteRequestStatus = "PENDING";
    });
    builder.addCase(deleteTodosList.rejected, (state: ITodosListsReducerState) => {
      state.deleteRequestStatus = "ERROR";
    });

    // ADD TODO
    builder.addCase(addTodo.fulfilled, (state: ITodosListsReducerState, { payload }) => {
      if (isSuccessResponse(payload)) {
        const updatedTodosLists = state.data.map((todosList) => {
          if (todosList.id === payload.data.todosListId) {
            return { ...todosList, list: [...todosList.list, payload.data.todo] };
          } else {
            return todosList;
          }
        });

        state.data = updatedTodosLists;
        state.postRequestStatus = "SUCCESS";
      } else {
        state.postRequestStatus = "ERROR";
      }
    });
    builder.addCase(addTodo.pending, (state: ITodosListsReducerState) => {
      state.postRequestStatus = "PENDING";
    });
    builder.addCase(addTodo.rejected, (state: ITodosListsReducerState) => {
      state.postRequestStatus = "ERROR";
    });

    // DELETE TODO
    builder.addCase(deleteTodoRequest.fulfilled, (state: ITodosListsReducerState, { payload }) => {
      if (isSuccessResponse(payload)) {
        const filteredTodosList = state.data.map((todosList) => {
          if (todosList.id === payload.data.todosListId) {
            return {
              ...todosList,
              list: todosList.list.filter((todo) => todo.id !== payload.data.todoId),
            };
          } else {
            return todosList;
          }
        });

        state.data = filteredTodosList;
        state.deleteRequestStatus = "SUCCESS";
      } else {
        state.deleteRequestStatus = "ERROR";
      }
    });
    builder.addCase(deleteTodoRequest.pending, (state: ITodosListsReducerState) => {
      state.deleteRequestStatus = "PENDING";
    });
    builder.addCase(deleteTodoRequest.rejected, (state: ITodosListsReducerState) => {
      state.deleteRequestStatus = "ERROR";
    });

    builder.addCase(updateTodoState.fulfilled, (state: ITodosListsReducerState, { payload }) => {
      if (payload.data) {
        state.data = payload.data;
        state.putRequestStatus = "SUCCESS";
      } else {
        state.putRequestStatus = "ERROR";
      }
    });
    builder.addCase(updateTodoState.pending, (state: ITodosListsReducerState) => {
      state.putRequestStatus = "PENDING";
    });
    builder.addCase(updateTodoState.rejected, (state: ITodosListsReducerState) => {
      state.putRequestStatus = "ERROR";
    });
  },
});

export const todosListsReducer = todosLists.reducer;
export const todosListsActions = todosLists.actions;
export const todosListsThunks = {
  getTodosLists,
  addTodosList,
  deleteTodosList,
  addTodo,
  deleteTodoRequest,
  updateTodoState,
};
