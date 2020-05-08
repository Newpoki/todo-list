import React from "react";
import Skeleton from "react-loading-skeleton";

import * as Styled from "./todos-list-date.styles";
import { ITodoList, IAnyRequestStatus } from "store";
import { getDateData } from "./utils/get-date-data";
import { formatToFrDate } from "common-utils";

interface ITodosListDateProps {
  todosList?: ITodoList;
  getRequestStatus: IAnyRequestStatus;
}

export const TodosListDate = ({ todosList, getRequestStatus }: ITodosListDateProps) => {
  if (getRequestStatus === "PENDING") {
    return (
      <Styled.Wrapper>
        <Styled.DayNumberMonthYearWrapper>
          <Styled.DayNumber>
            <Skeleton width="50px" />
          </Styled.DayNumber>
          <Styled.MonthYearWrapper>
            <Styled.Month>
              <Skeleton width="50px" />
            </Styled.Month>
            <Styled.Year>
              <Skeleton />
            </Styled.Year>
          </Styled.MonthYearWrapper>
        </Styled.DayNumberMonthYearWrapper>
      </Styled.Wrapper>
    );
  }

  if (!todosList) {
    return <Styled.Wrapper>Wolah y'a pas de date c chop</Styled.Wrapper>;
  }

  const { updatedAt, createdAt } = todosList;

  const { day, month, year } = getDateData(createdAt);

  // On fait ici la vérification et non dans le JSx pour ne pas avoir de content-jumping lors de l'apparition
  const formatedUpdatedAt = updatedAt ? formatToFrDate(updatedAt, { withHours: true }) : "";

  return (
    <Styled.Wrapper>
      <Styled.DateWrapper>
        <Styled.DayNumberMonthYearWrapper>
          <Styled.DayNumber>{day}</Styled.DayNumber>
          <Styled.MonthYearWrapper>
            <Styled.Month>{month}</Styled.Month>
            <Styled.Year>{year}</Styled.Year>
          </Styled.MonthYearWrapper>
        </Styled.DayNumberMonthYearWrapper>
        <Styled.GoToHome to="/">Retour</Styled.GoToHome>
      </Styled.DateWrapper>

      <Styled.UpdatedAt isDisplayed={!formatedUpdatedAt}>
        Mise à jour le {formatedUpdatedAt}
      </Styled.UpdatedAt>
    </Styled.Wrapper>
  );
};
