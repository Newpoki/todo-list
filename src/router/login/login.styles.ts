import styled, { css } from "styled-components";

import * as StyledRouter from "../router.styles";
import { theme } from "theme";

const titlesCommonStyles = css`
  margin: 0;
  color: ${theme.colors.light000};
  font-family: ${theme.fontFamilies.open};
  text-align: center;
`;

export const Wrapper = styled(StyledRouter.Wrapper)`
  background: ${theme.colors.purpleToPink};
  padding: ${theme.spacing("XL-24")};
`;

export const Title = styled.h1`
  ${titlesCommonStyles};
  font-variant: small-caps;
  font-weight: 600;
  font-size: 48px;
  margin-top: ${theme.spacing("M-16")};
  margin-bottom: ${theme.spacing("M-16")};
`;

export const Description = styled.h2`
  ${titlesCommonStyles};
  font-weight: 400;
  font-size: 20px;
`;

export const GoogleAuthentButtonWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  /* Couleur du ripple effect du ButtonBase */
  color: ${theme.colors.pink600};
`;

export const GoogleAuthentText = styled.div`
  padding: ${theme.spacing("S-12")};
  background-color: ${theme.colors.light000};
  color: ${theme.colors.purple900};
  font-family: ${theme.fontFamilies.open};
  font-size: 14px;
`;
