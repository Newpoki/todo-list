import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useMediaQuery, useTheme } from "@material-ui/core";

import { useUser, useTodosLists, useAuth } from "hooks";
import { Header } from "components";
import { AddTodosList } from "router/add-todos-list/add-todos-list";
import { TodosList } from "../todos-list/todos-list";
import { Home } from "../home/home";
import { Unknown } from "../unknown/unknown";

export const App = () => {
  const { user } = useUser();
  const { token, handleDisconnection } = useAuth();
  const { fetchTodosLists, todosLists, requestsStatus } = useTodosLists();
  const materialTheme = useTheme();
  const isOnMobile = useMediaQuery(materialTheme.breakpoints.down("sm"));

  useEffect(() => {
    if (todosLists.length === 0 && requestsStatus.get === "NOT_CALLED") {
      fetchTodosLists({ token });
    }
  }, [fetchTodosLists, requestsStatus.get, todosLists.length, token, user.id]);

  return (
    <>
      <Header user={user} onDisconnect={handleDisconnection} />
      <Switch>
        <Route path="/add-todo" render={(props) => <AddTodosList {...props} />} exact />
        <Route path="/todos-list/:id" render={(props) => <TodosList {...props} />} exact />
        <Route path="/" render={(props) => <Home {...props} isOnMobile={isOnMobile} />} exact />
        <Route component={Unknown} />
      </Switch>
    </>
  );
};
