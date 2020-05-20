import axios, { AxiosRequestConfig } from "axios";

import { ITodo, ITodosList } from "store";
import { IServiceResponse } from "./interfaces";

export interface IPostTodoInput {
  token: string;
  data: { label: string };
  todosListId: ITodosList["id"];
}

export interface IPostTodoOutput {
  todosListId: ITodosList["id"];
  todo: ITodo;
}

export const postTodo = async ({
  token,
  todosListId,
  data,
}: IPostTodoInput): Promise<IServiceResponse<IPostTodoOutput>> => {
  const config: AxiosRequestConfig = { headers: { Authorization: `Bearer ${token}` } };

  try {
    const addedTodo = await axios.post<ITodo>(
      `http://localhost/todolists/${todosListId}/todos`,
      data,
      config
    );

    const response: IServiceResponse<IPostTodoOutput> = {
      data: { todo: addedTodo.data, todosListId },
    };

    return response;
  } catch (err) {
    const response: IServiceResponse<IPostTodoOutput> = { error: err.response.data };
    return response;
  }
};
