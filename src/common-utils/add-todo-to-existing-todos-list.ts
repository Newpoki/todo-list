import { ITodosList, ITodo } from "store";
import { getTodosListState } from "./get-todos-list-state";

export const addTodoToExistingTodosList = (
  todosListsData: ITodosList[],
  todosListId: ITodosList["id"],
  todo: ITodo
) => {
  // On trouve la todosList concerné
  const concernedTodosList: ITodosList | undefined = todosListsData.find(
    (todosList) => todosList.id === todosListId
  );

  // Toutes les todosList sauf celle contenant le todo à mettre à jour
  const todosListsWithoutUpdatedOne: ITodosList[] = todosListsData.filter(
    (todosList) => todosList.id !== todosListId
  );

  if (concernedTodosList) {
    // On ajoute la tâche à la fin de la liste
    const updatedList: ITodo[] = [...concernedTodosList.list, todo];

    // La todosList mise à jour
    const updatedTodosList: ITodosList = {
      ...concernedTodosList,
      list: updatedList,
      updatedAt: Date.now(),
      state: getTodosListState(updatedList),
    };

    // Les todosLists à jour
    const updatedTodosLists: ITodosList[] = [updatedTodosList, ...todosListsWithoutUpdatedOne];

    return updatedTodosLists;
  }
};
