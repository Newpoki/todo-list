import React from "react";
import { Switch, Route } from "react-router-dom";

import { useUser } from "hooks";
import { Header } from "components";
import { OnlyPrivateRoute } from "../only-private-route";
import { AddTodo } from "../add-todo/add-todo";
import { TodosList } from "../todos-list/todos-list";
import { Home } from "../home/home";
import { Unknown } from "../unknown/unknown";

export const App = () => {
  const { userData, handleDisconnection } = useUser();

  return (
    <>
      <Header user={userData} onDisconnect={handleDisconnection} />
      <Switch>
        <OnlyPrivateRoute path="/add-todo" render={(props) => <AddTodo {...props} />} exact />
        <OnlyPrivateRoute
          path="/todos-list/:id"
          render={(props) => <TodosList {...props} />}
          exact
        />
        <OnlyPrivateRoute path="/" render={(props) => <Home {...props} />} exact />
        <Route component={Unknown} />
      </Switch>
    </>
  );
};
