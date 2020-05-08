import React, { useCallback } from "react";
import Skeleton from "react-loading-skeleton";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import CloseIcon from "@material-ui/icons/Close";
import * as Styled from "./todos-list-content.styles";
import { IAnyRequestStatus, ITodoList, IUpdateTodoStatePayload, ITodoState, ITodo } from "store";
import { useUser } from "hooks";

interface ITodosListContentProps {
  getRequestStatus: IAnyRequestStatus;
  todosList?: ITodoList;
}

export const TodosListContent = ({ getRequestStatus, todosList }: ITodosListContentProps) => {
  const { updateTodoState, deleteTodo } = useUser();

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
          <Skeleton width="50%" height="30px" />
        </Styled.Title>
        <Skeleton count={10} height="20px" />
      </Styled.Wrapper>
    );
  }

  if (getRequestStatus === "ERROR" || !todosList) {
    return <Styled.Wrapper>Wolah y'a pas de content c chop</Styled.Wrapper>;
  }

  return (
    <Styled.Wrapper>
      <Styled.Title>{todosList.title}</Styled.Title>
      <Styled.TodosWrapper>
        {todosList.list.map((todo) => {
          return (
            <Styled.TodoWrapper key={todo.id}>
              <Styled.TodoStateIconWrapper
                state={todo.state}
                onClick={() => toggleTodosListState(todosList.id, todo.id, todo.state)}
              >
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
    </Styled.Wrapper>
  );
};
