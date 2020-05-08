import React, { useCallback } from "react";
import { RouteComponentProps } from "react-router-dom";

import * as Styled from "./home.styles";
import { Footer } from "components";
import { HomeHeader } from "./home-header";
import { HomePreviewRenderer } from "./home-preview-renderer";

type IHomeProps = RouteComponentProps;

export const Home = ({ history }: IHomeProps) => {
  const handleRedirection = useCallback(() => {
    history.push("/add-todo");
  }, [history]);

  return (
    <Styled.Wrapper>
      <HomeHeader />
      <HomePreviewRenderer history={history} />

      <Styled.FooterPlaceholder />
      <Footer onClick={handleRedirection}>
        <Styled.FooterContent>Ajouter une nouvelle liste</Styled.FooterContent>
      </Footer>
    </Styled.Wrapper>
  );
};
