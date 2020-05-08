import React, { useCallback } from "react";
import Skeleton from "react-loading-skeleton";

import { useUser } from "hooks";
import * as Styled from "./home-preview-renderer.styles";
import { TodoListPreview } from "components";
import { RouteComponentProps } from "react-router-dom";
import { ITodoList } from "store";

interface IHomePreviewRendererProps {
  history: RouteComponentProps["history"];
}

export const HomePreviewRenderer = ({ history }: IHomePreviewRendererProps) => {
  const { getRequestStatus, todosLists } = useUser();

  const handlePreviewClick = useCallback(
    (todosListId: ITodoList["id"]) => {
      history.push(`/todos-list/${todosListId}`);
    },
    [history]
  );

  if (getRequestStatus === "PENDING") {
    return (
      <>
        <Styled.TodoListPreviewWrapper>
          <Skeleton height="120px" />
        </Styled.TodoListPreviewWrapper>
        <Styled.TodoListPreviewWrapper>
          <Skeleton height="120px" />
        </Styled.TodoListPreviewWrapper>
        <Styled.TodoListPreviewWrapper>
          <Skeleton height="120px" />
        </Styled.TodoListPreviewWrapper>
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
    <div>
      {todosLists.map((todosList) => {
        return (
          <Styled.TodoListPreviewWrapper onClick={() => handlePreviewClick(todosList.id)}>
            <Styled.TodoListPreviewContentWrapper>
              <TodoListPreview {...todosList} />
            </Styled.TodoListPreviewContentWrapper>
          </Styled.TodoListPreviewWrapper>
        );
      })}
    </div>
  );
};
