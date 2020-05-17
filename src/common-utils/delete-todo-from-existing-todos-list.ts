import { ITodosList, ITodo } from "store";
import { getTodosListState } from "./get-todos-list-state";

export const deleteTodoFromExistingTodosList = (
  todosListsData: ITodosList[],
  todosListId: ITodosList["id"],
  todoId: ITodo["id"]
) => {
  const todosListsWithoutTodo = todosListsData.map((todosList) => {
    if (todosList.id === todosListId) {
      const filteredTodos = todosList.list.filter((todo) => todo.id !== todoId);

      return {
        ...todosList,
        state: getTodosListState(filteredTodos),
        list: filteredTodos,
      };
    } else {
      return todosList;
    }
  });

  return todosListsWithoutTodo;
};
