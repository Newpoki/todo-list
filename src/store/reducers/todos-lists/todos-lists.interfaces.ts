import { IAnyRequestStatus } from "services";
import { IUser } from "../user/user.interfaces";

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

export interface IFetchTodosListsPayload {
  token: string;
}

export interface IAddTodosListPayload {
  userId: IUser["id"];
  todosList: ITodosList;
}

export interface IDeleteTodosListPayload {
  userId: IUser["id"];
  todosListId: ITodosList["id"];
}

export interface IUpdateTodoStatePayload {
  userId: IUser["id"];
  todosListId: ITodosList["id"];
  todoId: ITodo["id"];
  newTodoState: ITodoState;
}

export interface IAddTodoPayload {
  userId: IUser["id"];
  todosListId: ITodosList["id"];
  todo: ITodo;
}

export interface IDeleteTodoPayload {
  userId: IUser["id"];
  todosListId: ITodosList["id"];
  todoId: ITodo["id"];
}

export interface ITodosListsReducerState {
  data: ITodosList[];
  getRequestStatus: IAnyRequestStatus;
  postRequestStatus: IAnyRequestStatus;
  putRequestStatus: IAnyRequestStatus;
  deleteRequestStatus: IAnyRequestStatus;
}
