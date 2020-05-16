import React from "react";

import { theme } from "theme";
import * as Styled from "./link.styles";
import { ILinkProps } from "./link.interfaces";

export const Link = ({ to, children, className = "" }: ILinkProps) => {
  return (
    <Styled.Wrapper
      to={to}
      className={className}
      activeClassName={theme.constants.linkActiveClassName}
    >
      {children}
    </Styled.Wrapper>
  );
};
