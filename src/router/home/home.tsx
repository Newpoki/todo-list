import React, { useCallback } from "react";
import { RouteComponentProps } from "react-router-dom";

import { useTodosLists } from "hooks";
import { Footer } from "components";
import { HomeHeader } from "./home-header";
import { HomePreviewRenderer } from "./home-preview-renderer";
import * as Styled from "./home.styles";

interface IHomeProps extends RouteComponentProps {
  isOnMobile: boolean;
}

export const Home = ({ history, isOnMobile }: IHomeProps) => {
  const { requestsStatus } = useTodosLists();

  const isLoading = requestsStatus.get === "PENDING" || requestsStatus.delete === "PENDING";

  const handleRedirection = useCallback(() => {
    history.push("/add-todo");
  }, [history]);

  return (
    <Styled.Wrapper>
      <HomeHeader isLoading={isLoading} isOnMobile={isOnMobile} />
      <HomePreviewRenderer isLoading={isLoading} history={history} isOnMobile={isOnMobile} />

      {!isLoading && (
        <>
          <Styled.FooterPlaceholder />
          <Footer onClick={handleRedirection}>
            <Styled.FooterContent>Ajouter une nouvelle liste</Styled.FooterContent>
          </Footer>
        </>
      )}
    </Styled.Wrapper>
  );
};
