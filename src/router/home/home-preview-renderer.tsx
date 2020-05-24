import React, { useCallback } from "react";
import { RouteComponentProps } from "react-router-dom";
import { ButtonBase } from "@material-ui/core";
import { useTodosLists, useAuth } from "hooks";

import * as Styled from "./home-preview-renderer.styles";
import { TodosListPreview, SkeletonLoader } from "components";
import { ITodosList } from "store";
import { IDeleteTodosListsInput } from "services";

interface IHomePreviewRendererProps {
  history: RouteComponentProps["history"];
  isLoading: boolean;
  isOnMobile: boolean;
}

export const HomePreviewRenderer = ({
  history,
  isLoading,
  isOnMobile,
}: IHomePreviewRendererProps) => {
  const { todosLists, deleteTodosList } = useTodosLists();
  const { token } = useAuth();

  const handlePreviewClick = useCallback(
    (todosListId: ITodosList["id"]) => {
      history.push(`/todos-list/${todosListId}`);
    },
    [history]
  );

  const handleDeleteTodosList = useCallback(
    (todosListId: ITodosList["id"]) => {
      const payload: IDeleteTodosListsInput = { todosListId, token };
      deleteTodosList(payload);
    },
    [deleteTodosList, token]
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
    <Styled.Wrapper isOnMobile={isOnMobile}>
      {todosLists.map((todosList) => {
        return (
          <Styled.ButtonWrapper isOnMobile={isOnMobile}>
            <ButtonBase onClick={() => handlePreviewClick(todosList.id)} key={todosList.id}>
              <Styled.TodosListPreviewWrapper>
                <Styled.TodosListPreviewContentWrapper>
                  <TodosListPreview {...todosList} onDeleteIconClick={handleDeleteTodosList} />
                </Styled.TodosListPreviewContentWrapper>
              </Styled.TodosListPreviewWrapper>
            </ButtonBase>
          </Styled.ButtonWrapper>
        );
      })}
    </Styled.Wrapper>
  );
};
