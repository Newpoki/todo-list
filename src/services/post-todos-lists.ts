import firebase from "firebase/app";

import { ITodosList, IAddTodosListPayload } from "store";
import { IServiceResponse } from "./interfaces";

export const postTodosLists = async ({ userId, todosList }: IAddTodosListPayload) => {
  try {
    const collection = firebase.firestore().collection("/todosLists");
    const existingData = (await collection.doc(userId).get()).data()?.data as ITodosList[];

    const updatedTodosLists = [todosList, ...existingData];

    await collection.doc(userId).set({ data: updatedTodosLists });

    const response: IServiceResponse<ITodosList> = { data: todosList };

    return response;
  } catch (err) {
    const response: IServiceResponse<ITodosList> = {
      error: {
        code: 500,
      },
    };
    return response;
  }
};
