import React from "react";
import { Router } from "./router";
import { ToastContainer, ToastOptions, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useMediaQuery } from "@material-ui/core";

const testLol = async () => {
  const token =
    "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInRoaXJkUGFydHlJZCI6IjExNjgyOTMxNTg2Njg1OTQ4NDkwNSIsInByb3ZpZGVyIjoiZ29vZ2xlIiwiaWF0IjoxNTg5NTcyMDk4LCJleHAiOjE1ODk1NzU2OTh9.hzaaEHYOqyXnZ22m7Hqr4mtg6oiZVS-1wjH-TAcCirlEu7HcDZhqBF0L4iO-UxpzRzuKkLBSXJQrP6nWDH-kDB46Pn7bUbgCzSJNC9jjG1-sT3O5gUEWuWmvUFE4qAh4Wtjz00P15mkHCMS8V2TpPg6wkO7fbv__qMjBwzUojuZyr2xkSmSW84sydpuLRz1fR89kJag5do4DswtD5uo-PILx3uz3JWMZ_we7SecL24F5KVP6fdXzaUKfs3eZTiNy2SaMHHRJ7Tm1cYmE4zulCOpZGWo0j7m_70QMy6KTKwzS2QQlaxQtKobt9AxRxZhPwjKTjmpeXb68P4a4L_vIYsR1t9TVHT4MG6ORR3kgzSNFdRDZUzgFZ6p6qO7uargQgPOdLgSSzfIp4g9Vs5_Uwgqddlya1uK7gk71bVSJ7yAnQVD7lj76DwqLYeqYUTSblQUgEXEXvcpvcOzFK99NUMTtNQhFWdqoTmACe4ODHmYi0rueeROhoVlaP949Hrg9IviH7bPKtqXbsydPX2uNxpltfd3ePpF4S5UZdt5IfIFEYszkfMYqOkvM2SnbhYIAiBKMUaUqUDpE_I9mbtfK_KEERKYikGCYCF8J05OhVhh_I7s0JNBH1QSGoNjCNZp_1hDXsZGMkbUD2cgeZ5r_1NIBz8BlqbOFXI_YBVUPMhc";

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const test = await axios.get("http://localhost/todolists/", config);
  console.log(test);
  return test;
};

const notificationDefaultOptions: ToastOptions = {
  position: "top-center",
  autoClose: 3000,
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
      <Router />
    </>
  );
});
