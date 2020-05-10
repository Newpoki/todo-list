import React, { useCallback } from "react";
import { SkeletonLoader } from "components";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import CloseIcon from "@material-ui/icons/Close";

import * as Styled from "./todos-list-content.styles";
import { ITodoList, IUpdateTodoStatePayload, ITodoState, ITodo } from "store";
import { useTodosLists } from "hooks";
import { IAnyRequestStatus } from "services";

interface ITodosListContentProps {
  getRequestStatus: IAnyRequestStatus;
  todosList?: ITodoList;
}

export const TodosListContent = ({ getRequestStatus, todosList }: ITodosListContentProps) => {
  const { updateTodoState, deleteTodo } = useTodosLists();

  const toggleTodosListState = useCallback(
    (todosListId: ITodoList["id"], todoId: ITodo["id"], todoState: ITodoState) => {
      const payload: IUpdateTodoStatePayload = {
        todosListId,
        todoId,
        newTodoState: todoState === "ON_GOING" ? "DONE" : "ON_GOING",
      };

      updateTodoState(payload);
    },
    [updateTodoState]
  );

  const handleDeleteTodo = useCallback(
    (todosListId: ITodoList["id"], todoId: ITodo["id"]) => {
      deleteTodo({ todosListId, todoId });
    },
    [deleteTodo]
  );

  if (getRequestStatus === "PENDING") {
    return (
      <Styled.Wrapper style={{ lineHeight: 2.5 }}>
        <Styled.Title>
          <SkeletonLoader width="50%" height="30px" />
        </Styled.Title>
        <SkeletonLoader count={10} height="20px" />
      </Styled.Wrapper>
    );
  }

  if (getRequestStatus === "ERROR" || !todosList) {
    return <Styled.Wrapper>Wolah y'a pas de content c chop</Styled.Wrapper>;
  }

  return (
    <Styled.Wrapper>
      <Styled.Title>{todosList.title}</Styled.Title>
      {todosList.list.length === 0 && (
        <Styled.EmptyTodosListWrapper>
          <Styled.EmptyTodosListText>
            Vous n'avez aucune tâches dans cette liste
          </Styled.EmptyTodosListText>
        </Styled.EmptyTodosListWrapper>
      )}

      {todosList.list.length > 0 && (
        <Styled.TodosWrapper>
          {todosList.list.map((todo, index) => {
            return (
              <Styled.TodoWrapper
                key={todo.id}
                onClick={() => toggleTodosListState(todosList.id, todo.id, todo.state)}
              >
                <Styled.TodoStateIconWrapper state={todo.state}>
                  <CheckCircleOutlineIcon />
                </Styled.TodoStateIconWrapper>

                <Styled.TodoLabel state={todo.state}>{todo.label}</Styled.TodoLabel>

                <Styled.DeleteTodoIconWrapper
                  state={todo.state}
                  onClick={() => handleDeleteTodo(todosList.id, todo.id)}
                >
                  <CloseIcon />
                </Styled.DeleteTodoIconWrapper>
              </Styled.TodoWrapper>
            );
          })}
        </Styled.TodosWrapper>
      )}
    </Styled.Wrapper>
  );
};
