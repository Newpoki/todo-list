import { ITodosList, ITodo } from "store";
import { getTodosListState } from "./get-todos-list-state";

export const updateExistingTodo = (
  todosListsData: ITodosList[],
  todosListId: ITodosList["id"],
  todoId: ITodo["id"],
  updatedTodoPart: Partial<ITodo>
) => {
  const updatedTodosLists = todosListsData.map((todosList) => {
    if (todosList.id === todosListId) {
      const updatedTodos = todosList.list.map((todo) => {
        return todo.id === todoId ? { ...todo, ...updatedTodoPart } : todo;
      });

      return {
        ...todosList,
        state: getTodosListState(updatedTodos),
        list: updatedTodos,
      };
    } else {
      return todosList;
    }
  });

  return updatedTodosLists;
};
