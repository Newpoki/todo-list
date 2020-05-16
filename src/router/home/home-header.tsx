import React from "react";

import { SkeletonLoader } from "components";
import * as Styled from "./home-header.styles";
import { useUser, useTodosLists } from "hooks";
import { getTodosListsNumberSentence } from "./utils/get-todos-lists-number-sentence";

interface IHomeHeaderProps {
  isLoading: boolean;
}

export const HomeHeader = ({ isLoading }: IHomeHeaderProps) => {
  const { userData } = useUser();

  const { todosLists, onGoingTodosListsNumber, doneTodosListsNumber } = useTodosLists();

  const { firstName } = userData;

  if (isLoading) {
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
      <Styled.Title>Hello {firstName.split(" ")[0]}</Styled.Title>

      {todosLists.length > 0 && (
        <>
          {getTodosListsNumberSentence(onGoingTodosListsNumber, "ON_GOING")}
          {getTodosListsNumberSentence(doneTodosListsNumber, "DONE")}
        </>
      )}
    </Styled.Wrapper>
  );
};
