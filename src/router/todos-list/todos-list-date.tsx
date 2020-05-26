import React from "react";

import { ITodosList } from "store";
import { formatToFrDate } from "common-utils";
import * as Styled from "./todos-list-date.styles";
import { getDateData } from "./utils/get-date-data";
import Skeleton from "react-loading-skeleton";

interface ITodosListDateProps {
  todosList?: ITodosList;
  isLoading: boolean;
}

export const TodosListDate = ({ todosList, isLoading }: ITodosListDateProps) => {
  if (isLoading) {
    return (
      <Styled.Wrapper>
        <Styled.DateWrapper>
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
        </Styled.DateWrapper>

        <Styled.UpdatedAt isDisplayed={false}>
          <Skeleton width="70%" />
        </Styled.UpdatedAt>
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
