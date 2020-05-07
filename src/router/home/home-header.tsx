import React from "react";
import Skeleton from "react-loading-skeleton";

import * as Styled from "./home-header.styles";

export const HomeHeader = () => {
  const isLoading = false;
  const displayName = "Jason";

  return (
    <Styled.Wrapper>
      <Styled.Title>
        {displayName ? <>Bonjour, {displayName}</> : <Skeleton width="70%" />}
      </Styled.Title>

      <Styled.TotalTodoListsNumber>
        {isLoading ? (
          <Skeleton width="40%" />
        ) : (
          <>
            <strong>3 </strong>
            tâches en cours
          </>
        )}
      </Styled.TotalTodoListsNumber>
      <Styled.TotalTodoListsNumber>
        {isLoading ? (
          <Skeleton width="40%" />
        ) : (
          <>
            <strong>1 </strong>
            tâches terminée
          </>
        )}
      </Styled.TotalTodoListsNumber>
    </Styled.Wrapper>
  );
};
