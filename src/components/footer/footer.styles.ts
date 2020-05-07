import styled, { css } from "styled-components";

import { theme } from "theme";

export const Wrapper = styled.footer<{ isDisabled: boolean }>`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 50px;
  width: 100%;
  background-color: ${theme.colors.light000};
  transition: 0.3s;

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      background-color: lightgrey;
      opacity: 0.5;
    `}
`;

export const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const IconWrapper = styled.div<{ isDisabled: boolean }>`
  position: fixed;
  right: ${theme.spacing("XL-24")};
  border-radius: 50%;
  display: flex;
  align-items: center;
  width: 50px;
  height: 50px;
  justify-content: center;
  font-size: 36px;
  bottom: 25px;
  background-color: ${theme.colors.light000};
  cursor: pointer;
  transition: 0.3s;

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      background-color: lightgrey;
      opacity: 0.5;
      cursor: initial;
    `}
`;
