import { IAnyRequestStatus } from "services";

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

export interface ITodosListsReducerState {
  data: ITodosList[];
  getRequestStatus: IAnyRequestStatus;
  postRequestStatus: IAnyRequestStatus;
  putRequestStatus: IAnyRequestStatus;
  deleteRequestStatus: IAnyRequestStatus;
}
