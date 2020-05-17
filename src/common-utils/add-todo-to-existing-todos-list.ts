import { ITodosList, ITodo } from "store";

export const addTodoToExistingTodosList = (
  todosListsData: ITodosList[],
  todosListId: ITodosList["id"],
  todo: ITodo
) => {
  const updatedTodosLists = todosListsData.map((todosList) => {
    if (todosList.id === todosListId) {
      return { ...todosList, list: [...todosList.list, todo] };
    } else {
      return todosList;
    }
  });

  return updatedTodosLists;
};
