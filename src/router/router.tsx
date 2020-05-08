import React from "react";
import { Switch, Route } from "react-router-dom";

import { Home } from "./home/home";
import { AddTodo } from "./add-todo/add-todo";
import { TodosList } from "./todos-list/todos-list";

export const Router = () => {
  return (
    <Switch>
      <Route path="/add-todo" component={AddTodo} exact />
      <Route path="/todos-list/:id" component={TodosList} exact />
      <Route path="/" component={Home} exact />
    </Switch>
  );
};
