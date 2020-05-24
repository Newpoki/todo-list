import { useSelector } from "react-redux";
import { useMemo, useCallback } from "react";
import { useHistory } from "react-router-dom";

import { getAuthState, getAuthToken, authActions } from "store";
import { localStorageManager } from "common-utils";
import { useAppDispatch } from "./use-app-dispatch";

export const useAuth = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const state = useSelector(getAuthState);
  const token = useSelector(getAuthToken);

  const handleDisconnection = useCallback(() => {
    dispatch(authActions.disconnect());

    localStorageManager.authToken.remove();
    history.push("/");
  }, [dispatch, history]);

  return useMemo(
    () => ({
      state,
      token,
      handleDisconnection,
    }),
    [state, token, handleDisconnection]
  );
};
