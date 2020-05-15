/** Imports NPM */
import React, { memo } from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

/** Imports locaux */
import { IMobileHeaderMenuProps } from "./mobile-header-menu.interfaces";
// import { Link } from "../../../components/Link";
import * as Styled from "./mobile-header-menu.styles";
import { getMainHeaderLinks } from "./get-main-header-links";
import { NavLink } from "react-router-dom";

const mainHeaderLinks = getMainHeaderLinks();

/**
 * Composant <MobileHeaderMenu /> qui affiche le menu de l'application en mobile
 * @param isOpen - boolean - Determine si le menu est ouvert
 * @param onClose - () => void - Callback qui ferme le menu
 * @param user - IUser - Utilisateur connecté
 */
export const MobileHeaderMenu = memo(({ isOpen, onClose, user }: IMobileHeaderMenuProps) => {
  const classes = Styled.getMobileHeaderMenuStyle();

  return (
    <Drawer open={isOpen} onClose={onClose} PaperProps={{ className: classes.root }}>
      <List className={classes.list}>
        {mainHeaderLinks.map((link) => (
          <NavLink to={link.to} onClick={onClose} key={link.to}>
            <ListItem>
              <ListItemIcon>
                <link.icon />
              </ListItemIcon>
              <ListItemText>{link.label}</ListItemText>
            </ListItem>
          </NavLink>
        ))}

        <Styled.BottomLinksWrapper>
          <Divider />
          <NavLink to="/profile" onClick={onClose}>
            <ListItem>
              <ListItemIcon>
                {/* <UserAvatar picture={user.picture} /> */}
                <img src={user.photoUrl} alt="user avatar" />
              </ListItemIcon>
              <ListItemText>headerMenuLinkProfile</ListItemText>
            </ListItem>
          </NavLink>
          <NavLink to="/logout" onClick={onClose}>
            <ListItem>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText>headerMenuLinkLogout</ListItemText>
            </ListItem>
          </NavLink>
        </Styled.BottomLinksWrapper>
      </List>
    </Drawer>
  );
});
