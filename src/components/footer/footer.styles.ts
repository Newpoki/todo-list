import styled, { css } from "styled-components";

import { theme } from "theme";

// Style commun au wrapper et au wrapper de l'icone
const disabledStyle = css`
  background-color: lightgrey;
  opacity: 0.5;
`;

export const Wrapper = styled.footer<{ isDisabled: boolean }>`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 50px;
  width: 100%;
  background-color: ${theme.colors.light000};
  transition: 0.3s;
  cursor: pointer;
  cursor: initial;

  ${({ isDisabled }) => isDisabled && disabledStyle}
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
  transition: 0.3s;

  ${({ isDisabled }) => isDisabled && disabledStyle}
`;
