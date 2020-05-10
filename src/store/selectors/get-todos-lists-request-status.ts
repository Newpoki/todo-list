import { IStoreState } from "store/store";

export const getTodosListsRequestStatus = (state: IStoreState) => {
  return state.todosLists.getRequestStatus;
};
