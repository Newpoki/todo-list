import React from "react";
import { RouteComponentProps, match } from "react-router-dom";

import * as Styled from "./todos-list.styles";
import { TodosListDate } from "./todos-list-date";
import { useSelector } from "react-redux";
import { getTodosListById } from "store";
import { useUser } from "hooks";
import { TodosListContent } from "./todos-list-content";
import { TodosListAddTodoForm } from "./todos-list-add-todo-form";

interface ITodosListMatchParams {
  id: string;
}

interface ITodosListProps extends RouteComponentProps {
  match: match<ITodosListMatchParams>;
}

export const TodosList = ({ match }: ITodosListProps) => {
  const { getRequestStatus } = useUser();

  const todosListId = match.params.id;
  const todosList = useSelector(getTodosListById(todosListId));

  return (
    <Styled.Wrapper>
      <Styled.TodosListDateWrapper>
        <TodosListDate todosList={todosList} getRequestStatus={getRequestStatus} />
      </Styled.TodosListDateWrapper>

      <TodosListContent getRequestStatus={getRequestStatus} todosList={todosList} />
      <TodosListAddTodoForm todosList={todosList} getRequestStatus={getRequestStatus} />
    </Styled.Wrapper>
  );
};
