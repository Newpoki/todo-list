import styled from "styled-components";

import { theme } from "theme";

export const NoTaskWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NoTaskContent = styled.p`
  font-family: ${theme.fontFamilies.open};
  color: ${theme.colors.light000};
  margin: 0;
  font-size: 24px;
  text-align: center;
`;

export const TasksTitle = styled.h2`
  font-family: ${theme.fontFamilies.open};
  color: ${theme.colors.light000};
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  margin-bottom: ${theme.spacing("S-12")};
`;

export const TasksWrapper = styled.ul`
  padding: 0;
`;

export const TaskWrapper = styled.li`
  font-family: ${theme.fontFamilies.open};
  color: ${theme.colors.light000};
  font-size: 16px;
  margin-bottom: ${theme.spacing("XXS-4")};
  margin-top: 0;
  list-style-type: none;
  display: flex;
  align-items: flex-start;
`;

export const TaskLabel = styled.span`
  width: 90%;
`;

export const TaskRemoveIconWrapper = styled.div`
  margin-left: auto;
  display: flex;
  cursor: pointer;
`;
