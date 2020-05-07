import React from "react";

import * as Styled from "./home.styles";
import { TodoListPreview, ITodoListPreviewProps } from "components";
import { HomeHeader } from "./home-header";
import Skeleton from "react-loading-skeleton";
import { HomeFooter } from "./home-footer";

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

const previewList: ITodoListPreviewProps[] = [
  firstTodoListPreview,
  secondTodoListPreview,
  thirdTodoListPreview,
  fourthTodoListPreview,
];

export const Home = () => {
  return (
    <Styled.Wrapper>
      <HomeHeader />

      <Styled.TodoListsPreviewWrapper>
        {previewList.length === 0 ? (
          <>
            <Styled.TodoListPreviewWrapper>
              <Skeleton height="120px" />
            </Styled.TodoListPreviewWrapper>
            <Styled.TodoListPreviewWrapper>
              <Skeleton height="120px" />
            </Styled.TodoListPreviewWrapper>
            <Styled.TodoListPreviewWrapper>
              <Skeleton height="120px" />
            </Styled.TodoListPreviewWrapper>
          </>
        ) : (
          previewList.map((preview) => {
            return (
              <Styled.TodoListPreviewWrapper>
                <TodoListPreview {...preview} />
              </Styled.TodoListPreviewWrapper>
            );
          })
        )}
      </Styled.TodoListsPreviewWrapper>

      <HomeFooter />
    </Styled.Wrapper>
  );
};
