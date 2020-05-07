import styled from "styled-components";

import { theme } from "theme";

export const Wrapper = styled.footer`
  height: 50px;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: ${theme.colors.light000};
`;

export const PlusIcon = styled.span`
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
`;
