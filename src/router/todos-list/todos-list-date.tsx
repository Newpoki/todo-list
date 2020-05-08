import React from "react";
import Skeleton from "react-loading-skeleton";

import * as Styled from "./todos-list-date.styles";
import { ITodoList, IAnyRequestStatus } from "store";
import { getDateData } from "./utils/get-date-data";

interface ITodosListDateProps {
  date?: ITodoList["createdAt"];
  getRequestStatus: IAnyRequestStatus;
}

export const TodosListDate = ({ date, getRequestStatus }: ITodosListDateProps) => {
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

  if (getRequestStatus === "ERROR" || !date) {
    return <Styled.Wrapper>Wolah y'a pas de date c chop</Styled.Wrapper>;
  }

  const { day, month, year } = getDateData(date);

  return (
    <Styled.Wrapper>
      <Styled.DayNumberMonthYearWrapper>
        <Styled.DayNumber>{day}</Styled.DayNumber>
        <Styled.MonthYearWrapper>
          <Styled.Month>{month}</Styled.Month>
          <Styled.Year>{year}</Styled.Year>
        </Styled.MonthYearWrapper>
      </Styled.DayNumberMonthYearWrapper>

      <Styled.GoToHome to="/">Retour</Styled.GoToHome>
    </Styled.Wrapper>
  );
};
