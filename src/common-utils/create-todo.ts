import { ITodo } from "store";
import { createId } from "./create-id";

export const createTodo = (todoLabel: ITodo["label"]): ITodo => {
  const createdAt = new Date().toISOString();
  const actualTimestamp = Date.now();
  const todo: ITodo = {
    id: createId(actualTimestamp),
    label: todoLabel,
    state: "ON_GOING",
    createdAt: createdAt,
  };

  return todo;
};
