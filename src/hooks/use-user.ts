import { useDispatch, useSelector } from "react-redux";
import { getUserGetRequestStatus, getUserData, userThunks, userActions, IUser } from "store";
import { useMemo, useCallback } from "react";

export const useUser = () => {
  const dispatch = useDispatch();

  const userData = useSelector(getUserData);
  const getRequestStatus = useSelector(getUserGetRequestStatus);

  const startConnection = useCallback(() => {
    dispatch(userThunks.connection());
  }, [dispatch]);

  const updateUser = useCallback(
    (payload: IUser) => {
      dispatch(userActions.updateUser(payload));
    },
    [dispatch]
  );

  return useMemo(
    () => ({
      startConnection,
      updateUser,
      getRequestStatus,
      userData,
    }),
    [startConnection, updateUser, getRequestStatus, userData]
  );
};
