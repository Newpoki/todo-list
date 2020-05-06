import styled from "styled-components";
import { theme } from "./theme";

export const Wrapper = styled.div`
  background: ${theme.colors.purpleToPink};
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Header = styled.header`
  margin-bottom: ${theme.spacing("L-20")};
  padding: ${theme.spacing("XL-24")};
`;

export const Title = styled.h1`
  font-family: "Open sans";
  font-weight: 400;
  margin: 0;
  font-size: 28px;
  color: ${theme.colors.light000};
  margin-bottom: 8px;
`;

export const TotalTodoListsNumber = styled.h2`
  font-family: "Open sans";
  font-weight: 400;
  margin: 0;
  font-size: 14px;
  color: ${theme.colors.light000};

  strong {
    font-weight: 700;
  }
`;

export const TodoListsPreviewWrapper = styled.div`
  padding: ${theme.spacing("XL-24")};
  padding-top: 0;
`;

export const TodoListPreviewWrapper = styled.div`
  margin-bottom: 12px;
  background-color: ${theme.colors.light000};
  border-radius: 4px;
  max-height: 120px;
  overflow: hidden;
`;

export const Footer = styled.footer`
  height: 50px;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: ${theme.colors.light000};
`;

export const PlusIcon = styled.span`
  position: fixed;
  right: ${theme.spacing("XL-24")};
  border-radius: 50%;
  display: flex;
  align-items: center;
  width: 50px;
  height: 50px;
  justify-content: center;
  font-size: 36px;
  bottom: 25px;
  background-color: ${theme.colors.light000};
  cursor: pointer;
`;
