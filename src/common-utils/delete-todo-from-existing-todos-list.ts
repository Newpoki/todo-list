import { ITodosList, ITodo } from "store";

export const deleteTodoFromExistingTodosList = (
  todosListsData: ITodosList[],
  todosListId: ITodosList["id"],
  todoId: ITodo["id"]
) => {
  const todosListsWithoutTodo = todosListsData.map((todosList) => {
    if (todosList.id === todosListId) {
      return {
        ...todosList,
        list: todosList.list.filter((todo) => todo.id !== todoId),
      };
    } else {
      return todosList;
    }
  });

  return todosListsWithoutTodo;
};
