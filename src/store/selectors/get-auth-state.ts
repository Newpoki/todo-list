import { IStoreState } from "../store";

export const getAuthState = (state: IStoreState) => {
  return state.auth.state;
};
