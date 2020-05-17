import { IAnyRequestStatus } from "services";
import { IUser } from "../user/user.interfaces";

export type ITodoState = "DONE" | "ON_GOING";

export interface ITodo {
  id: number;
  label: string;
  state: ITodoState;
  createdAt: string;
  updatedAt?: string;
}

/** Interface d'une todoList brut, ne contenant que le titre et la liste des todo */
export interface IRawTodoList {
  title: string;
  list: string[];
}

export interface ITodosList {
  id: number;
  title: string;
  createdAt: string;
  updatedAt?: string;
  isFavorite: boolean;
  list: ITodo[];
  state: ITodoState;
}

export interface IFetchTodosListsPayload {
  token: string;
}

export interface IAddTodosListPayload {
  token: string;
  data: IRawTodoList;
}

export interface IDeleteTodosListPayload {
  todosListId: ITodosList["id"];
  token: string;
}

export interface IUpdateTodoStatePayload {
  userId: IUser["id"];
  todosListId: ITodosList["id"];
  todoId: ITodo["id"];
  newTodoState: ITodoState;
}

export interface IAddTodoPayload {
  todosListId: ITodosList["id"];
  data: { label: string };
  token: string;
}

export interface IDeleteTodoPayload {
  token: string;
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
