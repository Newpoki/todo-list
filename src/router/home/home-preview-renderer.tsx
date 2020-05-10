import React, { useCallback } from "react";
import { RouteComponentProps } from "react-router-dom";
import { ButtonBase } from "@material-ui/core";
import { useTodosLists } from "hooks";

import * as Styled from "./home-preview-renderer.styles";
import { TodosListPreview, SkeletonLoader } from "components";
import { ITodoList } from "store";

interface IHomePreviewRendererProps {
  history: RouteComponentProps["history"];
}

export const HomePreviewRenderer = ({ history }: IHomePreviewRendererProps) => {
  const { getRequestStatus, todosLists, deleteTodosList } = useTodosLists();

  const handlePreviewClick = useCallback(
    (todosListId: ITodoList["id"]) => {
      history.push(`/todos-list/${todosListId}`);
    },
    [history]
  );

  const handleDeleteTodosList = useCallback(
    (todosListId: ITodoList["id"]) => {
      deleteTodosList(todosListId);
    },
    [deleteTodosList]
  );

  if (getRequestStatus === "PENDING") {
    return (
      <>
        <Styled.TodosListPreviewWrapper>
          <SkeletonLoader height="120px" />
        </Styled.TodosListPreviewWrapper>
        <Styled.TodosListPreviewWrapper>
          <SkeletonLoader height="120px" />
        </Styled.TodosListPreviewWrapper>
        <Styled.TodosListPreviewWrapper>
          <SkeletonLoader height="120px" />
        </Styled.TodosListPreviewWrapper>
      </>
    );
  }

  if (todosLists.length === 0) {
    return (
      <Styled.EmptyPreviewRendererWrapper>
        <Styled.EmptyPreviewRendererText>
          Vous n'avez aucune liste de créée.
        </Styled.EmptyPreviewRendererText>
      </Styled.EmptyPreviewRendererWrapper>
    );
  }

  return (
    <Styled.Wrapper>
      {todosLists.map((todosList) => {
        return (
          <ButtonBase onClick={() => handlePreviewClick(todosList.id)}>
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
