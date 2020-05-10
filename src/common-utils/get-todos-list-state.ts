import { ITodosList, ITodoState } from "store";

/**
 * Fonction qui retourne true si la liste en argument est vide où si tous les todos ont le statut "DONE"
 * @param list
 */
export const getTodosListState = (list: ITodosList["list"]): ITodoState => {
  const areAllTodosDone = list.every((todo) => todo.state === "DONE");

  return areAllTodosDone ? "DONE" : "ON_GOING";
};
