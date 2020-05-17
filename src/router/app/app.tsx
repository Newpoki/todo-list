import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import { useUser, useTodosLists } from "hooks";
import { Header } from "components";
import { OnlyPrivateRoute } from "../only-private-route";
import { AddTodo } from "../add-todo/add-todo";
import { TodosList } from "../todos-list/todos-list";
import { Home } from "../home/home";
import { Unknown } from "../unknown/unknown";

export const App = () => {
  const { userData, handleDisconnection, token } = useUser();
  const { fetchTodosLists, todosLists, requestsStatus } = useTodosLists();

  useEffect(() => {
    if (todosLists.length === 0 && requestsStatus.get === "NOT_CALLED" && token !== "") {
      fetchTodosLists({ token });
    }
  }, [fetchTodosLists, requestsStatus.get, todosLists.length, token, userData.id]);

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
