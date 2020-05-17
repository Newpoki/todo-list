import { IStoreState } from "../store";

export const getTodosListsRequestStatus = (state: IStoreState) => {
  return {
    get: state.todosLists.getRequestStatus,
    delete: state.todosLists.deleteRequestStatus,
    post: state.todosLists.postRequestStatus,
    put: state.todosLists.putRequestStatus,
  };
};
