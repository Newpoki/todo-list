import { ITodoList, ITodoState } from "store";

export const getTodosListState = (list: ITodoList["list"]): ITodoState => {
  const areAllTodosDone = list.every((todo) => todo.state === "DONE");

  return areAllTodosDone ? "DONE" : "ON_GOING";
};
