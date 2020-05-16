/** Imports NPM */
import React, { memo, useState, useCallback, useEffect } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { AppBar, Toolbar, IconButton, useMediaQuery, useTheme } from "@material-ui/core";

/** Imports locaux */
import * as Styled from "./header.styles";
import { MobileHeaderMenu } from "./mobile-header-menu";
import { Link } from "components";
import { DesktopHeaderMenu } from "./desktop-header-menu";
import { IHeaderProps } from "./header.interfaces";

/** Header affiché sur les routes où l'utilisateur est connecté */
export const Header = memo(({ user }: IHeaderProps) => {
  const materialTheme = useTheme();
  const classes = Styled.getHeaderStyle();
  const [isMobileMenuOpen, changeIsMobileMenuOpen] = useState(false);
  const isOnMobile = useMediaQuery(materialTheme.breakpoints.down("sm"));

  /** Callback qui ferme le menu de l'application */
  const handleMobileMenuClose = useCallback(() => {
    changeIsMobileMenuOpen(false);
  }, []);

  /** Ferme le menu automatiquement lorsqu'on passe en vue desktop */
  useEffect(() => {
    if (!isOnMobile) {
      handleMobileMenuClose();
    }
  }, [isOnMobile, handleMobileMenuClose]);

  return (
    <>
      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar>
          {isOnMobile && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => changeIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <MenuIcon className={classes.appMenuIcon} />
            </IconButton>
          )}
          <Styled.AppName>
            <Link to="/">todo-bem</Link>
          </Styled.AppName>
          {!isOnMobile && <DesktopHeaderMenu user={user} />}
        </Toolbar>
      </AppBar>
      {isOnMobile && (
        <MobileHeaderMenu isOpen={isMobileMenuOpen} onClose={handleMobileMenuClose} user={user} />
      )}
    </>
  );
});
