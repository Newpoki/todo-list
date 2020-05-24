import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  postTodosList,
  deleteTodosLists,
  postTodo,
  deleteTodo,
  putTodo,
  fetchTodosLists,
  IServiceResponse,
  isSuccessResponse,
  IPostTodoOutput,
  IDeleteTodoOutput,
  IPutTodoOutput,
  IFetchTodosListsInput,
  IPostTodosListInput,
  IDeleteTodosListsInput,
  IPostTodoInput,
  IPutTodosInput,
  IDeleteTodosInput,
} from "services";

import { ITodosListsReducerState, ITodosList } from "./todos-lists.interfaces";
import {
  addTodoToExistingTodosList,
  deleteTodoFromExistingTodosList,
  updateExistingTodo,
} from "common-utils";
import { authActions } from "../auth/auth";

export const todosListsInitialState: ITodosListsReducerState = {
  data: [],
  deleteRequestStatus: "NOT_CALLED",
  getRequestStatus: "NOT_CALLED",
  postRequestStatus: "NOT_CALLED",
  putRequestStatus: "NOT_CALLED",
};

const getTodosLists = createAsyncThunk<IServiceResponse<ITodosList[]>, IFetchTodosListsInput>(
  "todosLists/fetchTodosLists",
  async (payload) => {
    const response = await fetchTodosLists(payload);
    return response;
  }
);

const addTodosList = createAsyncThunk<IServiceResponse<ITodosList>, IPostTodosListInput>(
  "todosLists/addTodosList",
  async (payload: IPostTodosListInput) => {
    const response = await postTodosList(payload);

    return response;
  }
);

const deleteTodosList = createAsyncThunk<
  IServiceResponse<ITodosList["id"]>,
  IDeleteTodosListsInput
>("todosLists/deleteTodosList", async (payload) => {
  const response = await deleteTodosLists(payload);
  return response;
});

const addTodo = createAsyncThunk<IServiceResponse<IPostTodoOutput>, IPostTodoInput>(
  "todosLists/addTodo",
  async (payload) => {
    const response = await postTodo(payload);
    return { ...response, todosListId: payload.todosListId };
  }
);

const deleteTodoRequest = createAsyncThunk<IServiceResponse<IDeleteTodoOutput>, IDeleteTodosInput>(
  "todosList/deleteTodoRequest",
  async (payload) => {
    const response = await deleteTodo(payload);
    return response;
  }
);

const updateTodo = createAsyncThunk<IServiceResponse<IPutTodoOutput>, IPutTodosInput>(
  "todosList/updateTodo",
  async (payload) => {
    const response = await putTodo(payload);
    return response;
  }
);

export const todosLists = createSlice({
  name: "todosLists",
  initialState: todosListsInitialState,
  reducers: {},
  extraReducers: (builder) => {
    // DECONNEXION UTILISATEUR
    builder.addCase(authActions.disconnect.type, () => {
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
        const { todosListId, todo } = payload.data;

        state.data = addTodoToExistingTodosList(state.data, todosListId, todo);
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
        const { todosListId, todoId } = payload.data;

        state.data = deleteTodoFromExistingTodosList(state.data, todosListId, todoId);
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

    // UPDATE TODO
    builder.addCase(updateTodo.fulfilled, (state: ITodosListsReducerState, { payload }) => {
      if (isSuccessResponse(payload)) {
        const { todosListId, todoId, updatedTodoPart } = payload.data;

        state.data = updateExistingTodo(state.data, todosListId, todoId, updatedTodoPart);
        state.putRequestStatus = "SUCCESS";
      } else {
        state.putRequestStatus = "ERROR";
      }
    });
    builder.addCase(updateTodo.pending, (state: ITodosListsReducerState) => {
      state.putRequestStatus = "PENDING";
    });
    builder.addCase(updateTodo.rejected, (state: ITodosListsReducerState) => {
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
  updateTodo,
};
