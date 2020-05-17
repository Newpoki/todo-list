import styled from "styled-components";
import { makeStyles, createStyles } from "@material-ui/core";

import { theme } from "theme";

export const getDesktopHeaderMenuStyle = makeStyles(() =>
  createStyles({
    paper: {
      backgroundColor: theme.colors.light700,
    },
    list: {
      padding: 0,
    },
    profilInfosItem: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatarInMenuWrapper: {
      marginTop: theme.spacing("XS-8"),
    },
    divider: {
      background: theme.colors.purpleToPink,
    },
    logoutIcon: {
      minWidth: 0,
      marginRight: theme.spacing("XS-8"),
      color: theme.colors.light000,
    },

    logoutItem: {
      justifyContent: "center",
      color: theme.colors.pink600,
      display: "flex",
      alignItems: "center",
    },

    logoutItemText: {
      color: theme.colors.light000,
    },

    logoutLink: {},
  })
);
export const Wrapper = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

export const AvatarWrapper = styled.div`
  cursor: pointer;
  margin-left: ${theme.spacing("S-12")};
`;

export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

export const AvatarFromMenuInfos = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 50%;
`;

export const DisplayNameAndEmailWrapper = styled.div`
  margin-top: ${theme.spacing("M-16")};
  margin-bottom: ${theme.spacing("M-16")};
`;

export const Email = styled.p`
  margin: 0;
  font-size: 14px;
  text-align: center;
  color: ${theme.colors.light000};
`;

export const DisplayName = styled.p`
  margin: 0;
  text-align: center;
  color: ${theme.colors.light000};
`;
