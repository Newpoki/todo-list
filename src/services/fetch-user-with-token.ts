import { AxiosRequestConfig } from "axios";

import axios from "axios";
import { IUser } from "store";
import { IServiceResponse } from "./interfaces";

export interface IFetchUserWithTokenInput {
  token: string;
}

export const fetchUserWithToken = async ({
  token,
}: IFetchUserWithTokenInput): Promise<IServiceResponse<IUser>> => {
  const config: AxiosRequestConfig = { headers: { Authorization: `Bearer ${token}` } };

  try {
    const user = await axios.get<IUser>("http://localhost/users/me", config);

    const response = Promise.resolve({ data: user.data });
    return response;
  } catch (err) {
    const response = Promise.reject({ error: err.response.data });
    return response;
  }
};
