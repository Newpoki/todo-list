import React from "react";
import { RouteComponentProps, match } from "react-router-dom";

import * as Styled from "./todos-list.styles";
import { TodosListDate } from "./todos-list-date";
import { useSelector } from "react-redux";
import { getTodosListById } from "store";
import { useTodosLists } from "hooks";
import { TodosListContent } from "./todos-list-content";
import { TodosListAddTodoForm } from "./todos-list-add-todo-form";

interface ITodosListMatchParams {
  id: string;
}

interface ITodosListProps extends RouteComponentProps {
  match: match<ITodosListMatchParams>;
}

export const TodosList = ({ match }: ITodosListProps) => {
  const { requestsStatus } = useTodosLists();

  const isLoading =
    requestsStatus.get === "PENDING" ||
    requestsStatus.delete === "PENDING" ||
    requestsStatus.put === "PENDING";

  const todosListId = parseInt(match.params.id, 10);
  const todosList = useSelector(getTodosListById(todosListId));

  return (
    <Styled.Wrapper>
      <Styled.TodosListDateWrapper>
        <TodosListDate todosList={todosList} isLoading={isLoading} />
      </Styled.TodosListDateWrapper>
      <TodosListContent isLoading={isLoading} todosList={todosList} />
      {/* TODO: Déplacer l'appel du composant dans le composant qui affiche le contenu pour ne plus
      avoir id undefined */}
      <TodosListAddTodoForm todosList={todosList} isLoading={isLoading} />
    </Styled.Wrapper>
  );
};
