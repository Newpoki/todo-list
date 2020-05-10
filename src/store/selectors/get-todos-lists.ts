import { IStoreState } from "../store";

export const getTodosLists = (state: IStoreState) => {
  return state.todosLists.data;
};
