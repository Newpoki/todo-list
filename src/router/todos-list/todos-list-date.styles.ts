import styled, { css } from "styled-components";
import { theme } from "theme";
import { NavLink } from "react-router-dom";

const commonFontStyles = css`
  color: ${theme.colors.light000};
  font-family: ${theme.fontFamilies.open};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DayNumberMonthYearWrapper = styled.h1`
  margin: 0;
  display: flex;
  align-items: center;
`;

export const DayNumber = styled.span`
  ${commonFontStyles};
  font-size: 42px;
  line-height: 1;
`;

export const MonthYearWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${theme.spacing("XS-8")};
`;

export const Month = styled.span`
  ${commonFontStyles};
  font-weight: 700;
  font-size: 14px;
`;
export const Year = styled.span`
  ${commonFontStyles};
  font-weight: 400;
  font-size: 14px;
`;

export const GoToHome = styled(NavLink)`
  ${commonFontStyles};
  margin-left: auto;
  font-size: 12px;

  &:visited {
    color: ${commonFontStyles};
  }
`;
