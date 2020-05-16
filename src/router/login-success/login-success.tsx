import { RouteComponentProps } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useUser } from "hooks";

export const LoginSuccess = (props: RouteComponentProps<{ token: string }>) => {
  const token = props.match.params.token;
  const dispatch = useDispatch();
  const { getUserWithToken } = useUser();

  useEffect(() => {
    getUserWithToken({ token });
  }, [dispatch, getUserWithToken, token]);

  return null;
};
