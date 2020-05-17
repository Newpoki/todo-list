import React, { useCallback, useEffect } from "react";
import { ButtonBase } from "@material-ui/core";

import * as Styled from "./login.styles";
import { RouteComponentProps } from "react-router-dom";
import { useUser } from "hooks";

export const Login = ({ history }: RouteComponentProps) => {
  const { token, userData, getRequestStatus } = useUser();

  // Si on a un token dans le store, on redirige vers la page de succès qui requête les données du joueur
  useEffect(() => {
    if (token && userData.id === 0 && getRequestStatus !== "ERROR") {
      history.push(`/login/success/${token}`);
    }
  }, [getRequestStatus, history, token, userData.id]);

  const handleGoogleRedirection = useCallback(() => {
    window.location.href = "http://localhost/google";
  }, []);

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
