import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import firebase from "firebase/app";

import { useTodosLists, useUser, useNotification } from "hooks";
import { IUser } from "store";
import { formatFirebaseUser } from "common-utils";
import { Home } from "./home/home";
import { AddTodo } from "./add-todo/add-todo";
import { TodosList } from "./todos-list/todos-list";
import { OnlyPrivateRoute } from "./only-private-route";
import { OnlyPublicRoute } from "./only-public-route";
import { Login } from "./login/login";
import { Unknown } from "./unknown/unknown";

export const Router = () => {
  const [isAppLoaded, changeIsAppLoaded] = React.useState(false);
  const { fetchTodosLists } = useTodosLists();
  const { updateUser } = useUser();
  const { addNotification } = useNotification();

  useEffect(() => {
    /** Ecoute le statut d'authent de l'utilisateur de firebase
     * et charge l'application après */
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        const formattedUser: IUser = formatFirebaseUser(user);

        updateUser(formattedUser);
        fetchTodosLists({ userId: user.uid });
        addNotification({
          title: "Connexion réussie",
          content: `Hello ${formattedUser.displayName.split(" ")[0]}`,
          type: "success",
        });
      }

      changeIsAppLoaded(true);
    });
  }, [addNotification, fetchTodosLists, updateUser]);

  if (!isAppLoaded) return null;

  return (
    <Switch>
      <OnlyPrivateRoute path="/add-todo" render={(props) => <AddTodo {...props} />} exact />
      <OnlyPrivateRoute path="/todos-list/:id" render={(props) => <TodosList {...props} />} exact />
      <OnlyPrivateRoute path="/" render={(props) => <Home {...props} />} exact />
      <OnlyPublicRoute path="/login" render={() => <Login />} exact />
      <Route component={Unknown} />
    </Switch>
  );
};
