import { useDispatch, useSelector } from "react-redux";
import {
  getTodosLists,
  getTodosListsNumberByState,
  getTodosListsRequestStatus,
  todosListsThunks,
} from "store";
import { useMemo, useCallback } from "react";
import {
  IFetchTodosListsInput,
  IPostTodosListInput,
  IDeleteTodosListsInput,
  IPostTodoInput,
  IPutTodosInput,
  IDeleteTodosInput,
} from "services";

export const useTodosLists = () => {
  const dispatch = useDispatch();

  const requestsStatus = useSelector(getTodosListsRequestStatus);
  const todosLists = useSelector(getTodosLists);
  const onGoingTodosListsNumber = useSelector(getTodosListsNumberByState("ON_GOING"));
  const doneTodosListsNumber = useSelector(getTodosListsNumberByState("DONE"));

  const fetchTodosLists = useCallback(
    (payload: IFetchTodosListsInput) => {
      dispatch(todosListsThunks.getTodosLists(payload));
    },
    [dispatch]
  );

  const addTodosList = useCallback(
    (payload: IPostTodosListInput) => {
      dispatch(todosListsThunks.addTodosList(payload));
    },
    [dispatch]
  );

  const deleteTodosList = useCallback(
    (payload: IDeleteTodosListsInput) => {
      dispatch(todosListsThunks.deleteTodosList(payload));
    },
    [dispatch]
  );

  const addTodo = useCallback(
    (payload: IPostTodoInput) => {
      dispatch(todosListsThunks.addTodo(payload));
    },
    [dispatch]
  );

  const deleteTodo = useCallback(
    (payload: IDeleteTodosInput) => {
      dispatch(todosListsThunks.deleteTodoRequest(payload));
    },
    [dispatch]
  );

  const updateTodoState = useCallback(
    (payload: IPutTodosInput) => {
      dispatch(todosListsThunks.updateTodo(payload));
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
