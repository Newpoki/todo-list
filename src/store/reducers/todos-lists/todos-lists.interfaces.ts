import { IAnyRequestStatus } from "services";

export type ITodoState = "DONE" | "ON_GOING";

export interface ITodo {
  id: string;
  label: string;
  state: ITodoState;
  createdAt: number;
  updatedAt?: number;
}

export interface ITodosList {
  id: string;
  title: string;
  createdAt: number;
  updatedAt?: number;
  isFavorite: boolean;
  list: ITodo[];
  state: ITodoState;
}

export interface IUpdateTodoStatePayload {
  todosListId: ITodosList["id"];
  todoId: ITodo["id"];
  newTodoState: ITodoState;
}

export interface IAddTodoPayload {
  todosListId: ITodosList["id"];
  todo: ITodo;
}

export interface IDeleteTodoPayload {
  todosListId: ITodosList["id"];
  todoId: ITodo["id"];
}

export interface ITodosListsReducerState {
  userId: string;
  data: ITodosList[];
  getRequestStatus: IAnyRequestStatus;
  postRequestStatus: IAnyRequestStatus;
  putRequestStatus: IAnyRequestStatus;
}
