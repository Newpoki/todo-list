import { ITodosList, ITodo, ITodoState } from "store";
import { getTodosListState } from "./get-todos-list-state";

export const updateExistingTodoState = (
  todosLists: ITodosList[],
  todosListId: ITodosList["id"],
  todoId: ITodo["id"],
  newTodoState: ITodoState
) => {
  // On trouve la todosList concerné
  const concernedTodosList: ITodosList | undefined = todosLists.find(
    (todosList) => todosList.id === todosListId
  );

  // Toutes les todosList sauf celle contenant le todo à mettre à jour
  const todosListsWithoutUpdatedOne: ITodosList[] = todosLists.filter(
    (todosList) => todosList.id !== todosListId
  );

  if (concernedTodosList) {
    // Le todo à mettre à jour
    const concernedTodo = concernedTodosList.list.find((todo) => todo.id === todoId);

    if (concernedTodo) {
      const actualTimeStamp = Date.now();

      // Le todo mis à jour
      const updatedTodo: ITodo = {
        ...concernedTodo,
        state: newTodoState,
        updatedAt: actualTimeStamp,
      };

      // Liste de todos de la todoList mise à jour
      const updatedList = concernedTodosList.list.map((todo) =>
        todo.id === todoId ? updatedTodo : todo
      );

      // La todosList mise à jour
      const updatedTodosList: ITodosList = {
        ...concernedTodosList,
        list: updatedList,
        updatedAt: actualTimeStamp,
        state: getTodosListState(updatedList),
      };

      // Les todosLists à jour
      const updatedTodosLists: ITodosList[] = [updatedTodosList, ...todosListsWithoutUpdatedOne];

      return updatedTodosLists;
    }
  }
};
