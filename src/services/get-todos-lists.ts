import firebase from "firebase/app";

import { ITodosList, IUser } from "store";
import { IOldServiceResponse } from "./interfaces";

export const getTodosLists = async (userId: IUser["id"]) => {
  try {
    const todosListSnapshot = await firebase
      .firestore()
      .collection("/todosLists")
      .doc((userId as any) as string)
      .get();

    const data = todosListSnapshot.data()?.data as ITodosList[];

    const response: IOldServiceResponse<ITodosList[]> = {
      data,
    };

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
