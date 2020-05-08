import styled from "styled-components";
import { theme } from "theme";
import { ITodoState } from "store";

export const Wrapper = styled.div``;

export const Title = styled.h1`
  margin: 0;
  font-family: ${theme.fontFamilies.open};
  color: ${theme.colors.light000};
  font-size: 24px;
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
  margin-bottom: ${theme.spacing("XS-8")};
`;

export const TodoLabel = styled.span`
  font-family: ${theme.fontFamilies.open};
  color: ${theme.colors.light000};
`;

export const TodoStateIconWrapper = styled.div<{ state: ITodoState }>`
  display: flex;
  margin-right: ${theme.spacing("XS-8")};
  color: ${({ state }) => (state === "DONE" ? "green" : "white")};
`;
