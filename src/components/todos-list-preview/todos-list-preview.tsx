import React, { memo, useCallback, MouseEvent } from "react";
import CloseIcon from "@material-ui/icons/Close";

import * as Styled from "./todos-list-preview.styles";
import { ITodosList } from "store";
import { getTodosListdisplayedDate } from "common-utils";

export interface ITodosListPreviewProps extends ITodosList {
  onDeleteIconClick: (id: ITodosList["id"]) => void;
}

export const TodosListPreview = memo(
  ({ title, list, createdAt, updatedAt, id, onDeleteIconClick }: ITodosListPreviewProps) => {
    const handleDeleteIconClick = useCallback(
      (evt: MouseEvent<HTMLDivElement>) => {
        evt.stopPropagation();
        onDeleteIconClick(id);
      },
      [id, onDeleteIconClick]
    );

    return (
      <Styled.Wrapper>
        <Styled.TitleAndCloseIconWrapper>
          <Styled.Title>{title}</Styled.Title>
          <Styled.DeleteIconWrapper onClick={handleDeleteIconClick}>
            <CloseIcon />
          </Styled.DeleteIconWrapper>
        </Styled.TitleAndCloseIconWrapper>
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
