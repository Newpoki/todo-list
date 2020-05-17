import { IStoreState } from "../store";

export const getUserGetRequestStatus = (state: IStoreState) => {
  return state.user.getRequestStatus;
};
