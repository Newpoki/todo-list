import React, { memo } from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

import { useUser } from "hooks";

/**
 * Composant OnlyPublicRoute qui affiche le compoosant demandé seulement si l'utilisateur n'est pas connecté
 * Sinon redirige vers la home de l'app
 * @prop children - ReactNode - Composant affiché par la route
 */
export const OnlyPublicRoute = memo(({ render, ...others }: RouteProps) => {
  const { userData } = useUser();

  return (
    <Route
      {...others}
      render={({ location, history, match }) =>
        userData.id === "" ? (
          render && render({ location, history, match })
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
});
