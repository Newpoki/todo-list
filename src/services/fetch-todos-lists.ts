import axios, { AxiosRequestConfig } from "axios";

import { ITodosList } from "store";
import { IServiceResponse } from "./interfaces";

export interface IFetchTodosListsInput {
  token: string;
}

export const fetchTodosLists = async ({
  token,
}: IFetchTodosListsInput): Promise<IServiceResponse<ITodosList[]>> => {
  const config: AxiosRequestConfig = { headers: { Authorization: `Bearer ${token}` } };

  try {
    const todosLists = await axios.get<ITodosList[]>("http://localhost/todolists/", config);

    const response: IServiceResponse<ITodosList[]> = { data: todosLists.data };

    return Promise.resolve(response);
  } catch (err) {
    const response: IServiceResponse<ITodosList[]> = { error: err.response.data };

    return Promise.reject(response);
  }
};
