import { ITodosList, ITodo } from "store";

export const updateExistingTodo = (
  todosListsData: ITodosList[],
  todosListId: ITodosList["id"],
  todoId: ITodo["id"],
  updatedTodoPart: Partial<ITodo>
) => {
  const updatedTodosLists = todosListsData.map((todosList) => {
    if (todosList.id === todosListId) {
      return {
        ...todosList,
        list: todosList.list.map((todo) => {
          return todo.id === todoId ? { ...todo, ...updatedTodoPart } : todo;
        }),
      };
    } else {
      return todosList;
    }
  });

  return updatedTodosLists;
};
