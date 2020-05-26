import styled, { css } from "styled-components";

import { theme } from "theme";

const todoListPreviewMaxHeight = "150px";
const todoListPreviewPadding = theme.spacing("XS-8");

export const Wrapper = styled.div<{ isOnMobile: boolean; isLoadingEndedAndHasNoContent: boolean }>`
  margin-bottom: ${theme.spacing("XXL-32")};

  ${({ isOnMobile }) =>
    !isOnMobile &&
    css`
      display: flex;
      align-items: flex-start;
      flex-wrap: wrap;
      justify-content: space-between;
    `};

  ${({ isLoadingEndedAndHasNoContent }) =>
    isLoadingEndedAndHasNoContent &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
    `};
`;

export const EmptyTodoListsPreviewWrapper = styled.div`
  margin-bottom: ${theme.spacing("S-12")};
`;

export const TodoListsPreviewWrapper = styled.div`
  padding: ${theme.spacing("XL-24")};
  padding-top: 0;
`;

export const ButtonWrapper = styled.div<{ isOnMobile: boolean }>`
  margin-bottom: ${theme.spacing("M-16")};
  /* Permet de changer la couleur du ripple effect */
  color: ${theme.colors.pink600};
  height: ${todoListPreviewMaxHeight};

  .MuiButtonBase-root {
    text-align: left;
    width: 100%;
  }

  ${({ isOnMobile }) =>
    !isOnMobile &&
    css`
        width: 31%;
        max-width: 400px;
        margin-bottom: ${theme.spacing("XXL-32")};
    }
  `};
`;

export const TodosListPreviewWrapper = styled.div`
  background-color: ${theme.colors.light000};
  border-radius: 4px;
  padding: ${todoListPreviewPadding};
  width: 100%;
`;

// Styled component qui sert à faire fonctionner correctement l'overflow hidden avec un padding.
export const TodosListPreviewContentWrapper = styled.div`
  overflow: hidden;
  /* Permet d'avoir la bonne taille compte tenu du padding du parent */
  height: ${`calc(${todoListPreviewMaxHeight} - (${todoListPreviewPadding} * 2))`};
`;

export const EmptyWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const EmptyPreviewRendererText = styled.h2`
  color: ${theme.colors.light000};
  font-family: ${theme.fontFamilies.open};
  font-weight: 400;
  margin: 0;
  text-align: center;
`;
