import React from "react";
import Skeleton from "react-loading-skeleton";

import * as Styled from "./home-header.styles";
import { useUser } from "hooks";
import { getTasksNumberSentence } from "./utils/get-tasks-number-sentence";

export const HomeHeader = () => {
  const {
    userPersonalInformations,
    getRequestStatus,
    todosLists,
    onGoingTodosListsNumber,
    doneTodosListsNumber,
  } = useUser();

  const { displayName } = userPersonalInformations;

  if (getRequestStatus === "PENDING") {
    return (
      <Styled.Wrapper>
        <Styled.Title>
          <Skeleton width="70%" />
        </Styled.Title>

        <Styled.TotalTodoListsNumber>
          <Skeleton width="40%" />
        </Styled.TotalTodoListsNumber>

        <Styled.TotalTodoListsNumber>
          <Skeleton width="40%" />
        </Styled.TotalTodoListsNumber>
      </Styled.Wrapper>
    );
  }

  return (
    <Styled.Wrapper>
      <Styled.Title>Bonjour, {displayName}</Styled.Title>

      {todosLists.length > 0 && (
        <>
          {getTasksNumberSentence(onGoingTodosListsNumber, "ON_GOING")}
          {getTasksNumberSentence(doneTodosListsNumber, "DONE")}
        </>
      )}
    </Styled.Wrapper>
  );
};
