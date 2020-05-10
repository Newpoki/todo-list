import React, { useCallback } from "react";
import { RouteComponentProps } from "react-router-dom";
import { ButtonBase } from "@material-ui/core";
import { useTodosLists, useUser } from "hooks";

import * as Styled from "./home-preview-renderer.styles";
import { TodosListPreview, SkeletonLoader } from "components";
import { ITodosList, IDeleteTodosListPayload } from "store";

interface IHomePreviewRendererProps {
  history: RouteComponentProps["history"];
  isLoading: boolean;
}

export const HomePreviewRenderer = ({ history, isLoading }: IHomePreviewRendererProps) => {
  const { todosLists, deleteTodosList } = useTodosLists();
  const { userData } = useUser();

  const handlePreviewClick = useCallback(
    (todosListId: ITodosList["id"]) => {
      history.push(`/todos-list/${todosListId}`);
    },
    [history]
  );

  const handleDeleteTodosList = useCallback(
    (todosListId: ITodosList["id"]) => {
      const payload: IDeleteTodosListPayload = {
        todosListId,
        userId: userData.id,
      };
      deleteTodosList(payload);
    },
    [deleteTodosList, userData.id]
  );

  if (isLoading) {
    return (
      <>
        <Styled.EmptyTodoListsPreviewWrapper>
          <SkeletonLoader height="120px" />
        </Styled.EmptyTodoListsPreviewWrapper>
        <Styled.EmptyTodoListsPreviewWrapper>
          <SkeletonLoader height="120px" />
        </Styled.EmptyTodoListsPreviewWrapper>
        <Styled.EmptyTodoListsPreviewWrapper>
          <SkeletonLoader height="120px" />
        </Styled.EmptyTodoListsPreviewWrapper>
      </>
    );
  }

  if (todosLists.length === 0) {
    return (
      <Styled.EmptyWrapper>
        <Styled.EmptyPreviewRendererText>
          Vous n'avez aucune liste de créée.
        </Styled.EmptyPreviewRendererText>
      </Styled.EmptyWrapper>
    );
  }

  return (
    <Styled.Wrapper>
      {todosLists.map((todosList) => {
        return (
          <ButtonBase onClick={() => handlePreviewClick(todosList.id)} key={todosList.id}>
            <Styled.TodosListPreviewWrapper>
              <Styled.TodosListPreviewContentWrapper>
                <TodosListPreview {...todosList} onDeleteIconClick={handleDeleteTodosList} />
              </Styled.TodosListPreviewContentWrapper>
            </Styled.TodosListPreviewWrapper>
          </ButtonBase>
        );
      })}
    </Styled.Wrapper>
  );
};
