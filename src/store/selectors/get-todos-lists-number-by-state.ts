import { IStoreState } from "../store";
import { ITodoState } from "../reducers/todos-lists/todos-lists.interfaces";

export const getTodosListsNumberByState = (todosListState: ITodoState) => (
  state: IStoreState
): number => {
  const filteredTodosListByState = state.todosLists.data.filter((todosList) => {
    return todosList.state === todosListState;
  });

  return filteredTodosListByState.length;
};
