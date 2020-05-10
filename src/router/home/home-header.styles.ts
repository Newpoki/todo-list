import styled from "styled-components";

import { theme } from "theme";

export const Wrapper = styled.header`
  margin-bottom: ${theme.spacing("L-20")};
`;

export const Title = styled.h1`
  font-family: "Open sans";
  font-weight: 400;
  margin: 0;
  font-size: 22px;
  color: ${theme.colors.light000};
  margin-bottom: ${theme.spacing("XS-8")};
`;

export const TotalTodosListsNumber = styled.h2`
  font-family: "Open sans";
  font-weight: 400;
  margin: 0;
  font-size: 14px;
  color: ${theme.colors.light000};

  strong {
    font-weight: 700;
  }
`;
