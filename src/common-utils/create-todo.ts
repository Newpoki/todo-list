import { ITodo } from "store";
import { createId } from "./create-id";

export const createTodo = (todoLabel: ITodo["label"]): ITodo => {
  const actualTimestamp = Date.now();

  const todo: ITodo = {
    id: createId(actualTimestamp),
    label: todoLabel,
    state: "ON_GOING",
    createdAt: actualTimestamp,
  };

  return todo;
};
