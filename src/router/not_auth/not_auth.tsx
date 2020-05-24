import { useEffect } from "react";
import { unwrapResult } from "@reduxjs/toolkit";

import { useAuth, useUser, useAppDispatch, useNotification } from "hooks";
import { authActions, userThunks } from "store";
import { IFetchUserWithTokenInput } from "services";
import { localStorageManager } from "common-utils";

export const NotAuth = () => {
  const { token } = useAuth();
  const { user } = useUser();
  const dispatch = useAppDispatch();
  const { addNotification } = useNotification();

  useEffect(() => {
    const handleNotAuth = async (payload: IFetchUserWithTokenInput) => {
      if (token && user.id === 0) {
        try {
          const resultAction = await dispatch(userThunks.getUserWithToken(payload));
          unwrapResult(resultAction);
        } catch (err) {
          addNotification({
            content: "Veuillez vous reconnecter",
            title: "Session expirée",
            type: "error",
          });
          localStorageManager.authToken.remove();
          dispatch(authActions.changeStateToMustAuth());
        }
      } else if (!token) {
        dispatch(authActions.changeStateToMustAuth());
      }
    };

    handleNotAuth({ token });
  }, [token, user, dispatch, addNotification]);

  return null;
};
