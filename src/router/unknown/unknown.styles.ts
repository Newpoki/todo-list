import styled, { css } from "styled-components";

import { theme } from "theme";
import * as StyledRouter from "../router.styles";

export const Wrapper = styled(StyledRouter.Wrapper)`
  background: ${theme.colors.purpleToPink};
  padding: ${theme.spacing("XL-24")};
`;

export const Title = styled.h1`
  margin: 0;
  text-align: center;
  color: ${theme.colors.light000};
  font-family: ${theme.fontFamilies.open};
  font-weight: 400;

  span {
    font-weight: 800;
    display: block;
  }
`;

export const HomeButtonWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  /* Couleur du ripple effect du ButtonBase */
  color: ${theme.colors.pink600};
`;

export const HomeButtonText = styled.span`
  padding: ${theme.spacing("S-12")};
  background-color: ${theme.colors.light000};
  color: ${theme.colors.purple900};
  font-family: ${theme.fontFamilies.open};
  font-size: 14px;
`;
