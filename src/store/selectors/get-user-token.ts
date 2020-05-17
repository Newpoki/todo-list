import { IStoreState } from "../store";

export const getUserToken = (state: IStoreState) => {
  return state.user.token;
};
