import React from "react";
import { RouteComponentProps, match } from "react-router-dom";

import * as Styled from "./todos-list.styles";
import { TodosListDate } from "./todos-list-date";
import { useSelector } from "react-redux";
import { getTodosListById } from "store";
import { useUser } from "hooks";
import { TodosListContent } from "./todos-list-content";

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
      <TodosListDate date={todosList?.createdAt} getRequestStatus={getRequestStatus} />

      <Styled.TodosListContentWrapper>
        <TodosListContent getRequestStatus={getRequestStatus} todosList={todosList} />
      </Styled.TodosListContentWrapper>
    </Styled.Wrapper>
  );
};
