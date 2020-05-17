import { IServiceResponse, ISuccessServiceResponse } from "../interfaces";

export function isSuccessResponse<TData>(
  response: IServiceResponse<TData>
): response is ISuccessServiceResponse<TData> {
  return !!(response as ISuccessServiceResponse<TData>).data;
}
