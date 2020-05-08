import React, { useCallback } from "react";
import AddIcon from "@material-ui/icons/Add";
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
      <HomePreviewRenderer />

      <Styled.FooterPlaceholder />
      <Footer onIconClick={handleRedirection} iconComponent={<AddIcon />}>
        <Styled.FooterContent>Ajouter une nouvelle liste</Styled.FooterContent>
      </Footer>
    </Styled.Wrapper>
  );
};
