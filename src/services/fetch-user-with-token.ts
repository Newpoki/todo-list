import { AxiosRequestConfig } from "axios";

import axios from "axios";
import { IUser } from "store";
import { IServiceResponse } from "./interfaces";

export interface IFetchUserWithTokenInput {
  token: string;
}

// export const fetchUserWithToken = async ({ token }: IFetchUserWithTokenInput) => {
//   const config: AxiosRequestConfig = { headers: { Authorization: `Bearer ${token}` } };

//   return axios.get<IUser>("http://localhost/users/me", config);
// };

export const fetchUserWithToken = async ({
  token,
}: IFetchUserWithTokenInput): Promise<IServiceResponse<IUser>> => {
  const config: AxiosRequestConfig = { headers: { Authorization: `Bearer ${token}` } };

  try {
    const user = await axios.get<IUser>("http://localhost/users/me", config);

    const response: IServiceResponse<IUser> = { data: user.data };

    return Promise.resolve(response);
  } catch (err) {
    const response: IServiceResponse<IUser> = { error: err.response.data };

    return Promise.reject(response);
  }
};
