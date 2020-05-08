import { ITodoState } from "store";
import React from "react";
import * as Styled from "../home-header.styles";

export const getTasksNumberSentence = (tasksNumber: number, tasksState: ITodoState) => {
  if (tasksState === "ON_GOING") {
    return (
      <Styled.TotalTodoListsNumber>
        <strong>{tasksNumber} </strong>
        {tasksNumber > 1 ? "tâches en cours" : "tâche en cours"}
      </Styled.TotalTodoListsNumber>
    );
  }

  return (
    <Styled.TotalTodoListsNumber>
      <strong>{tasksNumber} </strong>
      {tasksNumber > 1 ? "tâches terminées" : "tâche terminée"}
    </Styled.TotalTodoListsNumber>
  );
};
