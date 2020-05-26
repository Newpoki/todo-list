import React from "react";
import { ToastContainer, ToastOptions, Slide } from "react-toastify";
import { useMediaQuery } from "@material-ui/core";

import { Router } from "./router";
import "react-toastify/dist/ReactToastify.css";
import { Route, Switch } from "react-router-dom";
import * as Styled from "./app.styles";
import { theme } from "theme";
import { SkeletonTheme } from "react-loading-skeleton";

const notificationDefaultOptions: ToastOptions = {
  position: "top-center",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  transition: Slide,
  rtl: false,
  pauseOnFocusLoss: true,
  draggable: true,
  pauseOnHover: true,
};

export const App = React.memo(() => {
  const isOnMobile = useMediaQuery("(max-width: 960px)");

  return (
    <SkeletonTheme color={theme.colors.light300} highlightColor={theme.colors.pink600}>
      <Styled.Wrapper>
        <ToastContainer
          style={{ width: isOnMobile ? "100%" : "auto" }}
          {...notificationDefaultOptions}
        />
        <Switch>
          <Route path="/" component={Router} />
        </Switch>
      </Styled.Wrapper>
    </SkeletonTheme>
  );
});
