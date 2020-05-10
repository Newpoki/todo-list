/** Imports NPM */
import React, { memo } from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

/** Imports locaux */
import { useUser } from "hooks";

/**
 * Composant PrivateRoute qui affiche le composant demandé seulement si l'utilisateur est connecté
 * @prop children - ReactNode - Composant à afficher si l'utilisateur est connecté
 */
export const OnlyPrivateRoute = memo(({ render, ...others }: RouteProps) => {
  const { userData } = useUser();

  return (
    <Route
      {...others}
      render={({ location, history, match }) =>
        userData.id !== "" ? (
          render && render({ location, history, match })
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
});
