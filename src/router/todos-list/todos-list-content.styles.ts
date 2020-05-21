import styled, { css } from "styled-components";
import { theme } from "theme";
import { ITodoState } from "store";

const commonTextStyles = css`
  font-family: ${theme.fontFamilies.open};
  margin: 0;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-bottom: ${theme.spacing("XL-24")};
`;

export const Title = styled.h1`
  ${commonTextStyles};
  color: ${theme.colors.light000};
  font-size: 24px;
`;

export const EmptyTodosListWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const EmptyTodosListText = styled.h2`
  color: ${theme.colors.light000};
  font-family: ${theme.fontFamilies.open};
  font-weight: 400;
  margin: 0;
  text-align: center;
`;

export const TodosWrapper = styled.ul`
  margin: 0;
  padding: 0;
  margin-top: ${theme.spacing("L-20")};
`;

export const TodoWrapper = styled.li`
  list-style-type: none;
  display: flex;
  align-items: flex-start;
  margin-bottom: ${theme.spacing("M-16")};
`;

export const TodoLabel = styled.span<{ state: ITodoState }>`
  ${commonTextStyles}
  color: ${theme.colors.light000};

  ${({ state }) =>
    state === "DONE" &&
    css`
      color: ${theme.colors.light300};
      text-decoration: line-through;
    `}
`;

export const TodoStateIconWrapper = styled.div<{ state: ITodoState }>`
  display: flex;
  margin-right: ${theme.spacing("XS-8")};
  color: ${({ state }) => (state === "DONE" ? theme.colors.aqua : theme.colors.light000)};
  cursor: pointer;
`;

export const DeleteTodoIconWrapper = styled.div<{ state: ITodoState }>`
  display: flex;
  margin-left: auto;
  padding-left: ${theme.spacing("XS-8")};
  color: ${theme.colors.light000};

  ${({ state }) =>
    state === "DONE" &&
    css`
      color: ${theme.colors.light300};
    `}
`;
