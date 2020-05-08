import { ITodoState } from "store";
import React from "react";
import * as Styled from "../home-header.styles";

export const getTodosListsNumberSentence = (
  todosListsNumber: number,
  todosListsState: ITodoState
) => {
  if (todosListsState === "ON_GOING") {
    return (
      <Styled.TotalTodosListsNumber>
        <strong>{todosListsNumber} </strong>
        {todosListsNumber > 1 ? "listes en cours" : "liste en cours"}
      </Styled.TotalTodosListsNumber>
    );
  }

  return (
    <Styled.TotalTodosListsNumber>
      <strong>{todosListsNumber} </strong>
      {todosListsNumber > 1 ? "listes terminées" : "liste terminée"}
    </Styled.TotalTodosListsNumber>
  );
};
