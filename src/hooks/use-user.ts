import { useDispatch, useSelector } from "react-redux";
import {
  getUserGetRequestStatus,
  getUserData,
  userThunks,
  IGetUserWithGoogleTokenPayload,
  getUserToken,
} from "store";
import { useMemo, useCallback } from "react";

export const useUser = () => {
  const dispatch = useDispatch();

  const userData = useSelector(getUserData);
  const getRequestStatus = useSelector(getUserGetRequestStatus);
  const token = useSelector(getUserToken);

  const getUserWithToken = useCallback(
    (payload: IGetUserWithGoogleTokenPayload) => {
      dispatch(userThunks.getUserWithToken(payload));
    },
    [dispatch]
  );

  return useMemo(
    () => ({
      getUserWithToken,
      getRequestStatus,
      userData,
      token,
    }),
    [getUserWithToken, getRequestStatus, userData, token]
  );
};
