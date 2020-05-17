import { IStoreState } from "../store";

export const getTodosListById = (todosListId: number) => (state: IStoreState) => {
  const todosList = state.todosLists.data.find((todosList) => {
    return todosList.id === todosListId;
  });

  return todosList;
};
