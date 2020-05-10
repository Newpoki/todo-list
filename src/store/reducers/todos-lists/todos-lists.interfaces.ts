import { IAnyRequestStatus } from "services";

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

export interface ITodosListsReducerState {
  userId: string;
  data: ITodoList[];
  getRequestStatus: IAnyRequestStatus;
  postRequestStatus: IAnyRequestStatus;
  putRequestStatus: IAnyRequestStatus;
}
