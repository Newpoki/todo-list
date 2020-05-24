import { useSelector } from "react-redux";
import { useMemo } from "react";

import { getUserGetRequestStatus, getUserData } from "store";

export const useUser = () => {
  const user = useSelector(getUserData);
  const getRequestStatus = useSelector(getUserGetRequestStatus);

  return useMemo(
    () => ({
      getRequestStatus,
      user,
    }),
    [getRequestStatus, user]
  );
};
