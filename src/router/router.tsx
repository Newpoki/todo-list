import React from "react";
import { Switch, Route } from "react-router-dom";

import { Home } from "./home/home";
import { AddTodo } from "./add-todo/add-todo";

export const Router = () => {
  return (
    <Switch>
      <Route path="/add-todo" component={AddTodo} exact />
      <Route path="/" component={Home} exact />
    </Switch>
  );
};
