import styled from "styled-components";

import { NavLink } from "react-router-dom";
import { theme } from "theme";

const linkColor = theme.colors.light900;

export const Wrapper = styled(NavLink)`
  color: ${linkColor};
  font-weight: 600;
  text-decoration: underline;
  font-family: ${theme.fontFamilies.open};

  :visited {
    color: ${linkColor};
  }
`;
