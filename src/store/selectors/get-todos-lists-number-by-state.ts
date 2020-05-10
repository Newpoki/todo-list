import { IStoreState, ITodoState } from "store";

export const getTodosListsNumberByState = (todosListState: ITodoState) => (
  state: IStoreState
): number => {
  const filteredTodosListByState = state.todosLists.data.filter((todosList) => {
    return todosList.state === todosListState;
  });

  return filteredTodosListByState.length;
};
