import React, { useCallback, MouseEvent } from "react";
import { SkeletonLoader } from "components";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import CloseIcon from "@material-ui/icons/Close";

import * as Styled from "./todos-list-content.styles";
import { ITodosList, IUpdateTodoStatePayload, ITodoState, ITodo, IDeleteTodoPayload } from "store";
import { useTodosLists, useUser } from "hooks";

interface ITodosListContentProps {
  isLoading: boolean;
  todosList?: ITodosList;
}

export const TodosListContent = ({ isLoading, todosList }: ITodosListContentProps) => {
  const { updateTodoState, deleteTodo } = useTodosLists();
  const { userData } = useUser();

  const toggleTodosListState = useCallback(
    (todosListId: ITodosList["id"], todoId: ITodo["id"], todoState: ITodoState) => {
      const payload: IUpdateTodoStatePayload = {
        userId: userData.id,
        todosListId,
        todoId,
        newTodoState: todoState === "ON_GOING" ? "DONE" : "ON_GOING",
      };

      updateTodoState(payload);
    },
    [updateTodoState, userData.id]
  );

  const handleDeleteTodo = useCallback(
    (evt: MouseEvent<HTMLDivElement>, todosListId: ITodosList["id"], todoId: ITodo["id"]) => {
      // Empêche le toggle du state du todo
      evt.stopPropagation();

      const payload: IDeleteTodoPayload = {
        userId: userData.id,
        todoId,
        todosListId,
      };
      deleteTodo(payload);
    },
    [deleteTodo, userData.id]
  );

  if (isLoading) {
    return (
      <Styled.Wrapper style={{ lineHeight: 2.5 }}>
        <Styled.Title>
          <SkeletonLoader width="60%" height="30px" />
        </Styled.Title>
        <SkeletonLoader count={10} height="20px" />
      </Styled.Wrapper>
    );
  }

  if (!todosList) {
    // TODO: faire en sorte que la todolist soit obligatoire sinon rediriger 404
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
                  onClick={(evt) => handleDeleteTodo(evt, todosList.id, todo.id)}
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
