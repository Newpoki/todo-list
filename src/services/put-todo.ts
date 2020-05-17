import axios, { AxiosRequestConfig } from "axios";

import { ITodosList, ITodo } from "store";
import { IServiceResponse } from "./interfaces";

interface IPutTodosInput {
  token: string;
  todosListId: ITodosList["id"];
  todoId: ITodo["id"];
  data: Partial<ITodo>;
}

export interface IPutTodoOutput {
  todosListId: ITodosList["id"];
  todoId: ITodo["id"];
  updatedTodoPart: Partial<ITodo>;
}

export const putTodo = async ({
  token,
  todosListId,
  todoId,
  data,
}: IPutTodosInput): Promise<IServiceResponse<IPutTodoOutput>> => {
  const config: AxiosRequestConfig = { headers: { Authorization: `Bearer ${token}` } };

  try {
    await axios.put<ITodo>(
      `http://localhost/todolists/${todosListId}/todos/${todoId}`,
      data,
      config
    );

    const response: IServiceResponse<IPutTodoOutput> = {
      data: { todoId, todosListId, updatedTodoPart: data },
    };

    return response;
  } catch (err) {
    const response: IServiceResponse<IPutTodoOutput> = { error: err.response };

    return response;
  }
};
