import firebase from "firebase/app";

import { ITodosList, IUpdateTodoStatePayload } from "store";
import { IServiceResponse } from "./interfaces";
import { updateExistingTodoState } from "common-utils";

export const putTodoState = async ({
  userId,
  todosListId,
  todoId,
  newTodoState,
}: IUpdateTodoStatePayload) => {
  try {
    const collection = firebase.firestore().collection("/todosLists");
    const existingData = (await collection.doc(userId).get()).data()?.data as ITodosList[];

    const updatedTodosLists = updateExistingTodoState(
      existingData,
      todosListId,
      todoId,
      newTodoState
    );

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
