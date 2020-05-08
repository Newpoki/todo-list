import React, { useCallback } from "react";
import Skeleton from "react-loading-skeleton";
import { useUser } from "hooks";
import * as Styled from "./home-preview-renderer.styles";
import { TodosListPreview } from "components";
import { RouteComponentProps } from "react-router-dom";
import { ITodoList } from "store";
import { ButtonBase } from "@material-ui/core";

interface IHomePreviewRendererProps {
  history: RouteComponentProps["history"];
}

export const HomePreviewRenderer = ({ history }: IHomePreviewRendererProps) => {
  const { getRequestStatus, todosLists, deleteTodosList } = useUser();

  const handlePreviewClick = useCallback(
    (todosListId: ITodoList["id"]) => {
      history.push(`/todos-list/${todosListId}`);
    },
    [history]
  );

  const handleDeleteTodosList = useCallback(
    (todosListId: ITodoList["id"]) => {
      console.log("click");
      deleteTodosList(todosListId);
    },
    [deleteTodosList]
  );

  if (getRequestStatus === "PENDING") {
    return (
      <>
        <Styled.TodosListPreviewWrapper>
          <Skeleton height="120px" />
        </Styled.TodosListPreviewWrapper>
        <Styled.TodosListPreviewWrapper>
          <Skeleton height="120px" />
        </Styled.TodosListPreviewWrapper>
        <Styled.TodosListPreviewWrapper>
          <Skeleton height="120px" />
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
