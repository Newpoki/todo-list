import { useDispatch, useSelector } from "react-redux";
import {
  userActions,
  ITodoList,
  getUserTodosLists,
  getUserGetRequestStatus,
  getUserPersonalInformations,
  getTodosListsNumberByState,
} from "store";
import { useMemo, useCallback } from "react";

export const useUser = () => {
  const dispatch = useDispatch();

  const todosLists = useSelector(getUserTodosLists);
  const userPersonalInformations = useSelector(getUserPersonalInformations);
  const getRequestStatus = useSelector(getUserGetRequestStatus);
  const onGoingTodosListsNumber = useSelector(getTodosListsNumberByState("ON_GOING"));
  const doneTodosListsNumber = useSelector(getTodosListsNumberByState("DONE"));

  const addNewTodosList = useCallback(
    (todosList: ITodoList) => {
      dispatch(userActions.addNewTodosList(todosList));
    },
    [dispatch]
  );

  const removeTodosList = useCallback(
    (todosListId) => {
      dispatch(userActions.removeTodosList(todosListId));
    },
    [dispatch]
  );

  return useMemo(
    () => ({
      addNewTodosList,
      removeTodosList,
      todosLists,
      getRequestStatus,
      userPersonalInformations,
      onGoingTodosListsNumber,
      doneTodosListsNumber,
    }),
    [
      addNewTodosList,
      removeTodosList,
      todosLists,
      getRequestStatus,
      userPersonalInformations,
      onGoingTodosListsNumber,
      doneTodosListsNumber,
    ]
  );
};
