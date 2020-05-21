import { theme } from "theme";
import styled from "styled-components";

import * as StyledRouter from "../router.styles";
import * as StyledFooter from "components/footer/footer.styles";
import * as StyledHomePreviewRender from "./home-preview-renderer.styles";

export const Wrapper = styled(StyledRouter.Wrapper)`
  background: ${theme.colors.purpleToPink};
  padding: ${theme.spacing("XL-24")};
  padding-bottom: 0;

  ${StyledFooter.ContentWrapper} {
    align-items: center;
    justify-content: center;
  }

  ${StyledHomePreviewRender.Wrapper} {
    margin-bottom: ${theme.spacing("XXL-32")};
  }
`;

export const FooterPlaceholder = styled.div`
  height: 50px;
`;

export const FooterContent = styled.h2`
  color: ${theme.colors.purple900};
  font-family: ${theme.fontFamilies.open};
  font-size: 16px;
  margin: 0;
  font-weight: 400;
`;
