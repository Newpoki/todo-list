import { ITodoList } from "store";

export const createTodosList = (title: ITodoList["title"], list: ITodoList["list"]) => {
  const actualTimestamp = Date.now();

  const todosList: ITodoList = {
    createdAt: actualTimestamp,
    id: `${actualTimestamp}-${Math.random()}`,
    isFavorite: false,
    list,
    title,
    state: "ON_GOING",
  };

  return todosList;
};
