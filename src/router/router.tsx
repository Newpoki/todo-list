import React from "react";

import { useAuth } from "hooks";
import { NotAuth } from "./not_auth/not_auth";
import { MustAuth } from "./must_auth/must_auth";
import { App } from "./app/app";

export const Router = (): JSX.Element => {
  const { state } = useAuth();

  return (
    <>
      {state === "NOT_AUTH" && <NotAuth />}
      {state === "MUST_AUTH" && <MustAuth />}
      {state === "AUTH" && <App />}
    </>
  );
};
