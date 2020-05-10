import firebase from "firebase/app";

import { ITodosList, IDeleteTodosListPayload } from "store";
import { IServiceResponse } from "./interfaces";

export const deleteTodosLists = async ({ userId, todosListId }: IDeleteTodosListPayload) => {
  try {
    const collection = firebase.firestore().collection("/todosLists");
    const existingData = (await collection.doc(userId).get()).data()?.data as ITodosList[];

    const updatedTodosLists = existingData.filter((todoList) => todoList.id !== todosListId);

    await collection.doc(userId).set({ data: updatedTodosLists });

    const response: IServiceResponse<ITodosList["id"]> = {
      data: todosListId,
    };

    return response;
  } catch (err) {
    const response: IServiceResponse<ITodosList["id"]> = {
      error: {
        code: 500,
      },
    };
    return response;
  }
};
