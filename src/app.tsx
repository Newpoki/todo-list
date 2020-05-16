import React from "react";
import { Router } from "./router";
import { ToastContainer, ToastOptions, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useMediaQuery } from "@material-ui/core";

const testLol = async () => {
  const token =
    "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInRoaXJkUGFydHlJZCI6IjExNjgyOTMxNTg2Njg1OTQ4NDkwNSIsInByb3ZpZGVyIjoiZ29vZ2xlIiwiaWF0IjoxNTg5NTgzNjMyLCJleHAiOjE1ODk1ODcyMzJ9.Fo5oV9-IfTuGU18nbftSRkr5JzuBSYKH_VGsOQqKmmUh9nJI-WSCIzmYitJ6YAArxDCw4RqtGKjsF0Az4y9nfqi8UrOS9q6bYGbYdDN2c_ll9A0ZfeueDYUSUck0xI7gh6Labq3EPvhBfk3I6EFwHkjr3I4-BmIpR0SC6KSmg8FJhaM35-t6Q3j1nuo828XKbY8OHURMsiptEu1Zg3Ss3tP6dQpgxDer8GBdPxElZ3GcjqXNOUf4-EgIaDviHdprHQyyWj_6ApWYRz5MzUUqcCcHpItY37zWkQx7nQk1UxrUaeV-P6LTQiqeQLRrzNcH5RbAaUKzl-ckqpvpX6y9J-iCOwUbwk-N_5wzKbSLYrFovizFG-tEN0oyyDKw-NToXQVZeznxkhJoHDEbOI2UdpBYU2H0TB2KFndlG2ZU48D8mKhDB1NNs8w7mZRNk6BXqk5jDywq5nABOol52kUHAJ3u5L-MJNpfXR1UOLhdZhpDeKNHV8M9DpQKXWRvBVi-3mnnkfR4kDWkN10xwtv-Qs6tlw5sBtqjcsFeWgf2gGplQwIFMWhZknvI0hk4AeA4mcnJXo82Sv1YmmQIzJ3wFmFBBYYrB82jRQ8BSGf72UI9KUM-JFt8_Mldk9ZZPew95uD01ETalVDgAJFBeJelPRYkPyWqx-z-iRy0wZTkcOo";
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
      <Router />
    </>
  );
});
