import styled from "styled-components";

import { theme } from "theme";
import * as StyledRouter from "../router.styles";

export const Wrapper = styled(StyledRouter.Wrapper)`
  background: ${theme.colors.purpleToPink};
  padding: ${theme.spacing("XL-24")};
`;
