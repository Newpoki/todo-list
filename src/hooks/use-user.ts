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
    (payload: IFetchUserWithTokenInput) => {
      dispatch(userThunks.getUserWithToken(payload));
    },
    [dispatch]
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
