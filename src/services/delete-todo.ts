import axios, { AxiosRequestConfig } from "axios";

import { ITodosList, ITodo } from "store";
import { IServiceResponse } from "./interfaces";

interface IDeleteTodosInput {
  token: string;
  todosListId: ITodosList["id"];
  todoId: ITodo["id"];
}

export interface IDeleteTodoOutput {
  todosListId: ITodosList["id"];
  todoId: ITodo["id"];
}

export const deleteTodo = async ({
  token,
  todosListId,
  todoId,
}: IDeleteTodosInput): Promise<IServiceResponse<IDeleteTodoOutput>> => {
  const config: AxiosRequestConfig = { headers: { Authorization: `Bearer ${token}` } };

  try {
    await axios.delete<IDeleteTodoOutput>(
      `http://localhost/todolists/${todosListId}/todos/${todoId}`,
      config
    );

    const response: IServiceResponse<IDeleteTodoOutput> = { data: { todoId, todosListId } };

    return response;
  } catch (err) {
    const response: IServiceResponse<IDeleteTodoOutput> = { error: err.response };

    return response;
  }
};
