import React from "react";

import * as Styled from "./home-footer.styles";
import { NavLink } from "react-router-dom";

export const HomeFooter = () => {
  return (
    <Styled.Wrapper>
      <NavLink to="/add-todo">
        <Styled.PlusIcon>+</Styled.PlusIcon>
      </NavLink>
    </Styled.Wrapper>
  );
};
