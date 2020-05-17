import { IAnyRequestStatus } from "services";
import { IUser } from "../user/user.interfaces";

export type ITodoState = "DONE" | "ON_GOING";

export interface ITodo {
  id: string;
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
  id: string;
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
  data: {
    title: string;
    list: string[];
  };
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
