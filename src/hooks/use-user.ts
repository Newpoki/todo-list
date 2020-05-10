import { useDispatch, useSelector } from "react-redux";
import { getUserGetRequestStatus, getUserData, userThunks } from "store";
import { useMemo, useCallback } from "react";

export const useUser = () => {
  const dispatch = useDispatch();

  const userData = useSelector(getUserData);
  const getRequestStatus = useSelector(getUserGetRequestStatus);

  const startConnection = useCallback(() => {
    dispatch(userThunks.connection());
  }, [dispatch]);

  return useMemo(
    () => ({
      startConnection,
      getRequestStatus,
      userData,
    }),
    [startConnection, getRequestStatus, userData]
  );
};
