import { IStoreState } from "../store";

export const getUserTodosLists = (state: IStoreState) => {
  return state.user.todosLists;
};
