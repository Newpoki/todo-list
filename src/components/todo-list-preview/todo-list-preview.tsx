import React, { memo } from "react";
import { format } from "date-fns";

import * as Styled from "./todo-list-preview.styles";
import { ITodoList } from "store";

const getPreviewDate = (createdAt: number, updatedAt?: number) => {
  if (updatedAt) {
    const formatedDate = format(updatedAt, "dd/MM/yyyy");
    return `Dernière mise à jour le ${formatedDate}`;
  } else {
    const formatedDate = format(createdAt, "dd/MM/yyyy");
    return `Créé le ${formatedDate}`;
  }
};

export type ITodoListPreviewProps = ITodoList;

export const TodoListPreview = memo(
  ({ title, list, createdAt, updatedAt }: ITodoListPreviewProps) => {
    return (
      <Styled.Wrapper>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Date>{getPreviewDate(createdAt, updatedAt)}</Styled.Date>
        <Styled.ListWrapper>
          {list.map((todo) => {
            return <Styled.TodoLabel key={todo.id}>{todo.label}</Styled.TodoLabel>;
          })}
        </Styled.ListWrapper>
      </Styled.Wrapper>
    );
  }
);
