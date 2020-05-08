import React, { useCallback, MouseEvent } from "react";

import * as Styled from "./footer.styles";
import { IFooterProps } from "./footer.interfaces";
import { ButtonBase } from "@material-ui/core";

export const Footer = ({ children, onClick, isDisabled = false }: IFooterProps) => {
  const handleClick = useCallback(
    (evt: MouseEvent<HTMLDivElement>) => {
      !isDisabled && onClick(evt);
    },
    [isDisabled, onClick]
  );

  return (
    <Styled.Wrapper onClick={handleClick} isDisabled={isDisabled}>
      <ButtonBase style={{ width: "100%" }}>
        <Styled.ContentWrapper>{children}</Styled.ContentWrapper>
      </ButtonBase>
    </Styled.Wrapper>
  );
};
