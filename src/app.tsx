import React from "react";
// import { useApp } from "./hooks";

import * as Styled from "./app.styles";
import { TodoListPreview, ITodoListPreviewProps } from "./components";

const firstTodoListPreview: ITodoListPreviewProps = {
  id: "firstTodoListPreviewId",
  title: "Liste de course",
  createdAt: 1588700509000,
  updatedAt: 1588786909000,
  list: [
    {
      id: "efeffef",
      label: "Acheter du lait",
      state: "ON_GOING",
    },
    {
      id: "efeffef98451",
      label: "Acheter de la DROGUE",
      state: "ON_GOING",
    },
  ],
};

const secondTodoListPreview: ITodoListPreviewProps = {
  id: "secondTodoListPreviewId",
  title: "Faire le ménage",
  createdAt: 1588700509000,
  list: [
    {
      id: "regiuhrihug",
      label: "Nettoyer les vitres",
      state: "ON_GOING",
    },
  ],
};

const thirdTodoListPreview: ITodoListPreviewProps = {
  id: "thirdTodoListPreviewId",
  title: "Faire les bébé",
  createdAt: 1588700509000,
  updatedAt: 1588786909000,
  list: [
    {
      id: "hthttyj",
      label: "Nettoyer les vitres",
      state: "ON_GOING",
    },
  ],
};

const fourthTodoListPreview: ITodoListPreviewProps = {
  id: "fourthTodoListPreviewId",
  title: "DO THE WAF",
  createdAt: 1588700509000,
  list: [
    {
      id: "proigjrg",
      label: "Nettoyer les vitres",
      state: "ON_GOING",
    },
  ],
};

export const App = () => {
  // const { openAppMenu } = useApp();

  return (
    <Styled.Wrapper>
      <Styled.Header>
        <Styled.Title>Bonjour, Jason</Styled.Title>
        <Styled.TotalTodoListsNumber>
          <strong>3 </strong>
          tâches en cours
        </Styled.TotalTodoListsNumber>
        <Styled.TotalTodoListsNumber>
          <strong>1 </strong>
          tâches terminée
        </Styled.TotalTodoListsNumber>
      </Styled.Header>

      <Styled.TodoListsPreviewWrapper>
        <Styled.TodoListPreviewWrapper>
          <TodoListPreview {...firstTodoListPreview} />
        </Styled.TodoListPreviewWrapper>
        <Styled.TodoListPreviewWrapper>
          <TodoListPreview {...secondTodoListPreview} />
        </Styled.TodoListPreviewWrapper>
        <Styled.TodoListPreviewWrapper>
          <TodoListPreview {...thirdTodoListPreview} />
        </Styled.TodoListPreviewWrapper>
        <Styled.TodoListPreviewWrapper>
          <TodoListPreview {...fourthTodoListPreview} />
        </Styled.TodoListPreviewWrapper>
      </Styled.TodoListsPreviewWrapper>

      <Styled.Footer>
        <Styled.PlusIcon>+</Styled.PlusIcon>
      </Styled.Footer>
    </Styled.Wrapper>
  );
};
