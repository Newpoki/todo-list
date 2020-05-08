import { IStoreState } from "store/store";

export const getTodosListById = (todosListId: string) => (state: IStoreState) => {
  const todosList = state.user.todosLists.find((todosList) => todosList.id === todosListId);

  return todosList;
};
