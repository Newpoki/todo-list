import { useDispatch, useSelector } from "react-redux";
import {
  userActions,
  ITodoList,
  getUserTodosLists,
  getUserGetRequestStatus,
  getUserPersonalInformations,
  getTodosListsNumberByState,
  IUpdateTodoStatePayload,
  IDeleteTodoPayload,
  IAddTodoPayload,
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

  const deleteTodosList = useCallback(
    (todosListId: ITodoList["id"]) => {
      dispatch(userActions.deleteTodosList(todosListId));
    },
    [dispatch]
  );

  const addTodo = useCallback(
    (payload: IAddTodoPayload) => {
      dispatch(userActions.addTodo(payload));
    },
    [dispatch]
  );

  const deleteTodo = useCallback(
    (payload: IDeleteTodoPayload) => {
      dispatch(userActions.deleteTodo(payload));
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
      deleteTodosList,
      addTodo,
      deleteTodo,
      updateTodoState,
      todosLists,
      getRequestStatus,
      userPersonalInformations,
      onGoingTodosListsNumber,
      doneTodosListsNumber,
    }),
    [
      addNewTodosList,
      deleteTodosList,
      addTodo,
      deleteTodo,
      updateTodoState,
      todosLists,
      getRequestStatus,
      userPersonalInformations,
      onGoingTodosListsNumber,
      doneTodosListsNumber,
    ]
  );
};
