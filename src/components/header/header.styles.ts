import styled from "styled-components";
import { makeStyles, createStyles } from "@material-ui/core";
import { CSSProperties } from "@material-ui/core/styles/withStyles";

import { theme } from "theme";
import * as StyledLink from "../link/link.styles";

export const getHeaderStyle = makeStyles((materialTheme) =>
  createStyles({
    appBar: {
      backgroundColor: theme.colors.light700,
      borderBottom: `1px solid ${theme.colors.light000}`,
    },
    appMenuIcon: {
      color: theme.colors.pink600,
    },
    offset: materialTheme.mixins.toolbar as CSSProperties,
  })
);

/** Styled component qui affiche le lien qui contient le nom de l'application dans le <Header /> */
export const AppName = styled.div`
  /** Laisse le lien affichant le nom de l'application dans le header en blanc
   *  même si c'est la route actuelle */
  ${StyledLink.Wrapper} {
    color: ${theme.colors.light000};
  }
`;
