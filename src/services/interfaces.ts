export interface IServiceResponse<IData> {
  data?: IData;
  error?: {
    code: number;
  };
}
