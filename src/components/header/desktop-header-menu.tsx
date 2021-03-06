import React, { useState, useCallback, MouseEvent, memo } from "react";
import { Menu, ListItem, ListItemIcon, ListItemText, Divider } from "@material-ui/core";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";

import * as Styled from "./desktop-header-menu.styles";
import { IDesktopHeaderMenuProps } from "./desktop-header-menu.interfaces";

/**
 * Composant <MobileHeaderMenu /> qui affiche le menu de l'application en desktop
 * @param user - IUser - Utilisateur actuellement connecté
 */
export const DesktopHeaderMenu = memo(({ user, onDisconnect }: IDesktopHeaderMenuProps) => {
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
      <Styled.AvatarWrapper onClick={handleUserAvatarClick}>
        <Styled.Avatar src={user.image} alt="Your avatar" />
      </Styled.AvatarWrapper>

      <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        PaperProps={{ className: classes.paper }}
        MenuListProps={{ className: classes.list }}
        open={!!anchorEl}
        onClose={handleClose}
      >
        <div>
          <ListItem onClick={handleClose} className={classes.profilInfosItem}>
            <ListItemIcon className={classes.avatarInMenuWrapper}>
              <Styled.AvatarFromMenuInfos src={user.image} alt="Your avatar" />
            </ListItemIcon>
            <ListItemText>
              <Styled.DisplayNameAndEmailWrapper>
                <Styled.DisplayName>{user.firstName}</Styled.DisplayName>
                <Styled.Email>{user.email}</Styled.Email>
              </Styled.DisplayNameAndEmailWrapper>
            </ListItemText>
          </ListItem>

          <Divider className={classes.divider} />
          <ListItem onClick={onDisconnect} className={classes.logoutItem} button>
            <ListItemIcon className={classes.logoutIcon}>
              <PowerSettingsNewIcon />
            </ListItemIcon>
            <ListItemText className={classes.logoutItemText}>Déconnexion</ListItemText>
          </ListItem>
        </div>
      </Menu>
    </Styled.Wrapper>
  );
});
