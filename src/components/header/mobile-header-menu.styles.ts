import { createStyles, makeStyles } from "@material-ui/core";
import styled from "styled-components";

import * as StyledLink from "../link/link.styles";
import { theme } from "theme";

export const getMobileHeaderMenuStyle = makeStyles(() =>
  createStyles({
    root: {
      "& .MuiListItemIcon-root": {
        color: theme.colors.light000,
      },

      minWidth: "300px",
    },
    list: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      padding: "0",
    },
    bottomListItem: {
      justifyContent: "center",
    },
    logoutIcon: {
      minWidth: 0,
      marginRight: theme.spacing("XS-8"),
    },
    divider: {
      background: theme.colors.purpleToPink,
    },
  })
);

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.light700};
  padding-top: ${theme.spacing("XXL-32")};

  ${StyledLink.Wrapper}, ${StyledLink.Wrapper}:visited {
    color: ${theme.colors.light000};
    display: flex;
    align-items: center;

    ${theme.constants.linkActiveClassName} {
      color: ${theme.colors.pink500};
    }
  }
`;

export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
`;

export const DisplayName = styled.p`
  margin: 0;
  margin-top: ${theme.spacing("XL-24")};
  font-family: ${theme.fontFamilies.roboto};
  color: ${theme.colors.light000};
`;

export const Email = styled.p`
  margin: 0;
  font-family: ${theme.fontFamilies.roboto};
  color: ${theme.colors.light000};
`;

export const BottomLinksWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
