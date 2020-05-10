import { ITodosList } from "store";

export const createTodosList = (title: ITodosList["title"], list: ITodosList["list"]) => {
  const actualTimestamp = Date.now();

  const todosList: ITodosList = {
    createdAt: actualTimestamp,
    id: `${actualTimestamp}-${Math.random()}`,
    isFavorite: false,
    list,
    title,
    state: "ON_GOING",
  };

  return todosList;
};
