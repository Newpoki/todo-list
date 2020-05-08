import styled from "styled-components";

import { theme } from "theme";
import * as StyledRouter from "../router.styles";

export const Wrapper = styled(StyledRouter.Wrapper)`
  background: ${theme.colors.purpleToPink};
  padding: ${theme.spacing("XL-24")};
`;

export const TodosListContentWrapper = styled.div`
  margin-top: ${theme.spacing("XL-24")};
`;
