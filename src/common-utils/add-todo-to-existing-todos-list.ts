import { ITodosList, ITodo, ITodosListsReducerState, ITodoState } from "store";

export const addTodoToExistingTodosList = (
  todosListsData: ITodosList[],
  todosListId: ITodosList["id"],
  todo: ITodo
): ITodosListsReducerState["data"] => {
  const todosListState: ITodoState = "ON_GOING";

  const updatedTodosLists = todosListsData.map((todosList) => {
    if (todosList.id === todosListId) {
      return { ...todosList, state: todosListState, list: [...todosList.list, todo] };
    } else {
      return todosList;
    }
  });

  return updatedTodosLists;
};
