import firebase from "firebase/app";

import { IUser } from "store";
import { IServiceResponse } from "./interfaces";

export const getUserInformations = async () => {
  try {
    await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);

    const provider = new firebase.auth.GoogleAuthProvider();

    const firebaseResponse = await firebase.auth().signInWithPopup(provider);
    const { user } = firebaseResponse;

    if (!user) {
      const response: IServiceResponse<IUser> = {
        error: {
          code: 500,
        },
      };
      return response;
    }

    const response: IServiceResponse<IUser> = {
      data: {
        id: user.uid,
        displayName: user.displayName ?? "",
        email: user.email ?? "",
        photoUrl: user.photoURL ?? "",
      },
    };

    return response;
  } catch (err) {
    const response: IServiceResponse<IUser> = {
      error: {
        code: 500,
      },
    };
    return response;
  }
};
