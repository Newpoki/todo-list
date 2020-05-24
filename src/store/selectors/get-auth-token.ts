import { IStoreState } from "../store";

export const getAuthToken = (state: IStoreState) => {
  return state.auth.token;
};
