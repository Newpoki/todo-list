import React, { memo } from "react";

import * as Styled from "./todo-list-preview.styles";
import { ITodoList } from "store";
import { getTodosListdisplayedDate } from "common-utils";

export type ITodoListPreviewProps = ITodoList;

export const TodoListPreview = memo(
  ({ title, list, createdAt, updatedAt }: ITodoListPreviewProps) => {
    return (
      <Styled.Wrapper>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Date>{getTodosListdisplayedDate(createdAt, updatedAt)}</Styled.Date>
        <Styled.ListWrapper>
          {list.map((todo) => {
            return <Styled.TodoLabel key={todo.id}>{todo.label}</Styled.TodoLabel>;
          })}
        </Styled.ListWrapper>
      </Styled.Wrapper>
    );
  }
);
