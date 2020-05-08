import { IStoreState, ITodoState } from "store";

export const getTodosListsNumberByState = (todosListState: ITodoState) => (
  state: IStoreState
): number => {
  const filteredTodosListByState = state.user.todosLists.filter((todosList) => {
    return todosList.state === todosListState;
  });

  return filteredTodosListByState.length;
};
