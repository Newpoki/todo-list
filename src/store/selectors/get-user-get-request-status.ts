import { IStoreState } from "store/store";

export const getUserGetRequestStatus = (state: IStoreState) => {
  return state.user.getRequestStatus;
};
