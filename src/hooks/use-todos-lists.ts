import { useDispatch, useSelector } from "react-redux";
import {
  IUpdateTodoStatePayload,
  IDeleteTodoPayload,
  IAddTodoPayload,
  getTodosLists,
  getTodosListsNumberByState,
  getTodosListsRequestStatus,
  todosListsThunks,
  IFetchTodosListsPayload,
  IAddTodosListPayload,
  IDeleteTodosListPayload,
} from "store";
import { useMemo, useCallback } from "react";

export const useTodosLists = () => {
  const dispatch = useDispatch();

  const requestsStatus = useSelector(getTodosListsRequestStatus);
  const todosLists = useSelector(getTodosLists);
  const onGoingTodosListsNumber = useSelector(getTodosListsNumberByState("ON_GOING"));
  const doneTodosListsNumber = useSelector(getTodosListsNumberByState("DONE"));

  const fetchTodosLists = useCallback(
    (payload: IFetchTodosListsPayload) => {
      dispatch(todosListsThunks.fetchTodosLists(payload));
    },
    [dispatch]
  );

  const addTodosList = useCallback(
    (payload: IAddTodosListPayload) => {
      dispatch(todosListsThunks.addTodosList(payload));
    },
    [dispatch]
  );

  const deleteTodosList = useCallback(
    (payload: IDeleteTodosListPayload) => {
      dispatch(todosListsThunks.deleteTodosList(payload));
    },
    [dispatch]
  );

  const addTodo = useCallback(
    (payload: IAddTodoPayload) => {
      dispatch(todosListsThunks.addTodo(payload));
    },
    [dispatch]
  );

  const deleteTodo = useCallback(
    (payload: IDeleteTodoPayload) => {
      dispatch(todosListsThunks.deleteTodoRequest(payload));
    },
    [dispatch]
  );

  const updateTodoState = useCallback(
    (payload: IUpdateTodoStatePayload) => {
      dispatch(todosListsThunks.updateTodoState(payload));
    },
    [dispatch]
  );

  return useMemo(
    () => ({
      fetchTodosLists,
      addTodosList,
      deleteTodosList,
      addTodo,
      deleteTodo,
      updateTodoState,
      todosLists,
      requestsStatus,
      onGoingTodosListsNumber,
      doneTodosListsNumber,
    }),
    [
      fetchTodosLists,
      addTodosList,
      deleteTodosList,
      addTodo,
      deleteTodo,
      updateTodoState,
      todosLists,
      requestsStatus,
      onGoingTodosListsNumber,
      doneTodosListsNumber,
    ]
  );
};
