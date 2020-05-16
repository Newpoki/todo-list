import React, { useCallback, useEffect } from "react";
import { ButtonBase } from "@material-ui/core";

import * as Styled from "./login.styles";
import { RouteComponentProps } from "react-router-dom";

export const Login = (props: RouteComponentProps) => {
  const handleGoogleRedirection = useCallback(() => {
    window.location.href = "http://localhost/google";
  }, []);

  useEffect(() => {
    console.log(props);
  }, [props]);

  return (
    <Styled.Wrapper>
      <Styled.Title>todo-bem</Styled.Title>
      <Styled.Description>
        <span>Une application simple de liste </span>
        <span>pour ne plus rien oublier.</span>
      </Styled.Description>
      <Styled.GoogleAuthentButtonWrapper>
        <ButtonBase onClick={handleGoogleRedirection}>
          <Styled.GoogleAuthentText>Connexion avec Google</Styled.GoogleAuthentText>
        </ButtonBase>
      </Styled.GoogleAuthentButtonWrapper>
    </Styled.Wrapper>
  );
};
