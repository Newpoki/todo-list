/** Imports NPM */
import React, { useState, useCallback, MouseEvent, memo } from "react";
import { Menu, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

/** Imports locaux */
// import { Link } from "components";
import { getMainHeaderLinks } from "./get-main-header-links";
import * as Styled from "./desktop-header-menu.styles";
import { IDesktopHeaderMenuProps } from "./desktop-header-menu.interfaces";
import { NavLink } from "react-router-dom";
// import { UserAvatar } from "components/UserAvatar";

const mainHeaderLinks = getMainHeaderLinks();

/**
 * Composant <MobileHeaderMenu /> qui affiche le menu de l'application en desktop
 * @param user - IUser - Utilisateur actuellement connecté
 */
export const DesktopHeaderMenu = memo(({ user }: IDesktopHeaderMenuProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
  const classes = Styled.getDesktopHeaderMenuStyle();

  /** Callback qui ouvre le menu secondaire au click de l'icone utilisateur */
  const handleUserAvatarClick = useCallback((evt: MouseEvent<HTMLDivElement>) => {
    setAnchorEl(evt.currentTarget);
  }, []);

  /** Callback qui ferme le menu secondaire */
  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  return (
    <Styled.Wrapper>
      <Styled.HeaderMainLinksWrapper>
        {mainHeaderLinks.map((link) => (
          <NavLink to={link.to} key={link.to}>
            {link.label}
          </NavLink>
        ))}
      </Styled.HeaderMainLinksWrapper>
      <Styled.UserAvatarWrapper onClick={handleUserAvatarClick}>
        <img src={user.photoUrl} alt="user avatar" />
      </Styled.UserAvatarWrapper>

      <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        PaperProps={{ className: classes.paper }}
        open={!!anchorEl}
        onClose={handleClose}
      >
        <div>
          <NavLink to="/profile">
            <ListItem onClick={handleClose}>
              <ListItemIcon>
                {/* <UserAvatar picture={user.picture} size="large" /> */}
                <img src={user.photoUrl} alt="user avatar" />
              </ListItemIcon>
              <ListItemText>
                <Styled.UserAvatarFromMenuInfosWrapper>
                  <Styled.ProfilUserDisplayNameWrapper>
                    {user.displayName}
                  </Styled.ProfilUserDisplayNameWrapper>
                  <Styled.ProfilUserEmailWrapper>{user.email}</Styled.ProfilUserEmailWrapper>
                </Styled.UserAvatarFromMenuInfosWrapper>
              </ListItemText>
            </ListItem>
          </NavLink>

          <NavLink to="/logout">
            <ListItem onClick={handleClose}>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText>headerMenuLinkLogout</ListItemText>
            </ListItem>
          </NavLink>
        </div>
      </Menu>
    </Styled.Wrapper>
  );
});
