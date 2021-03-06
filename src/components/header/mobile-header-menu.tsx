import React, { memo } from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from "@material-ui/core";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";

import { IMobileHeaderMenuProps } from "./mobile-header-menu.interfaces";
import * as Styled from "./mobile-header-menu.styles";

/**
 * Composant <MobileHeaderMenu /> qui affiche le menu de l'application en mobile
 * @param isOpen - boolean - Determine si le menu est ouvert
 * @param onClose - () => void - Callback qui ferme le menu
 * @param user - IUser - Utilisateur connecté
 */
export const MobileHeaderMenu = memo(
  ({ isOpen, onClose, user, onDisconnect }: IMobileHeaderMenuProps) => {
    const classes = Styled.getMobileHeaderMenuStyle();

    return (
      <Drawer open={isOpen} onClose={onClose} PaperProps={{ className: classes.root }}>
        <Styled.Wrapper>
          <Styled.AvatarWrapper>
            <Styled.Avatar src={user.image} alt="Your avatar" />
            <Styled.DisplayName>{user.firstName}</Styled.DisplayName>
            <Styled.Email>{user.email}</Styled.Email>
          </Styled.AvatarWrapper>

          <List className={classes.list}>
            <Styled.BottomLinksWrapper>
              <Divider className={classes.divider} />
              <ListItem onClick={onDisconnect} className={classes.logoutItem} button>
                <ListItemIcon className={classes.logoutIcon}>
                  <PowerSettingsNewIcon />
                </ListItemIcon>
                <ListItemText className={classes.logoutItemText}>Déconnexion</ListItemText>
              </ListItem>
            </Styled.BottomLinksWrapper>
          </List>
        </Styled.Wrapper>
      </Drawer>
    );
  }
);
