import { theme } from "theme";
import styled from "styled-components";

import * as StyledRouter from "../router.styles";

export const Wrapper = styled(StyledRouter.Wrapper)`
  background: ${theme.colors.purpleToPink};
`;

export const TodoListsPreviewWrapper = styled.div`
  padding: ${theme.spacing("XL-24")};
  padding-top: 0;
`;

export const TodoListPreviewWrapper = styled.div`
  margin-bottom: 12px;
  background-color: ${theme.colors.light000};
  border-radius: 4px;
  max-height: 120px;
  overflow: hidden;
`;
