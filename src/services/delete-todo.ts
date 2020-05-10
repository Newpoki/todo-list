import firebase from "firebase/app";

import { ITodosList, IDeleteTodoPayload } from "store";
import { IServiceResponse } from "./interfaces";
import { deleteTodoFromExistingTodosList } from "common-utils";

export const deleteTodo = async ({ userId, todosListId, todoId }: IDeleteTodoPayload) => {
  try {
    const collection = firebase.firestore().collection("/todosLists");
    const existingData = (await collection.doc(userId).get()).data()?.data as ITodosList[];

    const updatedTodosLists = deleteTodoFromExistingTodosList(existingData, todosListId, todoId);

    await collection.doc(userId).set({ data: updatedTodosLists });

    const response: IServiceResponse<ITodosList[]> = { data: updatedTodosLists };

    return response;
  } catch (err) {
    const response: IServiceResponse<ITodosList[]> = {
      error: {
        code: 500,
      },
    };
    return response;
  }
};
