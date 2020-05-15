/** Imports NPM */
import styled from "styled-components";
import { makeStyles, createStyles } from "@material-ui/core";
import { CSSProperties } from "@material-ui/core/styles/withStyles";

/** Imports locaux */
import { theme } from "theme";
// import * as StyledLink from "components/Link/Link.style";

export const getHeaderStyle = makeStyles((materialTheme) =>
  createStyles({
    appBar: {
      backgroundColor: theme.colors.light700,
      borderBottom: `1px solid ${theme.colors.light000}`,
      /** 1 de plus que le Zindex du Tab de la saisie de CRA */
      zIndex: 1101,
    },
    appMenuIcon: {
      color: theme.colors.blue500,
    },
    offset: materialTheme.mixins.toolbar as CSSProperties,
  })
);

/** Styled component qui affiche le lien qui contient le nom de l'application dans le <Header /> */
export const AppName = styled.div`
  /** Laisse le lien affichant le nom de l'application dans le header en blanc
   *  même si c'est la route actuelle
  */
  .link-is-active {
    color: ${theme.colors.light000};
  }
`;
