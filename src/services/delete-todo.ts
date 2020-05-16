import firebase from "firebase/app";

import { ITodosList, IDeleteTodoPayload } from "store";
import { IOldServiceResponse } from "./interfaces";
import { deleteTodoFromExistingTodosList } from "common-utils";

export const deleteTodo = async ({ userId, todosListId, todoId }: IDeleteTodoPayload) => {
  try {
    const collection = firebase.firestore().collection("/todosLists");
    const existingData = (await collection.doc((userId as any) as string).get()).data()
      ?.data as ITodosList[];

    const updatedTodosLists = deleteTodoFromExistingTodosList(existingData, todosListId, todoId);

    await collection.doc((userId as any) as string).set({ data: updatedTodosLists });

    const response: IOldServiceResponse<ITodosList[]> = { data: updatedTodosLists };

    return response;
  } catch (err) {
    const response: IOldServiceResponse<ITodosList[]> = {
      error: {
        code: 500,
      },
    };
    return response;
  }
};
