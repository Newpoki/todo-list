import firebase from "firebase/app";

import { ITodosList, IAddTodosListPayload } from "store";
import { IOldServiceResponse } from "./interfaces";

export const postTodosLists = async ({ userId, todosList }: IAddTodosListPayload) => {
  try {
    const collection = firebase.firestore().collection("/todosLists");
    const existingData: ITodosList[] | undefined = (
      await collection.doc((userId as any) as string).get()
    ).data()?.data;

    const updatedTodosLists = existingData ? [todosList, ...existingData] : [todosList];

    await collection.doc((userId as any) as string).set({ data: updatedTodosLists });

    const response: IOldServiceResponse<ITodosList> = { data: todosList };

    return response;
  } catch (err) {
    console.log(err);
    const response: IOldServiceResponse<ITodosList> = {
      error: {
        code: 500,
      },
    };
    return response;
  }
};
