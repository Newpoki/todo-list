import firebase from "firebase/app";

import { IUser } from "store";

/**
 * Fonction qui convertit un user de firebase en un utilisateur IUser
 * @param user Données de l'utilisateur sur firebase
 */
export const formatFirebaseUser = (user: firebase.User): IUser => {
  return {
    id: user.uid,
    displayName: user.displayName ?? "",
    email: user.email ?? "",
    photoUrl: user.photoURL ?? "",
  };
};
