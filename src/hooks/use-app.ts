import { useDispatch } from "react-redux";
import { appActions } from "../store/reducers";
import { useMemo, useCallback } from "react";

export const useApp = () => {
  const dispatch = useDispatch();

  const openAppMenu = useCallback(() => {
    dispatch(appActions.openMenu());
  }, [dispatch]);

  return useMemo(
    () => ({
      openAppMenu,
    }),
    [openAppMenu]
  );
};
