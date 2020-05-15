import firebase from "firebase/app";

import { IUser } from "store";
import { formatFirebaseUser } from "common-utils";
import { IServiceResponse } from "./interfaces";

export const getUserInformations = async () => {
  try {
    await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);

    const provider = new firebase.auth.GoogleAuthProvider();
    await firebase.auth().signInWithRedirect(provider);
    const { user } = await firebase.auth().getRedirectResult();

    if (!user) {
      const response: IServiceResponse<IUser> = {
        error: {
          code: 500,
        },
      };
      return response;
    }

    const response: IServiceResponse<IUser> = {
      data: formatFirebaseUser(user),
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
