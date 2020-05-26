import React from "react";
import Skeleton from "react-loading-skeleton";

import * as Styled from "./home-header.styles";
import { useUser, useTodosLists } from "hooks";

interface IHomeHeaderProps {
  isLoading: boolean;
  isOnMobile: boolean;
}

export const HomeHeader = ({ isLoading, isOnMobile }: IHomeHeaderProps) => {
  const { user } = useUser();

  const { todosLists, onGoingTodosListsNumber, doneTodosListsNumber } = useTodosLists();

  const { firstName } = user;

  if (todosLists.length === 0 && !isLoading) return null;

  return (
    <Styled.Wrapper isOnMobile={isOnMobile}>
      {isLoading && (
        <>
          <Styled.Title isOnMobile={isOnMobile}>
            <Skeleton width={isOnMobile ? "50%" : "400px"} />
          </Styled.Title>

          <Styled.TotalTodosListsNumber isOnMobile={isOnMobile}>
            <Skeleton width={isOnMobile ? "40%" : "200px"} />
          </Styled.TotalTodosListsNumber>

          <Styled.TotalTodosListsNumber isOnMobile={isOnMobile}>
            <Skeleton width={isOnMobile ? "40%" : "200px"} />
          </Styled.TotalTodosListsNumber>
        </>
      )}

      {todosLists.length > 0 && !isLoading && (
        <>
          <Styled.Title isOnMobile={isOnMobile}>Hello {firstName.split(" ")[0]}</Styled.Title>
          <Styled.TotalTodosListsNumber isOnMobile={isOnMobile}>
            <strong>{onGoingTodosListsNumber} </strong>
            {onGoingTodosListsNumber > 1 ? "listes en cours" : "liste en cours"}
            )}
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
