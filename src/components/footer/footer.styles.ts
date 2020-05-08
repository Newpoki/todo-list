import styled, { css } from "styled-components";

import { theme } from "theme";

// Style commun au wrapper et au wrapper de l'icone
const disabledStyle = css`
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
