import { ITodo } from "store";

export const createTodo = (todoLabel: ITodo["label"]): ITodo => {
  const actualTimestamp = Date.now();

  const todo: ITodo = {
    id: `${actualTimestamp}-${todoLabel}`,
    label: todoLabel,
    state: "ON_GOING",
    createdAt: actualTimestamp,
  };

  return todo;
};
