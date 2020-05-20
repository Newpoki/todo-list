import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useMemo, useCallback } from "react";

import { getUserGetRequestStatus, getUserData, userThunks, getUserToken, userActions } from "store";
import { localStorageManager } from "common-utils";
import { IFetchUserWithTokenInput } from "services";

export const useUser = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const userData = useSelector(getUserData);
  const getRequestStatus = useSelector(getUserGetRequestStatus);
  const token = useSelector(getUserToken);

  const getUserWithToken = useCallback(
    async (payload: IFetchUserWithTokenInput) => {
      try {
        await dispatch<any>(userThunks.getUserWithToken(payload));
        localStorageManager.userToken.set(payload.token);
      } catch (err) {
        localStorageManager.userToken.remove();
        history.push("/login");
      }
    },
    [dispatch, history]
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
