import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  IServiceResponse,
  getTodosLists,
  postTodosLists,
  deleteTodosLists,
  postTodo,
  deleteTodo,
  putTodoState,
} from "services";

import {
  ITodosListsReducerState,
  ITodosList,
  IAddTodoPayload,
  IUpdateTodoStatePayload,
  IDeleteTodoPayload,
  IFetchTodosListsPayload,
  IAddTodosListPayload,
  IDeleteTodosListPayload,
} from "./todos-lists.interfaces";

export const todosListsInitialState: ITodosListsReducerState = {
  data: [],
  deleteRequestStatus: "NOT_CALLED",
  getRequestStatus: "NOT_CALLED",
  postRequestStatus: "NOT_CALLED",
  putRequestStatus: "NOT_CALLED",
};

const fetchTodosLists = createAsyncThunk<IServiceResponse<ITodosList[]>, IFetchTodosListsPayload>(
  "todosLists/fetchTodosLists",
  async ({ userId }) => {
    const response = await getTodosLists(userId);
    return response;
  }
);

const addTodosList = createAsyncThunk<IServiceResponse<ITodosList>, IAddTodosListPayload>(
  "todosLists/addTodosList",
  async (payload: IAddTodosListPayload) => {
    const response = await postTodosLists(payload);
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

const addTodo = createAsyncThunk<IServiceResponse<ITodosList[]>, IAddTodoPayload>(
  "todosLists/addTodo",
  async (payload) => {
    const response = await postTodo(payload);
    return response;
  }
);

const deleteTodoRequest = createAsyncThunk<IServiceResponse<ITodosList[]>, IDeleteTodoPayload>(
  "todosList/deleteTodoRequest",
  async (payload) => {
    const response = await deleteTodo(payload);
    return response;
  }
);

const updateTodoState = createAsyncThunk<IServiceResponse<ITodosList[]>, IUpdateTodoStatePayload>(
  "todosList/updateTodoState",
  async (payload) => {
    const response = await putTodoState(payload);
    return response;
  }
);

export const todosLists = createSlice({
  name: "todosLists",
  initialState: todosListsInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodosLists.fulfilled, (state: ITodosListsReducerState, { payload }) => {
      if (payload.data) {
        state.data = payload.data;
        state.getRequestStatus = "SUCCESS";
      } else {
        state.getRequestStatus = "ERROR";
      }
    });
    builder.addCase(fetchTodosLists.pending, (state: ITodosListsReducerState) => {
      state.getRequestStatus = "PENDING";
    });
    builder.addCase(fetchTodosLists.rejected, (state: ITodosListsReducerState) => {
      state.getRequestStatus = "ERROR";
    });

    builder.addCase(addTodosList.fulfilled, (state: ITodosListsReducerState, { payload }) => {
      if (payload.data) {
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

    builder.addCase(deleteTodosList.fulfilled, (state: ITodosListsReducerState, { payload }) => {
      if (payload.data) {
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

    builder.addCase(addTodo.fulfilled, (state: ITodosListsReducerState, { payload }) => {
      if (payload.data) {
        state.data = payload.data;
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

    builder.addCase(deleteTodoRequest.fulfilled, (state: ITodosListsReducerState, { payload }) => {
      if (payload.data) {
        state.data = payload.data;
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
  fetchTodosLists,
  addTodosList,
  deleteTodosList,
  addTodo,
  deleteTodoRequest,
  updateTodoState,
};
