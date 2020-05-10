import React, { useCallback } from "react";
import { ButtonBase } from "@material-ui/core";
import { RouteComponentProps } from "react-router-dom";

import * as Styled from "./unknown.styles";

type IUnknownProps = RouteComponentProps;

export const Unknown = ({ history }: IUnknownProps) => {
  const handleHomeRedirection = useCallback(() => {
    history.push("/");
  }, [history]);

  return (
    <Styled.Wrapper>
      <Styled.Title>
        La pire 404
        <span>EVER</span>
      </Styled.Title>
      <Styled.HomeButtonWrapper>
        <ButtonBase>
          <Styled.HomeButtonText onClick={handleHomeRedirection}>
            Home, sweet home
          </Styled.HomeButtonText>
        </ButtonBase>
      </Styled.HomeButtonWrapper>
    </Styled.Wrapper>
  );
};
