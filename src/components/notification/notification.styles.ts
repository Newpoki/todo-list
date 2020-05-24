import styled from "styled-components";
import { theme } from "theme";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  margin-right: ${theme.spacing("S-12")};
`;

export const IconWrapper = styled.div`
  display: flex;
  margin-right: ${theme.spacing("S-12")};

  & .MuiSvgIcon-root {
    color: ${theme.colors.light000};
  }
`;

export const TitleAndContentWrapper = styled.div``;

export const Title = styled.p`
  margin: 0;
  margin-bottom: ${theme.spacing("XS-8")};
  color: ${theme.colors.light000};
  font-family: ${theme.fontFamilies.open};
  font-weight: 600;
`;

/** Wrapper du contenue de l'alerte */
export const ContentWrapper = styled.div`
  color: ${theme.colors.light000};
  font-family: ${theme.fontFamilies.open};
  margin-right: ${theme.spacing("M-16")};
  line-height: 1.4rem;
`;
