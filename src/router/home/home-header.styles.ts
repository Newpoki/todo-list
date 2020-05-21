import styled, { css } from "styled-components";

import { theme } from "theme";

export const Wrapper = styled.header<{ isOnMobile: boolean }>`
  margin-bottom: ${theme.spacing("L-20")};
  display: flex;
  flex-direction: column;

  ${({ isOnMobile }) =>
    !isOnMobile &&
    css`
      align-items: center;
      margin-bottom: ${theme.spacing("3XL-40")};
    `}
`;

export const Title = styled.h1<{ isOnMobile: boolean }>`
  font-family: ${theme.fontFamilies.roboto};
  font-weight: 400;
  margin: 0;
  font-size: 22px;
  color: ${theme.colors.light000};
  margin-bottom: ${theme.spacing("XS-8")};

  ${({ isOnMobile }) =>
    !isOnMobile &&
    css`
      font-size: 40px;
    `}
`;

export const TotalTodosListsNumber = styled.h2<{ isOnMobile: boolean }>`
  font-family: ${theme.fontFamilies.open};
  font-weight: 400;
  margin: 0;
  font-size: 14px;
  color: ${theme.colors.light000};

  strong {
    font-weight: 700;
  }

  ${({ isOnMobile }) =>
    !isOnMobile &&
    css`
      font-size: 20px;
    `}
`;
