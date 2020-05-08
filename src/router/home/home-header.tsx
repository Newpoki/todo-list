import React from "react";
import Skeleton from "react-loading-skeleton";

import * as Styled from "./home-header.styles";
import { useUser } from "hooks";
import { getTodosListsNumberSentence } from "./utils/get-todos-lists-number-sentence";

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

        <Styled.TotalTodosListsNumber>
          <Skeleton width="40%" />
        </Styled.TotalTodosListsNumber>

        <Styled.TotalTodosListsNumber>
          <Skeleton width="40%" />
        </Styled.TotalTodosListsNumber>
      </Styled.Wrapper>
    );
  }

  return (
    <Styled.Wrapper>
      <Styled.Title>Bonjour, {displayName}</Styled.Title>

      {todosLists.length > 0 && (
        <>
          {getTodosListsNumberSentence(onGoingTodosListsNumber, "ON_GOING")}
          {getTodosListsNumberSentence(doneTodosListsNumber, "DONE")}
        </>
      )}
    </Styled.Wrapper>
  );
};
