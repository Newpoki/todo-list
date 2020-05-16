import { AxiosError } from "axios";

export interface IOldServiceResponse<IData> {
  data?: IData;
  error?: {
    code: number;
  };
}

export interface ISuccessServiceResponse<IData> {
  data: IData;
}

export interface IErrorServiceResponse {
  error: AxiosError;
}

export type IServiceResponse<IData> = IErrorServiceResponse | ISuccessServiceResponse<IData>;

export type IAnyRequestStatus = "NOT_CALLED" | "PENDING" | "SUCCESS" | "ERROR";
