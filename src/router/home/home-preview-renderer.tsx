import React from "react";
import Skeleton from "react-loading-skeleton";

import { useUser } from "hooks";
import * as Styled from "./home-preview-renderer.styles";
import { TodoListPreview } from "components";

export const HomePreviewRenderer = () => {
  const { getRequestStatus, todosLists } = useUser();

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
      {todosLists.map((todoList) => {
        return (
          <Styled.TodoListPreviewWrapper>
            <Styled.TodoListPreviewContentWrapper>
              <TodoListPreview {...todoList} />
            </Styled.TodoListPreviewContentWrapper>
          </Styled.TodoListPreviewWrapper>
        );
      })}
    </div>
  );
};
