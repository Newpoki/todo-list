import { IStoreState } from "store/store";

export const getTodosListById = (todosListId: string) => (state: IStoreState) => {
  const todosList = state.todosLists.data.find((todosList) => todosList.id === todosListId);

  return todosList;
};
