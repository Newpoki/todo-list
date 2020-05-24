import React from "react";
import { ToastContainer, ToastOptions, Slide } from "react-toastify";
import { useMediaQuery } from "@material-ui/core";

import { Router } from "./router";
import "react-toastify/dist/ReactToastify.css";
import { Route, Switch } from "react-router-dom";

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
    <>
      <ToastContainer
        style={{ width: isOnMobile ? "100%" : "auto" }}
        {...notificationDefaultOptions}
      />
      {/* <Router /> */}
      <Switch>
        <Route path="/" component={Router} />
      </Switch>
    </>
  );
});
