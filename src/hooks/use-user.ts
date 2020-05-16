import { useDispatch, useSelector } from "react-redux";
import {
  getUserGetRequestStatus,
  getUserData,
  userThunks,
  IGetUserWithGoogleTokenPayload,
} from "store";
import { useMemo, useCallback } from "react";

export const useUser = () => {
  const dispatch = useDispatch();

  const userData = useSelector(getUserData);
  const getRequestStatus = useSelector(getUserGetRequestStatus);

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
    }),
    [getUserWithToken, getRequestStatus, userData]
  );
};
