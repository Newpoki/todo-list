import React from "react";
import { Switch } from "react-router-dom";

import { Home } from "./home/home";
import { AddTodo } from "./add-todo/add-todo";
import { TodosList } from "./todos-list/todos-list";
import { OnlyPrivateRoute } from "./only-private-route";
import { OnlyPublicRoute } from "./only-public-route";
import { Login } from "./login/login";

export const Router = () => {
  return (
    <Switch>
      <OnlyPrivateRoute path="/add-todo" render={(props) => <AddTodo {...props} />} exact />
      <OnlyPrivateRoute path="/todos-list/:id" render={(props) => <TodosList {...props} />} exact />
      <OnlyPrivateRoute path="/" render={(props) => <Home {...props} />} exact />
      <OnlyPublicRoute path="/login" render={() => <Login />} exact />
    </Switch>
  );
};
