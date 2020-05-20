import React, { useCallback, useEffect } from "react";
import { ButtonBase } from "@material-ui/core";

import * as Styled from "./login.styles";
import { RouteComponentProps } from "react-router-dom";
import { useUser } from "hooks";

export const Login = ({ location }: RouteComponentProps<{ token: string }>) => {
  const { userData, getRequestStatus, getUserWithToken, token: tokenFromStore } = useUser();

  const tokenFromUrl = location.pathname.split("/")[2];
  // Le token peut être stocker dans le store lorsque l'appli est initialisé avec un token dans le localstorage
  // Ou bien dans l'url lors d'une redirection en succès après que l'utilisateur se soit authentifié
  const token = tokenFromUrl ?? tokenFromStore;

  // Si on a un token dans l'url ou le store, on requête les données du joueur
  useEffect(() => {
    if (token && userData.id === 0 && getRequestStatus === "NOT_CALLED") {
      getUserWithToken({ token });
    }
  }, [getRequestStatus, getUserWithToken, token, userData.id]);

  const handleGoogleRedirection = useCallback(() => {
    window.location.href = "http://localhost/google";
  }, []);

  // On ne veut pas afficher l'écran de chargement à l'utilisateur pendant la récupération des données
  if (getRequestStatus === "PENDING") {
    return null;
  }

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
