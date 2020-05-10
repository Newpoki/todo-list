import React from "react";

import * as Styled from "./add-todo-tasks-renderer.styles";
import ClearIcon from "@material-ui/icons/Clear";
import { ITodo, ITodosList } from "store";

interface IAddTodoTasksRendererProps {
  tasks: ITodosList["list"];
  onRemoveTask: (taskId: string) => void;
}

export const AddTodoTasksRenderer = ({ tasks, onRemoveTask }: IAddTodoTasksRendererProps) => {
  if (tasks.length === 0) {
    return (
      <Styled.NoTaskWrapper>
        <Styled.NoTaskContent>Vous n'avez saisie aucune tâche.</Styled.NoTaskContent>
      </Styled.NoTaskWrapper>
    );
  }

  return (
    <>
      <Styled.TasksTitle>Tâches ajoutées</Styled.TasksTitle>
      <Styled.TasksWrapper>
        {tasks.map((task: ITodo) => {
          return (
            <Styled.TaskWrapper key={task.id}>
              <Styled.TaskLabel>- {task.label}</Styled.TaskLabel>
              <Styled.TaskRemoveIconWrapper onClick={() => onRemoveTask(task.id)}>
                <ClearIcon />
              </Styled.TaskRemoveIconWrapper>
            </Styled.TaskWrapper>
          );
        })}
      </Styled.TasksWrapper>
    </>
  );
};
