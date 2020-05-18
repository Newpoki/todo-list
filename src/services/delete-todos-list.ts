import axios, { AxiosRequestConfig } from "axios";

import { ITodosList } from "store";
import { IServiceResponse } from "./interfaces";

export interface IDeleteTodosListsInput {
  token: string;
  todosListId: ITodosList["id"];
}

export const deleteTodosLists = async ({
  token,
  todosListId,
}: IDeleteTodosListsInput): Promise<IServiceResponse<ITodosList["id"]>> => {
  const config: AxiosRequestConfig = { headers: { Authorization: `Bearer ${token}` } };

  try {
    await axios.delete<void>(`http://localhost/todolists/${todosListId}`, config);

    const response: IServiceResponse<ITodosList["id"]> = { data: todosListId };

    return response;
  } catch (err) {
    const response: IServiceResponse<ITodosList["id"]> = { error: err.response };

    return response;
  }
};
