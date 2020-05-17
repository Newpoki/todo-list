import { AxiosRequestConfig } from "axios";

import axios from "axios";
import { IUser } from "store";
import { IServiceResponse } from "./interfaces";

export const fetchUserWithToken = async (token: string): Promise<IServiceResponse<IUser>> => {
  const config: AxiosRequestConfig = {
    headers: { Authorization: `Bearer ${token}` },
  };

  try {
    const user = await axios.get<IUser>("http://localhost/users/me", config);

    const response: IServiceResponse<IUser> = { data: user.data };

    return response;
  } catch (err) {
    const response: IServiceResponse<IUser> = { error: err.response };

    return response;
  }
};