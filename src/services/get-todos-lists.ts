import firebase from "firebase/app";

import { ITodosList, IUser } from "store";
import { IServiceResponse } from "./interfaces";

export const getTodosLists = async (userId: IUser["id"]) => {
  try {
    const todosListSnapshot = await firebase
      .firestore()
      .collection("/todosLists")
      .doc(userId)
      .get();

    const data = todosListSnapshot.data()?.data as ITodosList[];

    const response: IServiceResponse<ITodosList[]> = {
      data,
    };

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
