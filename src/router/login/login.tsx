import React, { useCallback } from "react";
import { ButtonBase } from "@material-ui/core";

import * as Styled from "./login.styles";
import { useUser } from "hooks";

export const Login = () => {
  const { startConnection } = useUser();

  const handleConnection = useCallback(() => {
    startConnection();
  }, [startConnection]);

  return (
    <Styled.Wrapper>
      <Styled.Title>todo-bem</Styled.Title>
      <Styled.Description>
        <span>Une application simple de liste </span>
        <span>pour ne plus rien oublier.</span>
      </Styled.Description>
      <Styled.GoogleAuthentButtonWrapper>
        <ButtonBase onClick={handleConnection}>
          <Styled.GoogleAuthentText>Connexion avec Google</Styled.GoogleAuthentText>
        </ButtonBase>
      </Styled.GoogleAuthentButtonWrapper>
    </Styled.Wrapper>
  );
};