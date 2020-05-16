import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import firebase from "firebase/app";

import { useTodosLists, useUser, useNotification } from "hooks";
import { IUser } from "store";
import { App } from "./app/app";
import { OnlyPrivateRoute } from "./only-private-route";
import { OnlyPublicRoute } from "./only-public-route";
import { Login } from "./login/login";
import { Unknown } from "./unknown/unknown";
import { LoginSuccess } from "./login-success/login-success";

export const Router = () => {
  const [isAppLoaded, changeIsAppLoaded] = React.useState(false);
  const { fetchTodosLists } = useTodosLists();
  const { addNotification } = useNotification();

  useEffect(
    () => {
      /** Ecoute le statut d'authent de l'utilisateur de firebase
       * et charge l'application après */
      // firebase.auth().onAuthStateChanged(function (user) {
      //   if (user) {
      //     const formattedUser: IUser = formatFirebaseUser(user);

      //     updateUser(formattedUser);
      //     fetchTodosLists({ userId: user.uid });
      //     addNotification({
      //       title: "Connexion réussie",
      //       content: `Hello ${formattedUser.displayName.split(" ")[0]}`,
      //       type: "success",
      //     });
      //   }

      changeIsAppLoaded(true);
    },
    [
      /** addNotification, fetchTodosLists, updateUser*/
    ]
  );

  if (!isAppLoaded) return null;

  return (
    <Switch>
      <OnlyPublicRoute path="/login" render={(props) => <Login {...props} />} exact />
      <OnlyPublicRoute
        path="/login/success/:token"
        render={(props) => <LoginSuccess {...props} />}
        exact
      />
      <OnlyPrivateRoute path="/" render={(props) => <App />} />
      <Route component={Unknown} />
    </Switch>
  );
};
