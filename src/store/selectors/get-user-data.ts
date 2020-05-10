import { IUser } from "../reducers";
import { IStoreState } from "../store";

export const getUserData = (state: IStoreState): IUser => {
  return state.user.data;
};
