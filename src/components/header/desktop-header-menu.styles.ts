/** Imports NPM */
import styled from "styled-components";

/** Imports locaux */
// import * as StyledLink from "components/Link/Link.style";
import { makeStyles, createStyles } from "@material-ui/core";
import { theme } from "theme";

export const getDesktopHeaderMenuStyle = makeStyles(() =>
  createStyles({
    paper: {
      backgroundColor: theme.colors.light700,

      "& a.link-is-active .MuiListItemIcon-root": {
        color: theme.colors.blue500,
      },

      "& .MuiListItemIcon-root": {
        color: theme.colors.light000,
      },
    },
  })
);
/** Wrapper du composant DesktopHeaderMenu */
export const Wrapper = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

/** Wrapper de l'icone de l'avatar qui ouvre le menu des liens secondaires*/
export const UserAvatarWrapper = styled.div`
  cursor: pointer;
  margin-left: ${theme.spacing("S-12")};
`;

/** Wrapper des liens affiché dans la appbar du header */
export const HeaderMainLinksWrapper = styled.div`
  display: flex;

  /** Ajoute l'espace entre les liens principaux */
`;
/* & ${StyledLink.Wrapper} {
    margin-right: ${theme.spacing.s};
  } */

/** Wrapper du nom et de l'email de l'utilisateur */
export const UserAvatarFromMenuInfosWrapper = styled.div`
  margin-left: ${theme.spacing("XS-8")};
`;

/** Wrapper de l'email de l'utilisateur */
export const ProfilUserEmailWrapper = styled.div`
  font-size: 0.875rem;
`;

/** Wrapper du nom d'affichage de l'utilisateur */
export const ProfilUserDisplayNameWrapper = styled.div``;
