import React, { useCallback, useEffect } from "react";
import { ButtonBase } from "@material-ui/core";
import { unwrapResult } from "@reduxjs/toolkit";
import { useLocation, useHistory } from "react-router-dom";

import { useAppDispatch, useNotification } from "hooks";
import { userThunks } from "store";
import { IFetchUserWithTokenInput, isSuccessResponse } from "services";
import { localStorageManager } from "common-utils";
import * as Styled from "./must_auth.styles";

export const MustAuth = () => {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useAppDispatch();
  const { addNotification } = useNotification();

  const tokenFromUrl = location.pathname.split("/")[1];

  useEffect(() => {
    const getUserWithToken = async (payload: IFetchUserWithTokenInput) => {
      try {
        const resultAction = await dispatch(userThunks.getUserWithToken(payload));
        const result = unwrapResult(resultAction);

        if (isSuccessResponse(result)) {
          const user = result.data;

          addNotification({
            content: `Hello ${user.firstName.split(" ")[0]}`,
            title: "Connexion réussi",
            type: "success",
          });
          localStorageManager.authToken.set(payload.token);
        }
      } catch (err) {
        console.error(err);
        addNotification({
          content: "Veuillez rééssayer plus tard",
          title: "Erreur serveur",
          type: "error",
        });
      } finally {
        history.push("/");
      }
    };

    if (tokenFromUrl !== "") {
      getUserWithToken({ token: tokenFromUrl });
    }
  }, [addNotification, dispatch, history, tokenFromUrl]);

  // Redirige sur la page du serveur qui récupère le token utilisateur
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
