import styled from "styled-components";

import { theme } from "theme";

const todoListPreviewMaxHeight = "150px";
const todoListPreviewPadding = theme.spacing("XS-8");

export const TodoListsPreviewWrapper = styled.div`
  padding: ${theme.spacing("XL-24")};
  padding-top: 0;
`;

export const TodoListPreviewWrapper = styled.div`
  margin-bottom: 12px;
  background-color: ${theme.colors.light000};
  border-radius: 4px;
  max-height: ${todoListPreviewMaxHeight};
  padding: ${todoListPreviewPadding};
`;

// Styled component qui sert à faire fonctionner correctement l'overflow hidden avec un padding.
export const TodoListPreviewContentWrapper = styled.div`
  overflow: hidden;
  /* Permet d'avoir la bonne taille compte tenu du padding du parent */
  max-height: ${`calc(${todoListPreviewMaxHeight} - (${todoListPreviewPadding} * 2))`};
`;

export const EmptyPreviewRendererWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing("XL-24")};
`;

export const EmptyPreviewRendererText = styled.h2`
  color: ${theme.colors.light000};
  font-family: ${theme.fontFamilies.open};
  font-weight: 400;
  margin: 0;
  text-align: center;
`;
