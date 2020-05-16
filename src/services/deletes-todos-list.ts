import firebase from "firebase/app";

import { ITodosList, IDeleteTodosListPayload } from "store";
import { IOldServiceResponse } from "./interfaces";

export const deleteTodosLists = async ({ userId, todosListId }: IDeleteTodosListPayload) => {
  try {
    const collection = firebase.firestore().collection("/todosLists");
    const existingData = (await collection.doc((userId as any) as string).get()).data()
      ?.data as ITodosList[];

    const updatedTodosLists = existingData.filter((todoList) => todoList.id !== todosListId);

    await collection.doc((userId as any) as string).set({ data: updatedTodosLists });

    const response: IOldServiceResponse<ITodosList["id"]> = {
      data: todosListId,
    };

    return response;
  } catch (err) {
    const response: IOldServiceResponse<ITodosList["id"]> = {
      error: {
        code: 500,
      },
    };
    return response;
  }
};
