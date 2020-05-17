import { ITodosList } from "store";
import { createId } from "./create-id";

export const createTodosList = (title: ITodosList["title"], list: ITodosList["list"]) => {
  const createdAt = new Date().toISOString();
  const actualTimestamp = Date.now();

  const todosList: ITodosList = {
    createdAt,
    id: createId(actualTimestamp),
    isFavorite: false,
    list,
    title,
    state: "ON_GOING",
  };

  return todosList;
};
