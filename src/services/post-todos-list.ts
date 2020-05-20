import axios, { AxiosRequestConfig } from "axios";

import { ITodosList, IRawTodoList } from "store";
import { IServiceResponse } from "./interfaces";

export interface IPostTodosListInput {
  token: string;
  data: IRawTodoList;
}

export const postTodosList = async ({
  token,
  data,
}: IPostTodosListInput): Promise<IServiceResponse<ITodosList>> => {
  const config: AxiosRequestConfig = {
    headers: { Authorization: `Bearer ${token}` },
  };

  try {
    const addedTodosList = await axios.post<ITodosList>(
      "http://localhost/todolists/",
      data,
      config
    );

    const response: IServiceResponse<ITodosList> = { data: addedTodosList.data };
    return response;
  } catch (err) {
    const response: IServiceResponse<ITodosList> = { error: err.response.data };
    return response;
  }
};
