import React from "react";

import { SkeletonLoader } from "components";
import * as Styled from "./home-header.styles";
import { useUser, useTodosLists } from "hooks";

interface IHomeHeaderProps {
  isLoading: boolean;
  isOnMobile: boolean;
}

export const HomeHeader = ({ isLoading, isOnMobile }: IHomeHeaderProps) => {
  const { userData } = useUser();

  const { todosLists, onGoingTodosListsNumber, doneTodosListsNumber } = useTodosLists();

  const { firstName } = userData;

  if (isLoading) {
    return (
      <Styled.Wrapper isOnMobile={isOnMobile}>
        <Styled.Title isOnMobile={isOnMobile}>
          <SkeletonLoader width="70%" />
        </Styled.Title>

        <Styled.TotalTodosListsNumber isOnMobile={isOnMobile}>
          <SkeletonLoader width="40%" />
        </Styled.TotalTodosListsNumber>

        <Styled.TotalTodosListsNumber isOnMobile={isOnMobile}>
          <SkeletonLoader width="40%" />
        </Styled.TotalTodosListsNumber>
      </Styled.Wrapper>
    );
  }

  return (
    <Styled.Wrapper isOnMobile={isOnMobile}>
      <Styled.Title isOnMobile={isOnMobile}>Hello {firstName.split(" ")[0]}</Styled.Title>

      {todosLists.length > 0 && (
        <>
          <Styled.TotalTodosListsNumber isOnMobile={isOnMobile}>
            <strong>{onGoingTodosListsNumber} </strong>
            {onGoingTodosListsNumber > 1 ? "listes en cours" : "liste en cours"}
          </Styled.TotalTodosListsNumber>

          <Styled.TotalTodosListsNumber isOnMobile={isOnMobile}>
            <strong>{doneTodosListsNumber} </strong>
            {doneTodosListsNumber > 1 ? "listes terminées ou vides" : "liste terminée ou vide"}
          </Styled.TotalTodosListsNumber>
        </>
      )}
    </Styled.Wrapper>
  );
};
