import React from "react";
import { format } from "date-fns";
import * as Styled from "./todo-list-preview.styles";

export type ITodoState = "DONE" | "ON_GOING";

export interface ITodo {
  id: string;
  label: string;
  state: ITodoState;
}

/** Interface temporaire d'une task lors de la création d'une task  */
export interface ITodoTemp {
  id: ITodo["id"];
  label: ITodo["label"];
}

const getPreviewDate = (createdAt: number, updatedAt?: number) => {
  if (updatedAt) {
    const formatedDate = format(updatedAt, "dd/MM/yyyy");
    return `Dernière mise à jour le ${formatedDate}`;
  } else {
    const formatedDate = format(createdAt, "dd/MM/yyyy");
    return `Créé le ${formatedDate}`;
  }
};

export interface ITodoListPreviewProps {
  id: string;
  title: string;
  list: ITodo[];
  createdAt: number;
  updatedAt?: number;
}

export const TodoListPreview = ({ title, list, createdAt, updatedAt }: ITodoListPreviewProps) => {
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
};
