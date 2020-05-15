/** Imports NPM */
import { createStyles, makeStyles } from "@material-ui/core";
import styled from "styled-components";

/** Imports locaux */
import { theme } from "theme";

export const getMobileHeaderMenuStyle = makeStyles(() =>
  createStyles({
    root: {
      backgroundColor: theme.colors.light700,

      "& a.link-is-active .MuiListItemIcon-root": {
        color: theme.colors.blue500
      },

      "& .MuiListItemIcon-root": {
        color: theme.colors.light000
      }
    },
    list: {
      flex: 1,
      display: "flex",
      flexDirection: "column"
    }
  })
);

export const BottomLinksWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
