import { useDispatch, useSelector } from "react-redux";
import {
  userActions,
  ITodoList,
  getUserTodosLists,
  getUserGetRequestStatus,
  getUserPersonalInformations,
  getTodosListsNumberByState,
  IUpdateTodoStatePayload,
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
    (todosListId: ITodoList["id"]) => {
      dispatch(userActions.removeTodosList(todosListId));
    },
    [dispatch]
  );

  const updateTodoState = useCallback(
    (payload: IUpdateTodoStatePayload) => {
      dispatch(userActions.updateTodoState(payload));
    },
    [dispatch]
  );

  return useMemo(
    () => ({
      addNewTodosList,
      removeTodosList,
      updateTodoState,
      todosLists,
      getRequestStatus,
      userPersonalInformations,
      onGoingTodosListsNumber,
      doneTodosListsNumber,
    }),
    [
      addNewTodosList,
      removeTodosList,
      updateTodoState,
      todosLists,
      getRequestStatus,
      userPersonalInformations,
      onGoingTodosListsNumber,
      doneTodosListsNumber,
    ]
  );
};
