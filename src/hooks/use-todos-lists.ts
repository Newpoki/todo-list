import { useDispatch, useSelector } from "react-redux";
import {
  ITodoList,
  IUpdateTodoStatePayload,
  IDeleteTodoPayload,
  IAddTodoPayload,
  todosListsActions,
  getTodosLists,
  getTodosListsNumberByState,
  getTodosListsRequestStatus,
} from "store";
import { useMemo, useCallback } from "react";
import {} from "store/selectors/get-todos-lists-request-status";

export const useTodosLists = () => {
  const dispatch = useDispatch();

  const getRequestStatus = useSelector(getTodosListsRequestStatus);
  const todosLists = useSelector(getTodosLists);
  const onGoingTodosListsNumber = useSelector(getTodosListsNumberByState("ON_GOING"));
  const doneTodosListsNumber = useSelector(getTodosListsNumberByState("DONE"));

  const addNewTodosList = useCallback(
    (todosList: ITodoList) => {
      dispatch(todosListsActions.addNewTodosList(todosList));
    },
    [dispatch]
  );

  const deleteTodosList = useCallback(
    (todosListId: ITodoList["id"]) => {
      dispatch(todosListsActions.deleteTodosList(todosListId));
    },
    [dispatch]
  );

  const addTodo = useCallback(
    (payload: IAddTodoPayload) => {
      dispatch(todosListsActions.addTodo(payload));
    },
    [dispatch]
  );

  const deleteTodo = useCallback(
    (payload: IDeleteTodoPayload) => {
      dispatch(todosListsActions.deleteTodo(payload));
    },
    [dispatch]
  );

  const updateTodoState = useCallback(
    (payload: IUpdateTodoStatePayload) => {
      dispatch(todosListsActions.updateTodoState(payload));
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
      onGoingTodosListsNumber,
      doneTodosListsNumber,
    ]
  );
};
