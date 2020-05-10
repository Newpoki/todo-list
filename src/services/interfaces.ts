export interface IServiceResponse<IData> {
  data?: IData;
  error?: {
    code: number;
  };
}

export type IAnyRequestStatus = "NOT_CALLED" | "PENDING" | "SUCCESS" | "ERROR";
