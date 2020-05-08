import styled from "styled-components";

import * as StyledRouter from "../router.styles";
import { theme } from "theme";
import { NavLink } from "react-router-dom";

export const Wrapper = styled(StyledRouter.Wrapper)`
  background: ${theme.colors.purpleToPink};
  padding: ${theme.spacing("XL-24")};
`;

export const Header = styled.header`
  display: flex;
  align-items: baseline;
  margin-bottom: ${theme.spacing("3XL-40")};
`;

export const Title = styled.h1`
  font-family: ${theme.fontFamilies.open};
  color: ${theme.colors.light000};
  margin: 0;
  font-size: 28px;
  font-weight: 400;
`;

export const CancelLink = styled(NavLink)`
  font-family: ${theme.fontFamilies.open};
  color: ${theme.colors.light000};
  margin-left: auto;
  font-size: 12px;
`;

export const Form = styled.form`
  margin-top: ${theme.spacing("XL-24")};
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0;
`;

export const InputWrapper = styled.div`
  margin-bottom: ${theme.spacing("M-16")};
`;

export const FooterContent = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-family: ${theme.fontFamilies.open};
  color: ${theme.colors.purple900};
  font-size: 16px;
  margin: 0;
`;

export const Placeholder = styled.div`
  height: 50px;
  width: 100%;
`;
