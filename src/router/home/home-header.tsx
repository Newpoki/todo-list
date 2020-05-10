import React from "react";

import { SkeletonLoader } from "components";
import * as Styled from "./home-header.styles";
import { useUser, useTodosLists } from "hooks";
import { getTodosListsNumberSentence } from "./utils/get-todos-lists-number-sentence";

export const HomeHeader = () => {
  const { userData } = useUser();

  const {
    todosLists,
    onGoingTodosListsNumber,
    doneTodosListsNumber,
    getRequestStatus,
  } = useTodosLists();

  const { displayName } = userData;

  if (getRequestStatus === "PENDING") {
    return (
      <Styled.Wrapper>
        <Styled.Title>
          <SkeletonLoader width="70%" />
        </Styled.Title>

        <Styled.TotalTodosListsNumber>
          <SkeletonLoader width="40%" />
        </Styled.TotalTodosListsNumber>

        <Styled.TotalTodosListsNumber>
          <SkeletonLoader width="40%" />
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
