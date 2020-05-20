import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useMemo, useCallback } from "react";

import { getUserGetRequestStatus, getUserData, userThunks, getUserToken, userActions } from "store";
import { localStorageManager } from "common-utils";
import { IFetchUserWithTokenInput, isSuccessResponse } from "services";
import { unwrapResult } from "@reduxjs/toolkit";
import { useAppDispatch } from "./use-app-dispatch";
import { useNotification } from "./use-notification";

export const useUser = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const userData = useSelector(getUserData);
  const getRequestStatus = useSelector(getUserGetRequestStatus);
  const token = useSelector(getUserToken);
  const { addNotification } = useNotification();

  /** Récupère les données utilisateurs via le token et stock / supprime le token du local storage */
  const getUserWithToken = useCallback(
    async (payload: IFetchUserWithTokenInput) => {
      try {
        const resultAction = await dispatch(userThunks.getUserWithToken(payload));
        const result = unwrapResult(resultAction);

        if (isSuccessResponse(result)) {
          const user = result.data;

          addNotification({
            content: `Hello ${user.firstName.split(" ")[0]}`,
            title: "Connexion réussi",
            type: "success",
          });
          localStorageManager.userToken.set(payload.token);
        }
      } catch (err) {
        addNotification({
          content: "Veuillez vous reconnecter",
          title: "Session expirée",
          type: "error",
        });
        localStorageManager.userToken.remove();
        history.push("/login");
      }
    },
    [addNotification, dispatch, history]
  );

  const handleDisconnection = useCallback(() => {
    dispatch(userActions.disconnect());

    localStorageManager.userToken.remove();
    history.push("/login");
  }, [dispatch, history]);

  return useMemo(
    () => ({
      getUserWithToken,
      handleDisconnection,
      getRequestStatus,
      userData,
      token,
    }),
    [getUserWithToken, handleDisconnection, getRequestStatus, userData, token]
  );
};
