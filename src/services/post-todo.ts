import firebase from "firebase/app";

import { ITodosList, IAddTodoPayload } from "store";
import { IServiceResponse } from "./interfaces";
import { addTodoToExistingTodosList } from "common-utils";

export const postTodo = async ({ userId, todosListId, todo }: IAddTodoPayload) => {
  try {
    const collection = firebase.firestore().collection("/todosLists");
    const existingData = (await collection.doc(userId).get()).data()?.data as ITodosList[];

    const updatedTodosLists = addTodoToExistingTodosList(existingData, todosListId, todo);

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
